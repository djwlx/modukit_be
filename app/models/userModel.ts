import sequelize from '../utils/sequelize';
import { DataTypes } from 'sequelize';

const user = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
  },
  nickname: {
    type: DataTypes.STRING,
  },
  avatar: {
    type: DataTypes.STRING,
    defaultValue: 'https://img.djwl.top/icon/-3d5176eed3e011db.jpg',
  },
  email: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  },
});

user.sync({ alter: true });

export default user;
