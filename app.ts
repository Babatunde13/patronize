import express, { Application } from 'express'
import { infoLogger, errorLogger } from './src/utils/logger'
import routes from './src/routes'
import envs from './src/utils/envs'
import sequelize from './src/models/connect'

const app:  Application = express()
const PORT = envs.envs.PORT || 5000

// add app configurations here
sequelize.authenticate()
    .then(() => {
        infoLogger('Connection has been established successfully.')
    }).catch ((error) => {
        errorLogger(`Unable to connect to the database:, ${error}`)
    })

// add middlewares here
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// add routes middlewares here
app.use('/api/v1/', routes)

app.listen(PORT, () => {
	infoLogger(`App running on port ${PORT}`)
})
