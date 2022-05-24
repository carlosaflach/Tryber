USE sakila;
SELECT * FROM payment;
-- Ex01 
SELECT COUNT(payment_id) FROM payment
WHERE DATE(payment_date) = '2005-05-25';

-- OU 
SELECT COUNT(*) Pagamentos FROM payment
WHERE payment_date LIKE '2005-05-25%';

-- Ex02
SELECT COUNT(payment_id) FROM payment
WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';

-- Ex03
SELECT * FROM rental;
SELECT DATE(rental_date) AS Data,
YEAR(rental_date) AS Ano ,
MONTH(rental_date) AS Mes,
DAY(rental_date) AS Dia,
HOUR(rental_date) AS Hora,
MINUTE(rental_date) AS Minuto,
SECOND(rental_date) AS Segundo
FROM rental
WHERE rental_id = 10330;

-- Ex04
SELECT * FROM payment;
SELECT COUNT(*) FROM payment
WHERE DATE(payment_date) = "2005-07-28" AND HOUR(payment_date) >= 22; 

SELECT COUNT(*) FROM payment
WHERE payment_date LIKE "2005-07-28%" AND HOUR(payment_date) >= 22; 
