class Tabelas {
    init(connection) {
        this.connection = connection;
        this.criarTabelaAssinante();
    }

    criarTabelaAssinante() {
        const sql = `
        CREATE TABLE IF NOT EXISTS assinante (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            cpf_assinante VARCHAR(11),
            nome_assinante VARCHAR(100),
            email_assinante VARCHAR(100)
        );
        `;
        
        this.connection.query(sql, (error) => {
            if (error) {
                console.error("Erro na hora de criar a tabela:");
                return;
            }
            console.log("Tabela criada com sucesso");
        });
    }
}

module.exports = new Tabelas();
