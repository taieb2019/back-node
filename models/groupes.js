const mongoose =require('mongoose');
const Schema = mongoose.Schema;
 groupSchema = new Schema({
groupName: {
type: String
}, 
idChef: {
type: String
},
lastNameChef: {
    type: String
},
firstNameChef: {
type: String
},
pelerins : [{
        idPelerin: {
        type: String
        },
        lastNamePelerin: {
       type: String
        },
        firstNamePelerin: {
        type: String
        }
}]

},{
    timestamps : true
});

const Groupe = mongoose.model('Groupe',groupSchema);
module.exports = Groupe;
