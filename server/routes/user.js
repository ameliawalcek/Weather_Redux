import express from 'express'
import dataControllers from '../controllers/dataControllers.js'
const userRouter = express.Router()
//4

userRouter.get("/cities", async (req, res) => {
    const user = await dataControllers.mongoClient.getCities()
    res.send(user)
})

export default userRouter