module.exports = (app) => {
	const mongoose = require("mongoose");

	const uri = process.env.MONGODB_URI;

	/*
	 * Conexão com o banco de dados MongoDB
	 * useNewUrlParser: true -> permite o uso de novas funcionalidades do MongoDB
	 * useUnifiedTopology: true -> permite o uso de novas funcionalidades do MongoDB
	 * useCreateIndex: true -> permite a criação de índices
	 * useFindAndModify: false -> desabilita o uso de funções de modificação de documentos
	 */
	mongoose.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	});
};
