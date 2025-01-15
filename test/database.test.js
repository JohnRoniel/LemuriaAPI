const sinon = require("sinon");
const mongoose = require("mongoose");
const { start, stop } = require("../index");

describe("Database Connection", () => {
	let connectStub;

	before((done) => {
		connectStub = sinon.stub(mongoose, "connect").resolves();
		start(done);
	});

	after((done) => {
		connectStub.restore();
		stop(done);
	});

	it("should connect to the MongoDB database", (done) => {
		sinon.assert.calledOnce(connectStub);
		done();
	});
});
