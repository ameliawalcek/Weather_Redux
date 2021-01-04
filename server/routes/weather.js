import express from 'express'
import dataControllers from '../controllers/dataControllers.js'
const weatherRouter = express.Router()

weatherRouter.get('/city/:query/:units', async (req, res) => {
    let response = await dataControllers.weatherAPI.getCity(req.params)
    res.send(response)
})

weatherRouter.post('/cities/:units', async (req, res) => {
    const { cities } = req.body
    const { units } = req.params
    if (cities.length) {
        let response = await dataControllers.weatherAPI.getCities(cities, units)
        res.send(response)
    } else {
        res.end()
    }
})

weatherRouter.post('/city/live/:units', async(req, res) => {
    const {lat, lon} = req.body
    let response = await dataControllers.weatherAPI.getLiveCity(lat, lon)
    res.send(response)
})

export default weatherRouter