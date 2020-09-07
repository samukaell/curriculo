const Curriculos = require('../models/Curriculos');

module.exports = app => {

	app.get('/curriculos', (req, res) => {

		Curriculos.lista(res);
	});

	app.post('/curriculos', (req, res) => {

		const curriculo = req.body;

		Curriculos.adiciona(curriculo, res);
	});
}