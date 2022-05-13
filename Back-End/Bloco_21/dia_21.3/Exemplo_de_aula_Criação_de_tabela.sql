CREATE DATABASE IF NOT EXISTS albuns;
USE albuns;
CREATE TABLE artista(
		artista_id INT PRIMARY KEY AUTO_INCREMENT,
		nome VARCHAR(50)
) ENGINE=InnoDB;
-- ENGINE é o mecanismo que o Banco de daos e a tabela irá se comportar. O InnoDB é o padrão mais utilizado no MySQL, inclusive é o default caso nenhuma ENGINE seja passado. Existesm outros tipos, mas esse é a mais utilizada.