SELECT rating, AVG(length) AS media
FROM sakila.film
GROUP BY rating
HAVING media BETWEEN 115.0 AND 121.50
ORDER BY media DESC;

SELECT rating, SUM(replacement_cost) AS valor_total
FROM sakila.film
GROUP by rating
HAVING valor_total > 3950.50
ORDER BY valor_total ASC;