module.exports = (app) => {
	app.get("/api/users", (req, res) => {
		res.status(200).json("Users API");
	});
};
