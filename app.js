import express from 'express'
import dotenv from 'dotenv'
import globalSearchRoutes from './routes/globalSearch.js'

dotenv.config()

const app = express()

app.use(express.json())

app.use('/api', globalSearchRoutes)

export default app
