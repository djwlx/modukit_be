import JWT from '../utils/jwt';
import { resError } from '../utils/response';
import UserService from '../service/user';

const notAuthUrl = ['/api/user/login', '/api/user/register'];

// 用户鉴权中间件，鉴权通过之后，将用户信息保存在state中方便后续操作没有权限返回401
const authenticate = (): MyMiddleware => {
  return async (ctx, next) => {
    const { header, url, method } = ctx.request;
    // 控制哪些路由不进行拦截
    if ((!url.startsWith('/api') && method === 'GET') || notAuthUrl.some(item => url === item)) {
      await next();
      return;
    }

    const token = header['authorization'] as string;
    if (!token) {
      resError(ctx, 401, '未进行用户认证');
    } else {
      // 认证成功后可以从数据库中取出用户信息放到ctx的state中,只捕获认证错误
      try {
        const data = JWT.getData(token);
        const { id } = data;
        const userInfo = await UserService.query({ id });
        ctx.state.userInfo = userInfo as any;
        await next();
      } catch (e) {
        resError(ctx, 401, '用户认证错误');
      }
    }
  };
};

export default authenticate;
