import Weather from '../models/weather.js'
//3

class MongoClient {
    getCities() {
        return Weather
            .find({})
            .lean()
    }
}

export default MongoClient