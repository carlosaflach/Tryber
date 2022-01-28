SELECT now(); /* tempo de agora */
SELECT curdate(); /* data */
SELECT curtime(); /* hora */
SELECT year(now());

USE sakila;
/* 1 */
SELECT * FROM payment;
SELECT COUNT(payment_id) AS Pagamentos FROM payment
WHERE date(payment_date) = '2005-05-25';
/* 2 */
SELECT 
    COUNT(payment_id) AS Pagamentos
FROM
    payment
WHERE
    payment_date BETWEEN '2005-07-01' AND '2005-08-22';
/* 3 */
USE sakila;
SELECT DATE(rental_date) AS Data,
YEAR(rental_date) AS Ano ,
MONTH(rental_date) AS Mes,
DAY(rental_date) AS Dia,
HOUR(rental_date) AS Hora,
MINUTE(rental_date) AS Minuto,
SECOND(rental_date) AS Segundo
FROM rental
WHERE rental_id = 10330;

/* 4 */
SELECT * FROM payment
WHERE DATE(payment_date) IN ('2005-07-28') AND HOUR(payment_date) IN(22);
/* outra forma */
USE sakila;
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-28' AND HOUR(payment_date) >= 22;