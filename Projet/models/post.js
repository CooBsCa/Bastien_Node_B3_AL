import mongoose from "mongoose";
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

export default mongoose.model('Post', postSchema);