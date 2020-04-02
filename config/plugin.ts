import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  jwt: {
    enable: true,
    package: "egg-jwt"
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  // mysql: {
  //   enable: true,
  //   package: 'egg-mysql',
  // },
  sequelize: {
    enable: true,
    package: 'egg-sequelize'
  }
};

export default plugin;
