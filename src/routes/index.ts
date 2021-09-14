import { Router, Response, Request } from 'express'
import crypto from 'crypto'
import logger from '../middlewares/logger'
import transactions from './transactions'
import users from './users'
import { infoLogger } from '../utils/logger'

const routes = Router()
const SECRET = process.env.SECRET_KEY

routes.use(logger)
routes.use('/transactions', transactions)
routes.use('/users/', users)

// paystack webhook
routes.post('/my/webhook/url', function(req, res) {
    //validate event
    const hash = crypto.createHmac('sha512', SECRET).update(JSON.stringify(req.body)).digest('hex')
    if (hash == req.headers['x-paystack-signature']) {
        // Retrieve the request's body
        const event = req.body
        // Do something with event 
        infoLogger(event)
    }
    res.send(200)
})

routes.use('*', (req: Request, res: Response) => {
	res.status(404).json({
		data: null,
		errors: 'The path you made request to does not exist for the used method',
        status: 'bad',
        message: 'not found'
	})
})

export default routes
