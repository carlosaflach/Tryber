DROP SCHEMA IF EXISTS normalization;

CREATE SCHEMA IF NOT EXISTS normalization;

USE normalization;

CREATE TABLE Funcionarios( 
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefone VARCHAR(50) NOT NULL,
    data_cadastro DATETIME NOT NULL
)ENGINE=InnoDB;

CREATE TABLE Setores(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
)ENGINE=InnoDB;

CREATE TABLE Setor_Funcionario(
	funcionario_id INT,
    setor_id INT,
    CONSTRAINT PRIMARY KEY(funcionario_id, setor_id),
    CONSTRAINT FOREIGN KEY (funcionario_id) REFERENCES Funcionarios (id),
    CONSTRAINT FOREIGN KEY (setor_id) REFERENCES Setores (id)
)ENGINE=InnoDB;

INSERT INTO Funcionarios (id, nome, sobrenome, email, telefone, data_cadastro)
VALUES
	(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
    (13, 'André', 'Freeman', 'andre1900@gmail.com', '(47)99522-4996', '2020-02-05'),
    (14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
    (15, 'Fernanda', 'Mendes', 'fernandamendeds@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');

INSERT INTO Setores (id, nome)
VALUES
	(1, 'Administração'),
    (2, 'Vendas'),
    (3, 'Operacional'),
    (4, 'Estratégico'),
    (5, 'Marketing');
    
INSERT INTO Setor_Funcionario (funcionario_id, setor_id)
VALUES
	(12, 1),
    (12, 2),
    (13, 3),
    (14, 2),
    (14, 4),
    (15, 5);