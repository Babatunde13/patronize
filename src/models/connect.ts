import { Sequelize } from 'sequelize'
import envs from '../utils/envs'

const sequelize = new Sequelize(envs.envs.databaseURL || 'sqlite::memory:')

export default sequelize
