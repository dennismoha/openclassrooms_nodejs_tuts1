const mongoose  = require ('mongoose');
const uniqueValidator = require ("mongoose-unique-validator");

mongoose.connect("mongodb://localhost:27017/OpenClassroom",{useNewUrlParser : true});

const userSchema = new mongoose.Schema({
	email : {type: String, required: true, unique: true},
	password: {type: String, required: true} 
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model ("users", userSchema)
