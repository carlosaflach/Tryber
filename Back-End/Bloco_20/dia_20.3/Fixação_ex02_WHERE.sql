USE sakila;
SELECT * FROM customer
WHERE store_id = 2 AND active <> 1 AND first_name <> 'KENNETH'
ORDER BY first_name;