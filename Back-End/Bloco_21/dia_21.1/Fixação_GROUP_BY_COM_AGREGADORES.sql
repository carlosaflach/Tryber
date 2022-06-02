SELECT * FROM sakila.customer;

SELECT active, COUNT(*)
FROM sakila.customer
GROUP BY active;

SELECT active, store_id, COUNT(*) FROM sakila.customer
GROUP BY active, store_id;

SELECT * FROM sakila.film;

SELECT AVG(rental_duration), rating FROM sakila.film
GROUP BY rating
ORDER BY AVG(rental_duration);


SELECT * FROM sakila.address;

SELECT district, COUNT(*) AS QTD FROM sakila.address
GROUP BY district
ORDER BY QTD DESC;