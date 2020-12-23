import axios from 'axios'
import dotenv from 'dotenv'
//3

dotenv.config()
const { WEATHER_API_KEY } = process.env

class WeatherAPI {
    constructor() {
        this.baseUrl = 'https://api.weatherstack.com'
        this.key = WEATHER_API_KEY //get key
    }

    async getCity(search) {
        const { query, units } = search
        const params = { access_key: this.key, query, units }

        return await axios.get(`${this.baseUrl}/current`, { params }).data
    }

    async getCities(cities, units) {
        //might be able to refer to the top method
        async function getCity(query) {
            const params = { access_key: this.key, query, units }

            return await axios.get(`${this.baseUrl}/current`, { params }).data
        }

        function awaitAllCities(cities, asyncFunc) {
            const promises = []

            cities.forEach(query => promises.push(asyncFunc(query)))

            return Promise.all(promises)
        }

        const result = await awaitAllCities(cities, getCity)
        console.log(result)
        return result
    }
}

export default WeatherAPI