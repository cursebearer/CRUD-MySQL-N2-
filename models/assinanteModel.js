const connection = require('../config/db')
class AssinanteModel {

    executeQuery(sql, parametros) {
        return new Promise((resolve, reject) => {
            connection.query(sql, parametros, (error, response) =>{
                if(error) {
                    return reject(error);
                }
                return resolve(response);
            });
        });
    }

    listar() {
        const sql = "SELECT * FROM assinante";
        return this.executeQuery(sql);
    }

    listarNome(nome_assinante) {
        const sql = "SELECT * FROM assinante where nome_assinante = ? ";
        return this.executeQuery(sql, nome_assinante);
    }

    criar(novoAssinante) {
        const sql = "INSERT INTO assinante SET ?";
        return this.executeQuery(sql, novoAssinante);
    }

    atualizar(AssinanteAtualizado, id) {
        const sql = "UPDATE assinante SET ? where id = ?";
        return this.executeQuery(sql, [AssinanteAtualizado, id]);
    }

    deletar(id) {
        const sql = "DELETE FROM assinante WHERE id = ?";
        return this.executeQuery(sql, id);
    }
}

module.exports = new AssinanteModel();