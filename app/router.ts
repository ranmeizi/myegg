import { Application } from 'egg';

export default (app: Application) => {
	const { controller, router } = app;
	app.middleware.time()
	router.get('/token', controller.login.getToken);
};