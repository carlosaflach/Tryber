SELECT UCASE('Oi, eu sou uma string');
SELECT LCASE('Oi, eu sou uma string');
SELECT REPLACE('Oi, eu sou uma string', 'string', 'cadeia de caracteres');
SELECT LEFT('Oi, eu sou uma string', 2);
SELECT RIGHT('Oi, eu sou um string', 6);
SELECT CHAR_LENGTH('Oi, eu sou uma string');
SELECT SUBSTRING('Oi, eu sou uma string', 5, 2);
SELECT SUBSTRING('Oi, eu sou uma string', 5);

SELECT UCASE(title) FROM sakila.film LIMIT 10;
SELECT LCASE(title) FROM sakila.film LIMIT 10;
SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film WHERE film_id = 1;
SELECT LEFT(title, 7) FROM sakila.film WHERE film_id = 1;
SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1;
SELECT CHAR_LENGTH(title) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1;
SELECT * FROM sakila.film;