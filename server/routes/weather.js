import express from 'express'
import dataControllers from '../controllers/dataControllers.js'
const weatherRouter = express.Router()
//4

weatherRouter.get('/city/:query/:units', async (req, res) => {
    //query is cityName/lat lon/etc
    let response = await dataControllers.weatherAPI.getCity(req.params)
    res.send(response)
})

weatherRouter.post('/cities/:units', async (req, res) => {
    const { cities } = req.body
    const { units } = req.params
    let response = await dataControllers.weatherAPI.getCities(cities, units)
    res.send(response)
})

export default weatherRouter