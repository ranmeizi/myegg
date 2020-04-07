import { Application } from 'egg';

export default (app: Application) => {
	const { controller, router, jwt } = app;
	// 计时
	app.middleware.time()
	// 捕获异常
	app.middleware.errorHandler()
	router.get('/api/player/login', controller.login.getToken);
	router.post('/api/player/regist', controller.login.regist);
	router.post('/api/ex/player/regist', jwt, controller.login.regist);
};