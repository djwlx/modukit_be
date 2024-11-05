import Router from 'koa-router';

const router = new Router({
  prefix: '/api',
});

router.get('/test', (ctx) => {
  ctx.body = {
    code: 0,
    data: 'hello world',
  };
});

export default router;
