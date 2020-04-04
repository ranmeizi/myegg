export default (app) => {
  const { STRING } = app.Sequelize;
  const User = app.model.define('sys_user', {
    uid: STRING(64),
    name: STRING(20),
    uname: STRING(20),
    psw: STRING(64),
    salt: STRING(10),
    create_time: STRING(20),
    tel: STRING(20),
    email: STRING(50)
  });
  // ↓通用的
  // 增加用户
  User.findByLogin = async function () {
    return await this.findOne({
      where: {
        login: login
      }
    });
  }
  return User;
};
