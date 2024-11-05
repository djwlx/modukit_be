import Router from 'koa-router';
import { CronJob } from 'cron';

const router = new Router({
  prefix: '/api',
});

router
  .get('/test', ctx => {
    ctx.body = {
      code: 0,
      data: 'hello world',
    };
  })
  .get('/job', ctx => {
    ctx.body = {
      code: 0,
      data: 'hello world2',
    };
    const job = new CronJob(
      '* * * * * *', // cronTime
      function () {
        console.log('You will see this message every second');
      }, // onTick
      null, // onComplete
      true, // start
    );
  });

export default router;
