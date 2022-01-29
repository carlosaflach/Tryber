/* 1 */
USE sakila;
SET SQL_SAFE_UPDATES = 0;
SELECT * from actor;
UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';
/* 2 */
SELECT * FROM category;
UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';
/* 3 */
SELECT * FROM film;
UPDATE sakila.film
SET rental_rate = 25
WHERE length > 100
AND (rating = 'G' OR rating = 'PG' OR rating = 'PG-13')
AND replacement_cost > 20;
/* 4 */
UPDATE sakila.film
SET rental_rate = (
    CASE
        WHEN length BETWEEN 1 AND 100 THEN 10
        WHEN length > 100 THEN 20
    END
);
