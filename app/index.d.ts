import { Context } from 'koa';

interface MyContext extends Context {
  state: {
    userInfo?: {
      id: number;
      username: string;
      password?: string;
      nickname?: string;
      avatar?: string;
      email?: string;
      status?: string;
    };
  };
}

// 全局类型
declare global {
  type MyMiddleware = (ctx: MyContext, next: (err?: any) => Promise<any>) => Promise<any>;
}
