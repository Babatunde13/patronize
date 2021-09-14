import { Model, DataTypes } from 'sequelize'
import sequelize from './connect'

class Banks extends Model {}

Banks.init({
  accountName: DataTypes.STRING,
  bankName: DataTypes.STRING,
  accountNumber: DataTypes.STRING
}, 
{ sequelize, modelName: 'banks', updatedAt: true, createdAt: true  }
)

export default Banks
