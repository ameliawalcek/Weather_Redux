import Weather from '../models/weather.js'

class MongoClient {
    getCities() {
        return Weather
            .find({})
            .lean()
    }
}

export default MongoClient