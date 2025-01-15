const mongoose = require("mongoose");

const enterpriseSchema = new mongoose.Schema({
	_id: {
		type: Number,
		required: true,
		unique: true,
	},
	name: {
		type: String,
		required: true,
	},
	cnpj: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("EnterpriseREG", enterpriseSchema);
