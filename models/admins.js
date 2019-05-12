const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const adminschema = new Schema({
cin: String,
firstname : String,
lastname : String,
login : String,
pwd : String
},{
    timestamps : true
});

const Admin = mongoose.model('Admin',adminschema);
module.exports = Admin;