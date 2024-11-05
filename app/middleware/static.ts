import { getRootPath } from '../utils/path';
import fs from 'fs';
import serve from 'koa-static';
import { checkFile } from '../utils/file';
const rootPath = getRootPath();

const publicPath = `${rootPath}/public/dist`;
// 静态文件中间件，负责返回前端需要的内容
const staticMiddleware = (): MyMiddleware => {
  return async (ctx, next) => {
    const {
      method, // 请求方法
      url, // 请求链接
    } = ctx?.request;

    if (method === 'GET' && !url.startsWith('/api')) {
      const fileUrl = `${publicPath}${url}`;
      const { isFile } = checkFile(fileUrl);
      if (isFile) {
        await serve(publicPath)(ctx, next);
      } else {
        ctx.type = 'html';
        ctx.body = fs.createReadStream(`${publicPath}/html/main/index.html`);
      }
    } else {
      return await next();
    }
  };
};

export default staticMiddleware;
