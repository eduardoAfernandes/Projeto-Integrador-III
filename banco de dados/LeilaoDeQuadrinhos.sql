CREATE DATABASE leilao_quadrinhos;
USE leilao_quadrinhos;

CREATE TABLE Conta (
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
categoria VARCHAR(10), -- TPB, MENSAL
numero_paginas INT, 
peso INT, 
capa_tipo VARCHAR (5), -- HARD, SOFT
capa_imagem VARCHAR(20), -- ENDEREÇO IMAGEM
id_estado_produto INT, -- ATIVO, INATIVO, EMLEILAO, LEILOADO
	FOREIGN KEY (id_estado_produto) REFERENCES Estado_produto(id_estado_produto),
id_usuario INT,
	FOREIGN KEY (id_usuario) REFERENCES Conta(id_usuario)
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
lance_padrao NUMERIC(2,2), -- Bid padrão
id_estado_leilao INT, -- ATIVO, ESPERA, FINALIZADO, INATIVO
	FOREIGN KEY (id_estado_leilao) REFERENCES Estado_leilao(id_estado_leilao),
id_usuario INT,
	FOREIGN KEY (id_usuario) REFERENCES Conta(id_usuario),
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
		FOREIGN KEY (id_usuario) REFERENCES Conta(id_usuario)
);

INSERT INTO Conta(nome, email, senha, data_nascimento, ativo)
VALUES
('Carlos Gustavo de Lacerda Stein', 'cgletras@gmail.com', 'cg2468', '1978-11-16', '1'),
('Rafael Sotero', 'soterocra@gmail.com', 'sotero2468', '1994-07-16', '1'),
('Eduardo Augusto', 'eduardoaugusto2016880@gmail.com', 'dudu2468', '2000-08-04', '1'),
('Tiago Marques', 'ttiiaagguu@gmail.com', 'tiago2468', '1989-12-07', '1'),
('Willian de Freitas Oliveria', 'willian.freitasoliveira@gmail.com', 'willian2468', '1990-08-13', '1');

INSERT INTO Produto(id_produto, editora, titulo, categoria, numero_paginas, peso, capa_tipo, capa_imagem, id_estado_produto, id_usuario)
VALUES
(editora, titulo, categoria, numero_paginas, peso, capa_tipo, capa_imagem, id_estado_produto, id_usuario),
(editora, titulo, categoria, numero_paginas, peso, capa_tipo, capa_imagem, id_estado_produto, id_usuario),
(editora, titulo, categoria, numero_paginas, peso, capa_tipo, capa_imagem, id_estado_produto, id_usuario),
(editora, titulo, categoria, numero_paginas, peso, capa_tipo, capa_imagem, id_estado_produto, id_usuario),
(editora, titulo, categoria, numero_paginas, peso, capa_tipo, capa_imagem, id_estado_produto, id_usuario),
(editora, titulo, categoria, numero_paginas, peso, capa_tipo, capa_imagem, id_estado_produto, id_usuario),
(editora, titulo, categoria, numero_paginas, peso, capa_tipo, capa_imagem, id_estado_produto, id_usuario),
(editora, titulo, categoria, numero_paginas, peso, capa_tipo, capa_imagem, id_estado_produto, id_usuario),
(editora, titulo, categoria, numero_paginas, peso, capa_tipo, capa_imagem, id_estado_produto, id_usuario),
(editora, titulo, categoria, numero_paginas, peso, capa_tipo, capa_imagem, id_estado_produto, id_usuario);


