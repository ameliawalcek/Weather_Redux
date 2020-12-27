import express from 'express'
import dataControllers from '../controllers/dataControllers.js'
const userRouter = express.Router()

userRouter.get("/favorites", async (req, res) => {
    const favorites = await dataControllers.mongoClient.getFavorites()
    res.send(favorites)
})

userRouter.post("/favorites", async (req, res) => {
    const { cityId } = req.body
    const newFavorite = await dataControllers.mongoClient.createFavorite({ cityId })
    newFavorite.save()

    res.send(newFavorite)
})

userRouter.delete('/favorites/:cityId', async (req, res) => {
    const { cityId } = req.params
    await dataControllers.mongoClient.deleteFavorite(cityId)
    console.log('deleting favorite')

    res.end()
})

export default userRouter