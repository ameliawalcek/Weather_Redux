import express from 'express'
import dataControllers from '../controllers/dataControllers.js'
const userRouter = express.Router()
//4

userRouter.get("/favorites", async (req, res) => {
    const favorites = await dataControllers.mongoClient.getFavorites()
    console.log(favorites)
    res.send(favorites)
})

userRouter.post("/favorites", async (req, res) => {
    const { cityId } = req.body
    console.log(req.body)
    console.log('creating favorite', cityId)
    const newFavorite = await dataControllers.mongoClient.createFavorite({ cityId })
    console.log('new favorite', newFavorite)
    // res.send(favorites)
})

userRouter.delete('/favorites/:cityId', async (req, res) => {
    const { cityId } = req.params
    console.log('deleting favorite', cityId)
    await dataControllers.mongoClient.deleteFavorite(cityId)
    console.log('deleting favorite')
    // res.end()
})

export default userRouter