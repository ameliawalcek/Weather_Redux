import axios from 'axios'
import dotenv from 'dotenv'
//3

dotenv.config()
const { WEATHER_API_KEY } = process.env

class WeatherAPI {
    constructor() {
        this.baseUrl = 'http://api.openweathermap.org/data/2.5/find'
        this.key = WEATHER_API_KEY
    }

    async getCity(search) {
        let { query, units } = search
        units = units === 'f' ? 'imperial' : 'metric'

        return (await axios.get(`${this.baseUrl}?q=${query}&units=${units}&appid=${this.key}`)).data.list[1]
    }

    async getCities(cities, units) {
        //might be able to refer to the top method
        //api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&appid={API key}
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