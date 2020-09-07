const conexao = require('../infra/conexao');

class Curriculos {

	adiciona(curriculo, res) {

		const sql = `INSERT INTO curriculos SET ?`;

		conexao.query(sql, curriculo, (erro, resultados) => {

			if(erro) {

				res.status(400).json(erro);
			}
			else {

				res.status(201).json(curriculo);
			}
		});
	}

	lista(res) {

		const sql = `SELECT * FROM curriculos`;

		conexao.query(sql, (erro, resultados) => {

			if(erro) {

				res.status(400).json(erro);
			}
			else {

				res.status(200).json(resultados);
			}
		});
	}
}

module.exports = new Curriculos();