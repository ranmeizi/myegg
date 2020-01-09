import { Application } from 'egg';

export default (app: Application) => {
	const { controller, router } = app;
	app.middleware.time()
	router.get('/', controller.home.index);
	router.post('/ex/login', controller.ex.login.index);
};
