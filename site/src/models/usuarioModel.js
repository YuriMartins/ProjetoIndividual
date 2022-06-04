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

function saldoInicial(idUser){
    const query = `INSERT INTO conta VALUES (null, 0, 0.20, ${idUser})`
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

function extratoRecebido(dateExtrato, descExtrato, fkCliente) {
    const query = `insert into extrato values 
    (null,'${dateExtrato}','${descExtrato}','2',${fkCliente});
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
    updateSaldo,
    updateSaldoAtual,
    extratoEnviado,
    returnFkCliente,
    extratoRecebido,
    cadastrar,
    listar,
    listarConta,
    listarUser,
    saldoInicial
};