const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const adminschema = new Schema({

 email: {
 type: String
},
lastName: {
type: String
},
firstName: {
type: String
},
role: {
type: String
},
pwd: {
type: String
},
},{
    timestamps : true
});

const Admin = mongoose.model('Admin',adminschema);
module.exports = Admin;