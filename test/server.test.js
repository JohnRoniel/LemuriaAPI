const assert = require("node:assert");
const { start, stop } = require("../index");

describe("Server Tests", () => {
	it("should start the server without errors", (done) => {
		start((err) => {
			assert.strictEqual(err, null);
			stop(done);
		});
	});
});
