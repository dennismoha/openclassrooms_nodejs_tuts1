const mongoose  = require ('mongoose');
const uniqueValidator = require ("mongoose-unique-validator");

mongoose.connect("mongodb+srv://master:@$$mon254@cluster0-ncuc7.mongodb.net/test?retryWrites=true&w=majority")
	.then(()=> {
		console.log("successfully connected")
	})
	.catch((error)=>{
		console.log("connection unsuccessful")
	})

const userSchema = new mongoose.Schema({
	email : {type: String, required: true, unique: true},
	password: {type: String, required: true} 
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model ("users", userSchema)
