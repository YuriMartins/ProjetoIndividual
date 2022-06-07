-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!
/* para workbench - local - desenvolvimento */
create database projetoIndividual;
use projetoIndividual;

create table usuario(
idCliente int primary key auto_increment,
nomeCliente varchar(45),
telefoneCliente varchar(16),
cpfCliente varchar(16) unique, 
dataNascCliente varchar(40),
ImagemCliente text,
emailCliente varchar(80),
emailRecuperacao varchar(80),
senhaCliente varchar(20)
);
create	table conta (
idConta int primary key auto_increment,
saldoConta float,
cashBackConta float,
fkCliente int,
foreign key (fkCliente) references usuario(idCliente)
);

create	table extrato (
idExtrato int primary key auto_increment,
dataExtrato varchar(20),
descExtrato varchar(255),
statusExtrato varchar(10),
fkConta int,
foreign key (fkConta) references conta(idConta)
);

create table poupanca (
idPoupanca int primary key auto_increment,
saldoPoupanca float,
jurosPoupanca float,
fkConta int,
foreign key (fkConta) references conta(idConta)
);

select * from usuario;		
select * from conta;			
select * from extrato;		
select * from poupanca;	

select * from poupanca as p
inner join conta as c
on p.fkConta = c.idConta
where fkConta = 1;

update poupanca as p
    inner join conta as c
    on p.fkConta = c.idConta
    set saldoConta = saldoConta + saldoPoupanca
    where fkConta = '2';
    
    update poupanca as p
    inner join conta as c
    on p.fkConta = c.idConta
    set saldoPoupanca = saldoPoupanca - saldoPoupanca
    where fkConta = '2';

update conta as c
    inner join usuario as u
    on c.fkCliente = u.idCliente
    set saldoConta = saldoConta - 1
    where cpfCliente = '2';

 SELECT * FROM usuario WHERE idCliente = '1';

insert into extrato values 
(null,'04-06-2022','Transfer 1','1',1);

	select count(idExtrato) as '' from extrato
    where fkConta = 1 and statusExtrato = '1';

    select fkCliente from conta as c
    inner join usuario as u
    on c.fkCliente = u.idCliente
    where cpfCliente = '2';
    
    update usuario set cpfCliente = '2' where idCliente = 2;
   
	select nomeCliente, dataExtrato, statusExtrato, descExtrato from extrato as e
    join conta as c
    on e.fkConta = c.idConta
    join usuario as u
    on c.fkCliente = u.idCliente
    where fkCliente = 2;




select nomeCliente, saldoConta, dataExtrato, descExtrato, statusExtrato from extrato as e
join conta as c
on e.fkConta = c.idConta
join usuario as u
on c.fkCliente = u.idCliente;






update conta as c
inner join usuario as u
on c.fkCliente = u.idCliente
set saldoConta = saldoConta + 100
where cpfCliente = '123.123.213-11';


update conta as c
    inner join usuario as u
    on c.fkCliente = u.idCliente
    set saldoConta = saldoConta - 100
    where cpfCliente = '42';

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(300)
);

/* altere esta tabela de acordo com o que está em INSERT de sua API do arduino */

create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT,
	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
);


/* para sql server - remoto - produção */
CREATE TABLE usuario (
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
);

CREATE TABLE aviso (
	id INT PRIMARY KEY IDENTITY(1,1),
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT FOREIGN KEY REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY IDENTITY(1,1),
	descricao VARCHAR(300)
);

/* altere esta tabela de acordo com o que está em INSERT de sua API do arduino */

CREATE TABLE medida (
	id INT PRIMARY KEY IDENTITY(1,1),
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT FOREIGN KEY REFERENCES aquario(id)
);
