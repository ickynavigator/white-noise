import 'module-alias/register'
import express, { Express } from 'express'
import 'dotenv/config'
import morgan from 'morgan'
import { routes } from '@src/routes/route'

const app: Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

const PORT = process.env.PORT || '5000'

app.use('/api', routes)

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`listening on port ${PORT}`)
})
