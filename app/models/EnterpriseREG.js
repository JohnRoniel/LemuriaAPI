const mongoose = require("mongoose");

/*
 * Schema de empresas registradas
 * _id: id da empresa (gerado automaticamente)
 * name: nome da empresa
 * cnpj: CNPJ da empresa
 */
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
