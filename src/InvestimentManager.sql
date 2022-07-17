DROP DATABASE IF EXISTS InvestimentManager;

CREATE DATABASE InvestimentManager;

USE InvestimentManager;

CREATE TABLE clientes (
    codCliente INT NOT NULL auto_increment,
    nome VARCHAR(30) NOT NULL,
    saldo FLOAT NOT NULL,
    PRIMARY KEY(codCliente)
) ENGINE=INNODB;

CREATE TABLE ativos_disponiveis (
    id INT NOT NULL auto_increment,
    nome VARCHAR(30) NOT NULL,
    qtde INT NOT NULL,
    valor FLOAT NOT NULL,
    PRIMARY KEY(id)
) ENGINE=INNODB;

CREATE TABLE compras (
    id INT NOT NULL auto_increment,
    codCliente INT NOT NULL,
    codAtivo INT NOT NULL,
    qtdeAtivo INT NOT NULL,
	PRIMARY KEY(id),
    FOREIGN KEY (codCliente)
        REFERENCES clientes (codCliente)
        ON DELETE CASCADE,
    FOREIGN KEY (codAtivo)
        REFERENCES ativos_disponiveis (id)
        ON DELETE CASCADE
)  ENGINE=INNODB;

CREATE TABLE vendas (
    id INT NOT NULL auto_increment,
    CodCliente INT NOT NULL,
    CodAtivo INT NOT NULL,
	QtdeAtivo INT NOT NULL,
	PRIMARY KEY(id),
    FOREIGN KEY (CodCliente)
        REFERENCES clientes (codCliente)
        ON DELETE CASCADE,
    FOREIGN KEY (CodAtivo)
        REFERENCES ativos_disponiveis (id)
        ON DELETE CASCADE
)  ENGINE=INNODB;

CREATE TABLE investimentos (
    id INT NOT NULL auto_increment,
    CodCliente INT NOT NULL,
    CodAtivo INT NOT NULL,
	QtdeAtivo INT NOT NULL,
    Valor FLOAT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (CodCliente)
        REFERENCES clientes (codCliente)
        ON DELETE CASCADE,
    FOREIGN KEY (CodAtivo)
        REFERENCES ativos_disponiveis (id)
        ON DELETE CASCADE
)  ENGINE=INNODB;

CREATE TABLE hist_deposito (
    id INT NOT NULL auto_increment,
    CodCliente INT NOT NULL,
    Valor FLOAT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (CodCliente)
        REFERENCES clientes (codCliente)
        ON DELETE CASCADE
)  ENGINE=INNODB;

CREATE TABLE hist_saque (
    id INT NOT NULL auto_increment,
    CodCliente INT NOT NULL,
    Valor FLOAT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (CodCliente)
        REFERENCES clientes (codCliente)
        ON DELETE CASCADE
)  ENGINE=INNODB;

SET SQL_SAFE_UPDATES = 0;