import { Model, DataTypes } from 'sequelize'
import sequelize from './connect'
import { TransactionType } from '../utils/types'

class Transactions extends Model {}

Transactions.init({
  referenceId: DataTypes.UUIDV4,
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.ENUM({
      values: [TransactionType.credit,  TransactionType.debit]
    }),
    allowNull: false,
  },
}, 
{ sequelize, modelName: 'transactions', updatedAt: true, createdAt: true  }
)

export default Transactions
