const express = require("express");
const dotenv = require("dotenv");

const app = express();

let server;

dotenv.config();

function start(callback) {
	server = app.listen(3030, () => {
		console.log("Server is running on port 3030");
		if (callback) callback(null);
	});
}

function stop(callback) {
	if (server) {
		server.close(callback);
	}
}

// Start the server if this script is run directly
if (require.main === module) {
	start();
}

module.exports = { app, start, stop };
