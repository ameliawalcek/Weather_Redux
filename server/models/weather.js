import mongoose from 'mongoose'

const weatherSchema = mongoose.Schema({
  cityId: String

}, { timestamps: true })

const Weather = mongoose.model('Weather', weatherSchema)
export default Weather