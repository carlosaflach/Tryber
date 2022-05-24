-- Busca resultados que terminem com don
SELECT * FROM sakila.film
WHERE title LIKE '%don';
-- Busca resultados que começem com plu
SELECT * FROM sakila.film
WHERE title LIKE 'plu%';
--  Busca resultados que contenham plu
SELECT * FROM sakila.film
WHERE title LIKE '%plu%';
-- Busca resultados que começem com p e terminem com r
SELECT * FROM sakila.film
WHERE title LIKE 'p%r';
-- Busca resultados que o segundo caractere da palavra seja C. 
SELECT * FROM sakila.film
WHERE title LIKE '_C%';
-- Busca resultados que o título tenha exatamente 8 caracteres;
SELECT * FROM sakila.film
WHERE title LIKE '________';
-- Encontra todas as palavras com no mínimo 3 caracteres e que iniciam com E 
SELECT * FROM sakila.film
WHERE title LIKE 'E__%';