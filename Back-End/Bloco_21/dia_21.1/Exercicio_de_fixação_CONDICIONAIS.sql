USE sakila;
SELECT * FROM film;
SELECT film_id, title, IF (title = 'ACE GOLDFINGER', 'Já Assisti esse filme', 'Não conheço esse filme') AS 'Conheço o filme?'
FROM film;

SELECT title, rating,  
	CASE 
		WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não Recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não Recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
	ELSE 'Proibido para menores'
    END AS 'Classificação indicativa'
FROM film;