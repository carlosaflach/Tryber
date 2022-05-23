USE sakila;
SELECT * FROM customer;
SELECT COUNT(customer_id) FROM customer
WHERE active = 1 AND store_id = 1;