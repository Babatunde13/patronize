import { DataTypes } from 'sequelize'
import sequelize from './connect'

const Banks = sequelize.define('banks', {
  accountName: DataTypes.STRING,
  bankName: DataTypes.STRING,
  accountNumber: DataTypes.STRING
}, 
{ updatedAt: true, createdAt: true  }
)

export default Banks
