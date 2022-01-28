USE sakila;
/* 1 */
SELECT * FROM customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
/* 2 */
SELECT * FROM customer
WHERE active IS NOT TRUE AND store_id = 2 
AND first_name <> 'KENNETH' ORDER BY first_name;
/* 3 */
SELECT * FROM film;
SELECT title, description, release_year, replacement_cost, rating FROM film
WHERE (rating = 'PG' OR rating = 'PG-13' OR rating = 'R') AND replacement_cost >= 18
ORDER BY replacement_cost DESC, title ASC LIMIT 100;
/* 4 */
SELECT * FROM customer;
SELECT COUNT(active) FROM customer
WHERE active IS TRUE AND store_id = 1;
/* outro jeito */
SELECT COUNT(*) AS quantidade_de_clientes_ativos FROM customer
WHERE active = 1 AND store_id = 1;
/* 318 */
/* 5 */
SELECT COUNT(active) FROM customer
WHERE active IS NOT TRUE AND store_id = 1;
SELECT * FROM customer
WHERE active = 0 AND store_id = 1;
/* 6 */
SELECT * FROM film;
SELECT title, rating, rental_rate FROM film
WHERE rating = "NC-17" ORDER BY rental_rate ASC, title ASC LIMIT 50;