const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const astroSchema = new Schema({
    moonContent:{ type: String },
    chartInfo:{type:String}
})

module.exports = mongoose.model('astro', astroSchema);