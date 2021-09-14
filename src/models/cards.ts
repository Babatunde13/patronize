import { DataTypes } from 'sequelize'
import sequelize from './connect'

const Cards = sequelize.define('cards', {
  cardNumber: DataTypes.STRING,
  CVV: DataTypes.STRING,
  expiryMonth: DataTypes.STRING,
  expiryYear: DataTypes.STRING,
}, 
{ updatedAt: true, createdAt: true }
)

export default Cards
