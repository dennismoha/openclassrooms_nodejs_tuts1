const bcrypt = require ("bcrypt");
const User = require ("../models/user")


exports.signing = (req, res, next) => {
	bcrypt.hash(req.body.password, 10) .then(
			(hash) => {
				const user =new User ({
					email: req.body.email,
					password: hash
				});

				user.save().then(
						() => {
							res.status(200).json({
								message: "new user added successfully"
							})
						}
					).catch(
						(error) => {
							res.status(500).json({
								error: error
							})
						}
					)
			}
		)
};

exports.login = (req, res, next) => {
	User.findOne({email: req.body.email}).then(
		(user) => {
			if(!user) {
				return res.status(401).json({
					error: new Error ("user not found")
				});
			}
			bcrypt.compare(req.body.password, user.password).then(
				(valid) => {
					if(!valid) {
						return res.status(401).json({
							error : new Error("incorrect password")
						});
					}

					res.status(200).json({
						userId: user._id,
						toke: 'token'
					})
				}
				).catch(
					(error) => {
						res.status(500).json({
							error : error
						})
					}
				)
		}
		).catch(
			(error)=> {
				res.status(500).json({
					error : error
				})
			}
		)
};
