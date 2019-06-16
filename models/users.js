const mongoose =require('mongoose');
const Schema = mongoose.Schema;
 userschema = new Schema({ 
cin: {
type: String
},
email: {
    type: String
},
lastName: {
type: String
},
firstName: {
type: String
},
age: {
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

const User = mongoose.model('User',userschema);
module.exports = User;
