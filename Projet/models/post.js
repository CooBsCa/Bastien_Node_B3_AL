const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        cityName:{
            type:String,
            required : true
        },
        countryName:{
            type:String,
            required : true
        },
        population:{
            type:Number,
            required : true
        }
    });

module.exports = mongoose.model('Post', postSchema);