import { Context } from 'koa';

export const resSuccess = (ctx: Context, data: any, message?: string) => {
  ctx.body = {
    code: 0,
    message: message || 'success',
    data,
  };
};

export const resError = (ctx: Context, code: number, message: string) => {
  ctx.status = code;
  ctx.body = {
    code,
    message,
  };
};
