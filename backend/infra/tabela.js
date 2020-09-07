class Tabela {

	init(conexao) {

		this.conexao = conexao;
		this.criarCurriculos();
	}

	criarCurriculos() {

		const sql = `CREATE TABLE IF NOT EXISTS curriculos
					(
					id INTEGER NOT NULL AUTO_INCREMENT,
					nome VARCHAR(100) NOT NULL,
					rg VARCHAR(20) NOT NULL,
					email VARCHAR(50) NOT NULL,
					whatsapp VARCHAR(20) NOT NULL,
					celular VARCHAR(20),
					fixo VARCHAR(20),
					logra_nome VARCHAR(80) NOT NULL,
					logra_num INTEGER NOT NULL,
					bairro VARCHAR(50) NOT NULL,
					cidade VARCHAR(50) NOT NULL,
					cep CHAR(8) NOT NULL,
					complemento TEXT,
					cnh BOOL NOT NULL,
					formacao VARCHAR(30) NOT NULL,
					instituicao VARCHAR(100) NOT NULL,
					curso VARCHAR(50) NOT NULL,
					ano_conclusao DATE,
					empresa VARCHAR(50),
					trabalha_desde DATE,
					trabalha_ate DATE,
					cargo VARCHAR(50),
					ultimo_salario INTEGER,
					empregado BOOL,
					pret_salarial INTEGER,
					recursos TEXT,
					ms_word VARCHAR(10),
					ms_excel VARCHAR(10),
					ms_powerpoint VARCHAR(10),
					dropbox VARCHAR(10),
					gdrive VARCHAR(10),
					mega VARCHAR(10),
					totvs VARCHAR(10),
					sap VARCHAR(10),
					gm VARCHAR(10),
					gsi VARCHAR(10),
					aps VARCHAR(10),
					cursos_tec TEXT,
					PRIMARY KEY(id)
					)
					`;

		this.conexao.query(sql, erro => {

			if(erro) {

				console.log(erro);
			}
			else {

				console.log('Tabela curriculos criada com sucesso.');
			}
		});
	}
}

module.exports = new Tabela();