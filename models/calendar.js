const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const daySchema = new Schema({
    date: Date,
    content: String,
  numContent: Number, //basically just saying that any property you need to track by data-type (String, Number, Date). 
})


const calendarSchema = new Schema({
  dates: [daySchema], //embed the days as documents that belong to a calendar
  user: {type: Schema.Types.ObjectId, ref: 'User'} //make the relationship here to indicate that a user "owns" a calendar. 
})

module.exports = mongoose.model('Calendar', calendarSchema);