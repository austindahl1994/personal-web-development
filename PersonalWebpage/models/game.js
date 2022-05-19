let mongoose = require("mongoose");
const { stringify } = require("querystring");

//game Schema
let gameSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    rating: {
        type: Int,
        required:true
    },
    body: {
        type: String,
        required: true
    },
    release: {
        type: String,
        required: true
    }
});

let Game = module.exports = mongoose.model("Game", gameSchema);