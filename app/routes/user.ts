import Router from 'koa-router';
import UserController from '../controller/user';

const router = new Router({
  prefix: '/user',
});

router
  .post('/login', UserController.login)
  .post('/register', UserController.register)
  .get('/info', UserController.info)
  .post('/info', UserController.update);

export default router;
