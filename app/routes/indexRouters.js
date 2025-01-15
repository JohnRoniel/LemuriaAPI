module.exports = (app) => {
	/*
	 * 404 Route
	 * @route GET /404
	 * Note: For not found routes
	 */
	app.use((req, res, next) => {
		res.status(404).json("Not Found Route - 404");
	});

	/*
	 * 404 Route not estabelished
	 * @route GET /
	 * Note: For not estabelished routes
	 */
	app.get("/", (req, res) => {
		res.status(404).json("Not estabelished route - 404");
	});

	/**
	 * API Route
	 * @route GET /api
	 * Note: This route is for testing purposes, not remove it
	 */
	app.get("/api", (req, res) => {
		res.status(200).json("Welcome to the Lemuria API");
	});
};
