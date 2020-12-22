import mongoose from 'mongoose'

const weatherSchema = mongoose.Schema({
  city: String

}, { timestamps: true })

const Weather = mongoose.model('Weather', weatherSchema)
export default Weather