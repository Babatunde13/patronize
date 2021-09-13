import { Model, DataTypes } from 'sequelize'
import sequelize from './connect'

class Transactions extends Model {}

Transactions.init({
  title: DataTypes.STRING,
  user: DataTypes.STRING
}, 
{ sequelize, modelName: 'transaction' }
)

export default Transactions
