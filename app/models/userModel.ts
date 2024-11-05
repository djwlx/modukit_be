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
  },
  email: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  },
});

// user.sync({ alter: true });

export default user;
