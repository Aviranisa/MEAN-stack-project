const mongoose = require('mongoose');
let usersSchema = new mongoose.Schema({
    name : String,
    email : String,
    city : String,
    street : String,
    zipcode : Number,
    tasks : [{_id: String ,title : String , completed :  Boolean}],
    isCompleted : Boolean,
    posts : [{_id: String ,title : String , body :  String}]
});
module.exports = mongoose.model('users',usersSchema)