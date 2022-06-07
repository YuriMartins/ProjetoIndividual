var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarUser(cpf) {
    const query = `
        SELECT * FROM usuario WHERE cpfCliente = '${cpf}';
    `;
    return database.executar(query);
}

function listarConta(idUser) {
    var instrucao = `
        SELECT * FROM conta WHERE fkCliente = '${idUser}';
    `;
    return database.executar(instrucao);
}

function minhaPoupanca(idUser) {
    var instrucao = `
    select * from poupanca as p
    inner join conta as c
    on p.fkConta = c.idConta
    where fkConta = ${idUser};
    `;
    return database.executar(instrucao);
}

function meuUsuario(idUser) {
    var instrucao = `
    SELECT * FROM usuario WHERE idCliente = ${idUser};
    `;
    return database.executar(instrucao);
}
function atualizarImg(idUser, img) {
    const query = `UPDATE usuario SET imagemCliente = '${img}' WHERE idCliente = ${idUser}`;

    return database.executar(query);
}


function saldoInicial(idUser) {
    const query = `INSERT INTO conta VALUES (null, 0, 0.20, ${idUser})`
    return database.executar(query);
}
function saldoInicialPoupanca(idUser) {
    const query = `INSERT INTO poupanca VALUES (null, 0, 0.10, ${idUser})`
    return database.executar(query);
}


function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE emailCliente = '${email}' AND senhaCliente = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function autenticarCpf(cpf) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", cpf)
    var instrucao = `
    select cpfCliente from usuario where cpfCliente = '${cpf}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function updateSaldo(valorTrasfer, cpf) {
    const query = `update conta as c
    inner join usuario as u
    on c.fkCliente = u.idCliente
    set saldoConta = saldoConta + '${valorTrasfer}' 
    where cpfCliente = '${cpf}';
    `;
    return database.executar(query);
}


function updateSaldoAtual(valorTrasfer, cpfListar) {
    const query = `update conta as c
      inner join usuario as u
      on c.fkCliente = u.idCliente
      set saldoConta = saldoConta - '${valorTrasfer}' 
      where cpfCliente = '${cpfListar}';
      `;
    return database.executar(query);
}

function updateSaldoPoupanca(valorTrasfer, cpf) {
    const query = `update poupanca as p
    inner join conta as c
    on p.fkConta = c.idConta
    inner join usuario as u
    on c.fkCliente = u.idCliente
    set saldoPoupanca = saldoPoupanca + ${valorTrasfer} 
    where cpfCliente = '${cpf}';
    `;
    return database.executar(query);
}

function jurosPoupanca(cpf) {
    const query = `update poupanca as p
    inner join conta as c
    on p.fkConta = c.idConta
    set saldoPoupanca = saldoPoupanca + (saldoPoupanca * jurosPoupanca)
    where fkConta = '${cpf}';
    `;
    return database.executar(query);
}

function resgatarPoupanca(valorTrasfer, cpf) {
    const query = `update poupanca as p
    inner join conta as c
    on p.fkConta = c.idConta
    set saldoConta = saldoConta + ${valorTrasfer}
    where fkConta = '${cpf}';
    `;
    return database.executar(query);
}

function resgatarPoupancaAtual(valorTrasfer, cpf) {
    const query = `update poupanca as p
    inner join conta as c
    on p.fkConta = c.idConta
    set saldoPoupanca = saldoPoupanca - ${valorTrasfer} 
    where fkConta = '${cpf}';
    `;
    return database.executar(query);
}

function updateNovoPoupanca(valorTrasfer, cpf) {
    const query = `update conta as c
    inner join usuario as u
    on c.fkCliente = u.idCliente
    set saldoConta = saldoConta - ${valorTrasfer} 
    where cpfCliente = '${cpf}';
    `;
    return database.executar(query);
}



function extratoEnviado(dateExtrato, descExtrato, fkConta) {
    const query = `insert into extrato values 
      (null,'${dateExtrato}','${descExtrato}','1',${fkConta});
      `;
    return database.executar(query);
}

function returnFkCliente(cpf) {
    var instrucao = `
    select fkCliente from conta as c
    inner join usuario as u
    on c.fkCliente = u.idCliente
    where cpfCliente = '${cpf}';
    `;
    return database.executar(instrucao);
}
function metrics1(fkConta) {
    var instrucao = `
    select count(idExtrato) as 'enviadas' from extrato
    where fkConta = ${fkConta} and statusExtrato = '1';
    `;
    return database.executar(instrucao);
}

function metrics2(fkConta) {
    var instrucao = `
    select count(idExtrato) as 'recebidas' from extrato
    where fkConta = ${fkConta} and statusExtrato = '2';
    `;
    return database.executar(instrucao);
}

function listarStatement(fkConta) {
    var instrucao = `
    select nomeCliente, dataExtrato, statusExtrato, descExtrato from extrato as e
    join conta as c
    on e.fkConta = c.idConta
    join usuario as u
    on c.fkCliente = u.idCliente
    where fkCliente = ${fkConta};
    `;
    return database.executar(instrucao);
}

function extratoRecebido(dateExtrato, descExtrato, fkCliente2) {
    const query = `insert into extrato values
    (null,'${dateExtrato}','${descExtrato}','2',${fkCliente2});
    `;
    return database.executar(query);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, telefone, cpf, nasc, email, email2, senha) {

    var instrucao = `
    insert into usuario (nomeCliente, telefoneCliente, cpfCliente, dataNascCliente, emailCliente, emailRecuperacao, senhaCliente ) values ('${nome}', '${telefone}', '${cpf}', '${nasc}', '${email}', '${email2}', '${senha}');
    `;
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    autenticarCpf,
    saldoInicialPoupanca,
    updateSaldo,
    updateSaldoAtual,
    updateSaldoPoupanca,
    jurosPoupanca,
    resgatarPoupanca,
    resgatarPoupancaAtual,
    updateNovoPoupanca,
    extratoEnviado,
    returnFkCliente,
    metrics1,
    metrics2,
    listarStatement,
    extratoRecebido,
    cadastrar,
    listar,
    listarConta,
    meuUsuario,
    listarUser,
    atualizarImg,
    minhaPoupanca,
    saldoInicial
};