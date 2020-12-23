import axios from 'axios'
//2

const weatherUrl = 'http://localhost:5000/api/v1/weather'
const userUrl = 'http://localhost:5000/api/v1/user'

//from weather API
export const getCity = (query, units) => axios.get(`${weatherUrl}/city/${query}/${units}`)
export const getCities = (cities, units) => axios.post(`${weatherUrl}/cities/${units}`, cities)

//from user DB
export const fetchCities = () => axios.get(`${userUrl}/cities`)
export const deleteCity = (cityName) => axios.delete(`${userUrl}/${cityName}`)