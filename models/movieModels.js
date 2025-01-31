const { default: mongoose } = require("mongoose");

const movieSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    image:{
        type: String,
    } ,
    rating: {
        type: String,
},
abt: {
    type: String,
    required: true,

  },
  date: {
    type: Date,
    required: true,
  },
  genres: {
    type: [String], // Array of genres
    required: true,
  }
},
{ 
    timestamps: true,

})
const movieModle = mongoose.model('movieModel', movieSchema); //convert schema into model
module.exports=movieModle;