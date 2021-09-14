import { Model, DataTypes } from 'sequelize'
import sequelize from './connect'

class Cards extends Model {}

Cards.init({
  cardNumber: DataTypes.STRING,
  CVV: DataTypes.STRING,
  expDate: DataTypes.STRING,
}, 
{ sequelize, modelName: 'cards', updatedAt: true, createdAt: true }
)

export default Cards
