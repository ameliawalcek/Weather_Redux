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

        try {
            return (await axios.get(`${this.baseUrl}/find?q=${query}&units=${units}&appid=${this.key}`)).data.list[0]
        } catch (error) {
            console.log(error)
        }
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

    async getLiveCity(lat, lon, units) {
        units = this.getUnits(units)
        const weeklyData = (await axios.get(`${this.baseUrl}/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=hourly,minutely&appid=${this.key}`)).data
        const locationData = (await axios.get(`${this.baseUrl}/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${this.key}`)).data
        const data = {locationData, weeklyData}
        try {
            return data
        } catch (error) {
            console.log(error)
        }
    }
}

export default WeatherAPI