export default (app) => {
  const { STRING } = app.Sequelize;
  const GroupResourceRel = app.model.define(
    'sys_group_resource_rel',
    {
      gid: STRING(36),
      mid: STRING(36)
    }, {
    freezeTableName: true, //禁用修改表名 不加s
    timestamps: false //禁用时间  不加created_at/updated_at
  });

  return GroupResourceRel;
};
