const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const userschema = new Schema({
cin: String,
firstname : String,
lastname : String,
age : Number,
role : String
},{
    timestamps : true
});

const User = mongoose.model('User',userschema);
module.exports = User;
