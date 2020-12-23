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
        console.log(this.key)
        axios.get('https://api.weatherstack.com/current', { params })
            .then(response => {
                const apiResponse = response.data;
                console.log(response.data)
                // console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
            }).catch(error => {
                console.log(error);
            });
        // const data = await axios.get(`${this.baseUrl}/current`, { params }).data
        // console.log(data)
        // return await axios.get(`${this.baseUrl}/current`, { params }).data
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