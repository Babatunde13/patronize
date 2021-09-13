import { Model, DataTypes } from 'sequelize'
import sequelize from './connect'

class User extends Model {}

User.init({
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING(100),
  gender: DataTypes.ENUM('female', 'male')
}, 
{ sequelize, modelName: 'user' }
)

export default User
