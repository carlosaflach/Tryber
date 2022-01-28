USE sakila;
/* 1 */
SELECT  * FROM customer;
SELECT first_name, last_name, email FROM customer
WHERE last_name IN ('hicks','crawford','henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name;
/* 2 */
SELECT email FROM customer
WHERE address_id BETWEEN 172 AND 176
ORDER BY email;
/* 3 */
SELECT * FROM payment;
SELECT COUNT(payment_id) AS "Quantidade de pagamnetos" FROM payment
WHERE DATE (payment_date) BETWEEN '2005-05-01' AND '2005-08-01';
/* 4 */
SELECT * FROM film;
SELECT title, release_year, rental_duration FROM film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title ASC;
/* 5 */
SELECT title, rating FROM film
WHERE rating IN ('G', 'PG', 'PG-13')
ORDER BY title
LIMIT 500;
