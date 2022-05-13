USE sakila;
SELECT * FROM customer;
SELECT active, COUNT(*) FROM customer
GROUP BY active;

SELECT store_id, active, COUNT(*)
FROM sakila.customer
GROUP BY store_id, active;

SELECT AVG(rental_duration) AS avg_rental_duration, rating
FROM sakila.film
GROUP BY rating
ORDER BY avg_rental_duration DESC;


SELECT district, count(*)
FROM address
GROUP BY district
ORDER BY COUNT(*) DESC;
