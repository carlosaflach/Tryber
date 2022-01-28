USE sakila;
/* 1 */
SELECT * FROM film
WHERE title LIKE '%ace%';
/* 2*/
SELECT * FROM film
WHERE description LIKE '%china';
/* 3 */
SELECT * FROM film
WHERE title LIKE '%lord' AND description LIKE '%girl%';
/* 4 */
SELECT * FROM film
WHERE title LIKE '___gon%';
/* 5 */
SELECT * FROM film
WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';
/* 6 */
SELECT * from film 
WHERE title LIKE '%academy' OR title LIKE 'mosquito%';
/* 7 */
SELECT * from film
WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';