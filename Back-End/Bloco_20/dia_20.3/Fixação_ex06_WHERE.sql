USE sakila;
SELECT * FROM film;
SELECT * FROM film
WHERE rating = "NC-17"
ORDER BY rental_rate, title
LIMIT 50;