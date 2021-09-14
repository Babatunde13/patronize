import { DataTypes } from 'sequelize'
import sequelize from './connect'
import { TransactionType } from '../utils/types'

const Transactions = sequelize.define('', {
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
{updatedAt: true, createdAt: true }
)

export default Transactions
