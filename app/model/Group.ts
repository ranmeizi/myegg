export default (app) => {
  const { STRING, DATE } = app.Sequelize;
  const Group = app.model.define(
    'sys_group',
    {
      id: {
        type: STRING(36),
        primaryKey: true,
      },
      group: STRING(20),
      parent_id: STRING(36),
      description: STRING(256),
      created_at: DATE,
      updated_at: DATE,
    },
    // 禁用修改表名; 默认情况下,sequelize将自动将所有传递的模型名称(define的第一个参数)转换为复数. 如果你不想这样,请设置以下内容
    { freezeTableName: true }
  );

  return Group;
};
