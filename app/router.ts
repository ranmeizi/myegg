import { Application } from 'egg';

export default (app: Application) => {
	const { controller, router, jwt } = app;
	// 计时
	app.middleware.time()
	// 捕获异常
	app.middleware.errorHandler()
	router.get('/api/player/login', controller.login.login);
	router.post('/api/player/regist', controller.login.regist);
	router.get('/api/ex/player/helloworld', jwt, controller.ex.test.index);
};