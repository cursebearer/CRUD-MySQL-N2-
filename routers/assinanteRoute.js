const { Router } = require("express");
const router = Router();
const AssinanteController = require("../controllers/assinanteController");

// get insert put delete

router.get("/assinantes", AssinanteController.read);

router.get("/assinante/:nome_assinante", AssinanteController.readName);

router.post("/assinantes", AssinanteController.create);

router.put("/assinante/:id", AssinanteController.update);

router.delete("/assinante/:id", AssinanteController.delete);

module.exports = router;
