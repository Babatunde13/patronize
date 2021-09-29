import Banks from './banks'
import Cards from './cards'
import Transactions from './transactions'
import User from './user'

// set up associations 
// one - many side
User.hasMany(Banks)
User.hasMany(Cards)
User.hasMany(Transactions)

// many - one side
Banks.belongsTo(User)
Cards.belongsTo(User)
Transactions.belongsTo(User)

export default {
  Banks,
  Cards,
  Transactions,
  User
}
