USE sakila;
SELECT * FROM film;
SELECT title AS 'Titulo', release_year AS 'Ano de Lançamento', rating AS 'Classificação' FROM film;
SELECT COUNT(*) FROM film;
SELECT DISTINCT(last_name) FROM actor;
SELECT COUNT(last_name) FROM actor;
SELECT COUNT(DISTINCT last_name) FROM actor;
SELECT * FROM actor
ORDER BY last_name, first_name DESC;
SELECT * FROM language;
SELECT * FROM language LIMIT 5 OFFSET 1;
SELECT * FROM film;
SELECT title, release_year, length, rating, replacement_cost FROM film
ORDER BY length DESC, replacement_cost
LIMIT 20;