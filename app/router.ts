import { Application } from 'egg';

export default (app: Application) => {
	const { controller, router } = app;
	app.middleware.time()
	router.get('/v1/player/login', controller.login.getToken);
	router.post('/v1/player/regist', controller.login.regist)
};