import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
	const config = {} as PowerPartial<EggAppConfig>;

	// override config from framework / plugin
	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1578573387976_8312';

	// add your egg config in here
	config.middleware = ['time'];
	// add your special config in here
	const bizConfig = {
		sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
	};

	config.security = {
		csrf: {
			enable: false,
			ignoreJSON: true
		},
		domainWhiteList: ['http://localhost:8080'],//允许访问接口的白名单
	};
	config.jwt = {
		secret: "123456"//自定义 token 的加密条件字符串
	};
	config.cors = {
		origin: '*',
		allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
	};
	config.sequelize = {
		dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
		database: 'DG_GAME',
		host: '127.0.0.1',
		port: 3306,
		username: 'root',
		password: 'UltraTel@5266',
	};

	// the return config will combines to EggAppConfig
	return {
		...config,
		...bizConfig,
	};
};
