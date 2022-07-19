DROP DATABASE IF EXISTS InvestimentManager;

CREATE DATABASE InvestimentManager;

USE InvestimentManager;

CREATE TABLE clientes (
    codCliente INT NOT NULL auto_increment,
    saldo FLOAT NOT NULL,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    PRIMARY KEY(codCliente)
) ENGINE=INNODB;

CREATE TABLE ativos_disponiveis (
    id INT NOT NULL auto_increment,
    nome VARCHAR(30) NOT NULL,
    qtdeAtivo INT NOT NULL,
    valor DOUBLE NOT NULL,
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
    Valor DOUBLE NOT NULL,
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
    Valor DOUBLE NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (CodCliente)
        REFERENCES clientes (codCliente)
        ON DELETE CASCADE
)  ENGINE=INNODB;

CREATE TABLE hist_saque (
    id INT NOT NULL auto_increment,
    CodCliente INT NOT NULL,
    Valor DOUBLE NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (CodCliente)
        REFERENCES clientes (codCliente)
        ON DELETE CASCADE
)  ENGINE=INNODB;

SET SQL_SAFE_UPDATES = 0;

INSERT INTO InvestimentManager.ativos_disponiveis (nome, qtdeAtivo, valor) VALUES
    ("XPIN", 1340985, 16.94),
    ("XPED", 50430, 5.75),
    ("RICO", 1203945, 9.60),
    ("TRYB", 13407, 10.39),
    ("GOOG", 50430948, 40.84),
    ("MTP4", 1203945, 23.93),
    ("SEF3", 103244, 3.40),
    ("META", 132394, 50.98),
    ("PTR4", 102938495, 28.60),
    ("ITU4", 3294329, 22.85),
    ("UNM3", 312432, 14.57),
    ("PATX", 10, 3.1),
    ("VSPO", 0, 10);
