CREATE DATABASE leilao_quadrinhos;
USE leilao_quadrinhos;

CREATE TABLE Usuario (
id_usuario INT PRIMARY KEY auto_increment,
nome VARCHAR(50), 
email VARCHAR(50) UNIQUE, 
senha VARCHAR(20), 
data_nascimento DATE,
ativo BOOLEAN -- ATIVO ou INATIVO
);

CREATE TABLE Estado_produto(
	id_estado_produto INT PRIMARY KEY auto_increment,
	estado VARCHAR (10) -- ATIVO
);

CREATE TABLE Produto (
id_produto INT PRIMARY KEY auto_increment,
editora VARCHAR (6),
titulo VARCHAR(50), 
formato_do_quadrinho VARCHAR(10), -- TPB, MENSAL
numero_paginas INT, 
peso INT, 
capa_imagem VARCHAR(50), -- ENDEREÇO IMAGEM
id_estado_produto INT, -- ATIVO, INATIVO, EMLEILAO, LEILOADO
	FOREIGN KEY (id_estado_produto) REFERENCES Estado_produto(id_estado_produto),
id_usuario INT,
	FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
);

CREATE TABLE Escritor(
	id_escritor INT PRIMARY KEY auto_increment,
    nome VARCHAR(50)
);

CREATE TABLE escritor_produto(
	id_escritor INT,
		FOREIGN KEY(id_escritor) REFERENCES Escritor(id_escritor),
    id_produto INT,
		FOREIGN KEY(id_produto) REFERENCES Produto(id_produto)
);

CREATE TABLE Personagem(
	id_personagem INT PRIMARY KEY auto_increment,
    nome VARCHAR(50)
);

CREATE TABLE personagem_produto(
	id_personagem INT,
		FOREIGN KEY(id_personagem) REFERENCES Personagem(id_personagem),
    id_produto INT,
		FOREIGN KEY(id_produto) REFERENCES Produto(id_produto)
);

CREATE TABLE Estado_leilao(
	id_estado_leilao INT PRIMARY KEY auto_increment,
    estado VARCHAR (10)
);

CREATE TABLE Leilao (
id_leilao INT PRIMARY KEY auto_increment,
data_inicio DATE, 
duracao INT,
valor_inicial NUMERIC(9,2), 
valor_atual NUMERIC(9,2),
lance_padrao NUMERIC(4,2), -- Bid padrão
id_estado_leilao INT, -- ATIVO, ESPERA, FINALIZADO, INATIVO
	FOREIGN KEY (id_estado_leilao) REFERENCES Estado_leilao(id_estado_leilao),
id_usuario INT,
	FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario),
id_produto INT,
	FOREIGN KEY (id_produto) REFERENCES Produto(id_produto)
);

CREATE TABLE lance (
	id_lance INT PRIMARY KEY auto_increment,
    valor_lance NUMERIC (2,2),
    data_lance DATE,
    id_leilao INT,
		FOREIGN KEY (id_leilao) REFERENCES Leilao (id_leilao),
	id_usuario INT,
		FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
);

INSERT INTO Usuario(nome, email, senha, data_nascimento, ativo)
VALUES
('Carlos Gustavo de Lacerda Stein', 'cgletras@gmail.com', 'cg2468', '1978-11-16', '1'),
('Rafael Sotero', 'soterocra@gmail.com', 'sotero2468', '1994-07-16', '1'),
('Eduardo Augusto', 'eduardoaugusto2016880@gmail.com', 'dudu2468', '2000-08-04', '1'),
('Tiago Marques', 'ttiiaagguu@gmail.com', 'tiago2468', '1989-12-07', '1'),
('Willian de Freitas Oliveria', 'willian.freitasoliveira@gmail.com', 'willian2468', '1990-08-13', '1');

INSERT INTO Estado_produto(estado)
VALUES
('ativo'), -- id 1
('inativo'), -- id 2
('em_leilao'), -- id 3
('leiloado'); -- id 4

INSERT INTO Estado_leilao(estado)
VALUES
('ativo'), -- id 1 
('inativo'), -- id 2
('espera'), -- id 3
('finalizado'); -- id 4

INSERT INTO Produto(editora, titulo, formato_do_quadrinho, numero_paginas, peso, capa_imagem, id_estado_produto, id_usuario)
VALUES
('Marvel', 'Onslaught 1 - The awakening', 'TPB', 73, 150, '/imagens/capas/user/1/1.jpg', 1, 1),
('DC', 'Secret Origins - Featuring JLA', 'TPB', 65, 145, '/imagens/capas/user/1/2.jpg', 1, 1);

INSERT INTO Leilao(data_inicio, duracao, valor_inicial, valor_atual, lance_padrao, id_estado_leilao, id_usuario, id_produto)
VALUES
('2019-05-18', 5, 200, 200, 10, 1, 1, 1);

DROP DATABASE leilao_quadrinhos;