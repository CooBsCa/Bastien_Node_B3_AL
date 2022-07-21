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


const Post = mongoose.model("post", postSchema);

export default { Post };