const express = require("express");
const dotenv = require("dotenv");
const consign = require("consign");

const app = express();

let server;
const serverPort = process.env.SERVER_PORT;

dotenv.config();

//Use JSON in the application
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Added Routes with Consign
consign().include("app/routes").into(app);

// Connect to MongoDB before starting the server
require("./app/Database/indexDatabase")(app);

function start(callback) {
	server = app.listen(serverPort, () => {
		console.log(`Server is running on port ${serverPort}`);
		if (callback) callback(null);
	});
}

function stop(callback) {
	if (server) {
		console.log(`Stopping server on port ${serverPort}`);
		server.close(callback);
	}
}

// Start the server if this script is run directly
if (require.main === module) {
	start();
}

module.exports = { app, start, stop };
