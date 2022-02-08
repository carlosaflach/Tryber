    DROP SCHEMA IF EXISTS Brasil;
    CREATE SCHEMA Brasil;
    USE Brasil;

CREATE TABLE cidades (
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(10) NOT NULL,
    populacao INTEGER,
    CONSTRAINT PRIMARY KEY (cidade)
);

-- No exemplo acima teremos um erro , pois há uma violação da chave primária, já que o nome "Rio Claro" será duplicado e isto não é permitido. 
INSERT INTO cidades(cidade, estado, populacao)
VALUES('Rio Claro','SP',185421),
		('Rio Claro','RJ',17216);

-- A solução para o problema acima é criarmos uma chave primária composta . A chave composta é aquela criada com duas ou mais colunas e, desta forma, passa a utilizar a junção desses dados para formar um valor único e assim bloquear a duplicidade. Veja sua implementação no exemplo abaixo:
DROP SCHEMA IF EXISTS Brasil;
    CREATE SCHEMA Brasil;
    USE Brasil;

CREATE TABLE cidades (
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(10) NOT NULL,
    populacao INTEGER,
    CONSTRAINT PRIMARY KEY (cidade , estado)
);

    INSERT INTO cidades(cidade, estado, populacao)
    VALUES('Rio Claro','SP',185421),
          ('Rio Claro','RJ',17216);

-- A escolha na utilização de chaves primárias simples ou compostas para criar sua tabela depende da situação. No exemplo acima, faz mais sentido criar um campo id e utilizá-lo como chave primária simples , assim fica mais fácil fazer os relacionamentos com outras tabelas e utilizar operadores de busca pois você usará apenas o campo id .

     -- Apagar a versão antiga da tabela
     DROP TABLE cidades;
     CREATE TABLE cidades(
       id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
       cidade VARCHAR(100) NOT NULL,
       estado VARCHAR(10) NOT NULL,
       populacao INTEGER
    );

    INSERT INTO cidades(cidade, estado, populacao)
    VALUES('Rio Claro','SP',185421),
          ('Rio Claro','RJ',17216);