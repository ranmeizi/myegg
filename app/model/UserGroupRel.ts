export default (app) => {
  const { STRING } = app.Sequelize;
  const UserGroupRel = app.model.define(
    'sys_user_group_rel',
    {
      uid: STRING(36),
      gid: STRING(36)
    }, {
    freezeTableName: true, //禁用修改表名 不加s
    timestamps: false //禁用时间  不加created_at/updated_at
  });

  return UserGroupRel;
};
