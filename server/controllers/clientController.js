import Weather from '../models/weather.js'
//3

class MongoClient {
    async getFavorites() {
        return Weather
            .find({})
            .lean()
    }

    async createFavorite(cityId){
        return new Weather(cityId)
    }

    async deleteFavorite(cityId) {
        return Weather
        .deleteMany({cityId})
    }
}

export default MongoClient