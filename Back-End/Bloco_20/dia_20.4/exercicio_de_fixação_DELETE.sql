/*1 */
DELETE FROM sakila.actor
WHERE first_name = 'KARL';
SELECT * FROM sakila.actor
WHERE first_name = "KARL";
DELETE FROM sakila.film_actor
WHERE actor_id = 12;
/* 2 */
DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';
SELECT * FROM sakila.actor
WHERE first_name = 'MATTHEW';
DELETE FROM sakila.film_actor
WHERE actor_id IN(8,103,181);
/* 3 */
SELECT * FROM sakila.film_text
WHERE description LIKE "%saga%";

DELETE FROM sakila.film_text
WHERE description LIKE "%saga%";
/* 4 */
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;
