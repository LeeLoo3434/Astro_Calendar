const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');


const blogSchema = new Schema({
    date: { type: Date },
    monthlySunSign:{
        type:String,
        enum: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
    },
    dailyMoonSign: { type: String },
    dailyIntention: { type: String },
    topPriorities: { type: [String] },
    todos: [{
        task: { type: String },
        completed: { type: Boolean }
    }],
}, {
    timestamps:true
});







module.exports = mongoose.model('Blog', blogSchema);
