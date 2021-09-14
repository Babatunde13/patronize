import { Model, DataTypes } from 'sequelize'
import sequelize from './connect'

class User extends Model {}

User.init({
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: DataTypes.STRING,
  availableBalance: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: '0'
  },
  ledgerBalance: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: '0'
  }
}, 
{ sequelize, modelName: 'users', updatedAt: true, createdAt: true  }
)

export default User
