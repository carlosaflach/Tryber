SELECT rating, AVG(length) duracao_media
FROM sakila.film
GROUP BY rating
HAVING duracao_media BETWEEN 115.0 AND 121.50
ORDER BY duracao_media DESC;

SELECT rating, SUM(replacement_cost) AS Total_cost_replacement
FROM sakila.film
GROUP by rating
HAVING Total_cost_replacement > 3950.50
ORDER BY Total_cost_replacement;