USE sakila;

--  EX 01
SELECT * FROM film
WHERE title LIKE "%ace%";

-- EX02
SELECT * FROM film
WHERE description LIKE "%china"; 

-- EX03
SELECT * FROM film
WHERE description LIKE "%girl%" AND title LIKE "%lord"; 

-- EX04
SELECT * FROM film
WHERE title LIKE "___gon%";

-- EX05
SELECT * FROM film
WHERE title LIKE "___gon%" AND description LIKE "%documentary%";

-- EX06
SELECT * FROM film
WHERE title LIKE "mosquito%" OR title LIKE "%academy"; 

-- EX07
SELECT * FROM film
WHERE description LIKE "%monkey%" AND description LIKE "%sumo%";