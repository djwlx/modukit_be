import UserService from '../service/user';
import jwt from '../utils/jwt';
import { resError, resSuccess } from '../utils/response';

class UserController {
  static login: MyMiddleware = async (ctx, next) => {
    const param = ctx.request.body;
    if (!param.username || !param.password) {
      resError(ctx, 400, '用户名或密码不能为空');
    } else {
      const findOne: any = await UserService.query(param);
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
}

export default UserController;
