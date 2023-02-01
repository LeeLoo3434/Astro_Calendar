const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

const todoSchema = new Schema({
    tasks:{
        type:String
    },
    completed:{
        type:Boolean,
    }
})


const blogSchema = new Schema({
    monthlySunSign:{
        type:String,
        enum: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
    },
    dailyMoonSign: { type: String },
    dailyIntention: { type: String },
    topPriorities: { type: String },
    todos:[todoSchema],
    user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps:true
});


module.exports = mongoose.model('Blog', blogSchema);
