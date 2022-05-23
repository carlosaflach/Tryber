-- Resultados usando `BETWEEN` com números 
SELECT title, length FROM sakila.film
WHERE length BETWEEN 50 AND 120;

-- Resultados usando BETWEEN com strings 
SELECT * FROM sakila.language
WHERE name BETWEEN 'Italian' AND 'Mandarin'
ORDER BY name;

-- Resultados usando `BETWEEN` com datas 
SELECT rental_id, rental_date FROM sakila.rental
WHERE rental_date
BETWEEN '2005-05-27' AND '2005-07-17';