import { v4 as uuidv4 } from 'uuid';

export default (app) => {
	const { STRING, DATE } = app.Sequelize;
	const User = app.model.define(
		'sys_user',
		{
			uid: {
				type: STRING(36),
				primaryKey: true,
			},
			name: STRING(20),
			uname: STRING(20),
			psw: STRING(64),
			salt: STRING(10),
			tel: STRING(20),
			email: STRING(50),
			created_at: DATE,
			updated_at: DATE,
		},
		// 禁用修改表名; 默认情况下,sequelize将自动将所有传递的模型名称(define的第一个参数)转换为复数. 如果你不想这样,请设置以下内容
		{ freezeTableName: true }
	);
	// ↓通用的
	/**
	 * 使用用户名查询用户
	 * @param {string} uname 用户名
	 */
	User.getUserByUname = async function (uname: string) {
		return await this.findAll({
			where: { uname },
			raw: true,
		});
	};

	/**
	 * 注册用户
	 */
	User.registUser = async function (uname, psw, salt) {
		return await User.create({
			uid: uuidv4(),
			uname,
			psw,
			salt,
		});
	};
	return User;
};
