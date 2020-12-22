import express from "express"
import mongoose from 'mongoose'
import bodyParser from "body-parser"
import cors from "cors"
import weatherRouter from './routes/weather.js'
import userRouter from './routes/user.js'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/api/v1/weather', weatherRouter)
app.use('/api/v1/user', userRouter)

app.get('/', (req, res) => {
    res.send('Hello to weather app backend')
})

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
    .catch((err) => console.log(err.message))

mongoose.set('useFindAndModify', false)