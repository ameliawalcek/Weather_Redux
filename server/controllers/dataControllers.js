import MongoClient from './clientController.js'
import WeatherAPI from './weatherController.js'

class DataControllers {
    constructor() {
        this.mongoClient = new MongoClient()
        this.weatherAPI = new WeatherAPI()
    }
}

const dataControllers = new DataControllers()

export default dataControllers