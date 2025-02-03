const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    Password: String,
    confirm_password:String,
},{
    timestamps: true,
})
 const userModel = mongoose.model("userModel", userSchema);
  module.exports = userModel;