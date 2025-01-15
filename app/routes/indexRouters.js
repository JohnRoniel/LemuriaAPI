module.exports = (app) => {
	// 404 Error Route
	app.use((req, res, next) => {
		res.status(404).json("Not Found Route - 404");
	});

	// 404 Route not estabelished
	app.get("/", (req, res) => {
		res.status(404).json("Not Found Route - 404");
	});

	/**
	 * API Route
	 * @route GET /api
	 */
	app.get("/api", (req, res) => {
		res.send("Welcome to the Lemuria API");
	});
};
