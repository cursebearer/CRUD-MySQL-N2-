const assinanteModel = require('../models/assinanteModel');
const AssinanteModel = require('../models/assinanteModel')
class AssinanteController {
    
    create(req, res) {
        const novoAssinante = req.body;
        const assinante = AssinanteModel.criar(novoAssinante);
        return assinante
        .then((AssinanteCriado) => res.status(200).json(AssinanteCriado))
        .catch(error => res.status(400).json(error.message));
    } 

    read(req, res) {
        const listaAssinantes = AssinanteModel.listar();
        return listaAssinantes
        .then((assinante) => res.status(200).json(assinante))
        .catch((error) => res.status(400).json(error.message));
    }

    readName(req, res) {
        const { nome_assinante } = req.params;
        const assinanteNome = assinanteModel.listarNome(nome_assinante);
        return assinanteNome
        .then((assinante) => res.status(200).json(assinante))
        .catch((error) => res.status(400).json(error.message));
    }

    update(req, res) {
        const { id } = req.params;
        const  AssinanteAtualizado = req.body;
        const assinante = AssinanteModel.atualizar(AssinanteAtualizado, id);
        assinante
        .then((resultAssinanteAtualizado) => res.status(200).json(resultAssinanteAtualizado))
        .catch((error) => res.status(400).json(error.message));
    }

    delete(req, res) {
        const { id } = req.params;
        const assinante = AssinanteModel.deletar(id);
        assinante
        .then((resultAssinanteDeletado) => res.status(200).json(resultAssinanteDeletado))
        .catch((error) => res.status(400).json(error.message));
    }
}

module.exports = new AssinanteController();