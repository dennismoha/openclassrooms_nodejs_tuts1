const Thing = require ("../models/thing");


exports.createThing = (req,res,next) => {
	const Thing = new thing({
		title : req.body.title,
		description: req.body.description,
		imageUrl : req.body.imageUrl,
		price : req.body.price,
		userId: req.body.userId
	});

	Thing.save().then(
			()=> {
				res.status(201).json({
					message: "post saved successfully"
				});
			}
		) .catch(
			(error) => {
				res.status(400).json({
					error: error
				})
			}
		)
};

exports.findOnething =  (req, res, next) => {
	thing.findOne({
		_id: req.params.id
	}).then(
		(Thing) => {
			res.status(200).json(Thing);
		}
	) .catch(
		(error) => {
			res.status (404).json({
				error: error
			})
		}
	)
}

exports.modifyThing = (req,res,next) => {
	const Thing = new thing({
		_id : req.params.id,	  
		title: req.body.title,
		description: req.body.description,
		imageUrl: req.body.imageUrl,
		price: req.body.price,
		userId: req.body.userId

	});

	thing.updateOne({_id:req.params.id}, Thing).then(
		() => {
			res.status(200).json({
				message : "update successfull"
			})
		}
		).catch ((error) => {
			res.status(400).json({
				message : "unsuccessful update"
			})
	}
	)

};

exports. deleteThing =  (req,res,next)=> {
	thing.deleteOne({_id:req.params.id}).then(
		()=> {
			res.status(200).json({
				message : "successfully Deleted"
			})
		}
		).catch ((error) => {
			res.status(400).json({
				message: "unsuccessful Delete"
			})
		})
};

exports.displayThings = (req,res,next) => {
	Thing.find().then(
		(things) => {
			res.status(200).json(things);
		}
		).catch(
			(error) => {
				res.status(400).json({
					error: error
				})
			}	
		)
}
