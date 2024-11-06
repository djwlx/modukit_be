import UserService from '../service/user';
import jwt from '../utils/jwt';
import { resError, resSuccess } from '../utils/response';

class UserController {
  static login: MyMiddleware = async (ctx, next) => {
    const param = ctx.request.body;
    if (!param.username || !param.password) {
      resError(ctx, 400, '用户名或密码不能为空');
    } else {
      const hasUser = await UserService.hasUser(param.username);
      if (!hasUser) {
        resError(ctx, 400, '用户不存在');
        return;
      }
      const findOne: any = await UserService.query({
        username: param.username,
        password: param.password,
      });

      if (findOne) {
        const token = jwt.setToken({ id: findOne.id });
        resSuccess(ctx, { token }, '登录成功');
      } else {
        resError(ctx, 400, '用户名或密码错误');
      }
    }
  };

  // 注册
  static register: MyMiddleware = async (ctx, next) => {
    const param = ctx.request.body;
    if (!param.username || !param.password) {
      resError(ctx, 400, '用户名或密码不能为空');
    } else {
      const findOne = await UserService.query(param);
      if (findOne) {
        resError(ctx, 400, '用户已存在');
      } else {
        const registerUser = await UserService.add(param);
        resSuccess(ctx, {}, '注册成功');
      }
    }
  };
  // 信息
  static info: MyMiddleware = async (ctx, next) => {
    resSuccess(ctx, ctx.state.userInfo);
  };
  // 修改信息
  static update: MyMiddleware = async (ctx, next) => {
    const param = ctx.request.body;
    const result = await UserService.updateById(1, {
      nickname: '低级亡灵',
    });
    console.log(result, 'ppppp');
    resSuccess(ctx, result);
    // const findOne = await UserService.query({ id: ctx.state.userInfo.id });
  };
}

export default UserController;
