var mongoose = require ('mongoose');

mongoose.connect("mongodb+srv://master:@$$mon254@cluster0-ncuc7.mongodb.net/test?retryWrites=true&w=majority")
	.then(()=> {
		console.log("successfully connected")
	})
	.catch((error)=>{
		console.log("connection unsuccessful")
	})

const thingschema = new mongoose.Schema({
  
  title: {type: String, required: true},
  description: {type: String, required: true},
  imageUrl: {type: String, required: true},
  userId: {type: String, required: true},
  price: {type: Number, required: true},
});

module.exports = mongoose.model('Thing',thingschema);