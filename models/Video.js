import mongoose from "mongoose"

const videoSchema = new mongoose.Schema({
    fileUrl : {
        type : String,
        required : "no fileUrl"
    },
    title : {
        type : String,
        required : "no Title"
    },
    description :{
        type : String
    },
    views : {
        type : Number,
        default : 0
    },
    createAt : {
        type : Date,
        default : Date.now
    },
    comment : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Comment"
    }]
    });


const model = mongoose.model('Video', videoSchema);
export default model;
