const request = require("supertest");
const { app, start, stop } = require("../index");

describe("API Routes", () => {
	before((done) => {
		start(done);
	});

	after((done) => {
		stop(done);
	});

	it("should return 'Welcome to the Lemuria API' on GET /api", (done) => {
		request(app)
			.get("/api")
			.expect("Content-Type", "text/html; charset=utf-8")
			.expect(200)
			.expect("Welcome to the Lemuria API", done);
	});
});
