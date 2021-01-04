import axios from 'axios'

const weatherUrl = 'http://localhost:5000/api/v1/weather'
const userUrl = 'http://localhost:5000/api/v1/user'

//from weather API
export const getCity = (query, units) => axios.get(`${weatherUrl}/city/${query}/${units}`)
export const getCities = (cities, units) => axios.post(`${weatherUrl}/cities/${units}`, { cities })
export const getLiveCity = (lat, lon, units) => axios.post(`${weatherUrl}/city/live/${units}`, { lat, lon })

//from user DB
export const fetchFavorites = () => axios.get(`${userUrl}/favorites`)
export const createFavorite = (cityId) => axios.post(`${userUrl}/favorites`, { cityId })
export const deleteFavorite = (cityId) => axios.delete(`${userUrl}/favorites/${cityId}`)