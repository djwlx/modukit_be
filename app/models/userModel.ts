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
});

user.sync({ force: true });

export default user;
