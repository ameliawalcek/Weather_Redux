import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const { WEATHER_API_KEY } = process.env

class WeatherAPI {
    constructor() {
        this.baseUrl = 'http://api.openweathermap.org/data/2.5'
        this.key = WEATHER_API_KEY
    }

    getUnits = (units) => units === 'f' ? 'imperial' : 'metric'

    async getCity(search) {
        let { query, units } = search
        units = this.getUnits(units)
        console.log('getting city')

        return (await axios.get(`${this.baseUrl}/find?q=${query}&units=${units}&appid=${this.key}`)).data.list[0]
    }

    async getCities(cities, units) {
        const query = cities.join(",")
        units = this.getUnits(units)
        console.log('getting cities')

        try {
            return (await axios.get(`${this.baseUrl}/group?id=${query}&units=${units}&appid=${this.key}`)).data.list
        } catch (error) {
            console.log(error)
        }
    }
}

export default WeatherAPI