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
router.get("/minhaPoupanca/:id", function (req, res) {
    usuarioController.minhaPoupanca(req, res);
});
router.get("/returnFkCliente/:cpfCliente", function (req, res) {
    usuarioController.returnFkCliente(req, res);
});
router.get("/metrics1/:fkConta", function (req, res) {
    usuarioController.metrics1(req, res);
});
router.get("/metrics2/:fkConta", function (req, res) {
    usuarioController.metrics2(req, res);
});
router.get("/listarStatement/:fkConta", function (req, res) {
    usuarioController.listarStatement(req, res);
});
router.get("/meuUsuario/:id", function (req, res) {
    usuarioController.meuUsuario(req, res);
});
router.post("/atualizar/imagem", usuarioController.atualizarImg);

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
router.post("/updateSaldoAtual", function (req, res) {
    usuarioController.updateSaldoAtual(req, res);
});
router.post("/updateSaldoPoupanca", function (req, res) {
    usuarioController.updateSaldoPoupanca(req, res);
});
router.post("/resgatarPoupanca", function (req, res) {
    usuarioController.resgatarPoupanca(req, res);
});
router.post("/resgatarPoupancaAtual", function (req, res) {
    usuarioController.resgatarPoupancaAtual(req, res);
});
router.post("/updateNovoPoupanca", function (req, res) {
    usuarioController.updateNovoPoupanca(req, res);
});
router.post("/extratoEnviado", function (req, res) {
    usuarioController.extratoEnviado(req, res);
});
 router.post("/extratoRecebido", function (req, res) {
    usuarioController.extratoRecebido(req, res); 
});


module.exports = router;