const  mongoose = require("mongoose");
const { Schema } = mongoose;

const usersSchema = new Schema({
    name:String,
    email:String,
    password:String
});

module.exports = mongoose.model("user", usersSchema);