SELECT * FROM sakila.actor
WHERE first_name = 'PENELOPE'
OR first_name = 'NICK'
OR first_name = 'ED'
OR first_name = 'JENNIFER';

-- USANDO O IN PARA O MESMO PROPÓSITO
SELECT * FROM sakila.actor
WHERE first_name IN ('PENELOPE','NICK','ED','JENNIFER'); 

-- USANDO O IN COM NÚMEROS
SELECT * FROM sakila.customer
WHERE customer_id IN (1, 2, 3, 4, 5);

SELECT * FROM payment
WHERE customer_id IN (269, 239, 126, 399, 142);