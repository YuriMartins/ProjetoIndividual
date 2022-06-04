const express = require("express");
const router = express.Router();

const usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});
router.get("/listarConta/:id", function (req, res) {
    usuarioController.listarConta(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});
router.post("/autenticarCpf", function (req, res) {
    usuarioController.autenticarCpf(req, res);
});
router.post("/updateSaldo", function (req, res) {
    usuarioController.updateSaldo(req, res);
});

module.exports = router;