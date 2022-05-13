USE sakila;
/* 1 */
SELECT * FROM payment
WHERE payment_id IN (269,239,126,399,142);
/* 2 */
SELECT * FROM address
WHERE district IN ('QLD', 'Nagasaki', 'California','Attika','Mandalay','Nantou','Texas');