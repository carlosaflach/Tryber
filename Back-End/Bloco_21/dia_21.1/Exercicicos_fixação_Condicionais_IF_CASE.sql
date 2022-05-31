SELECT * FROM sakila.film;

-- Usando o IF na tabela sakila.film, 
-- exiba o id do filme, o título e uma coluna extra chamada 'conheço o filme?', 
-- em que deve-se avaliar se o nome do filme é 'ACE GOLDFINGER'. 
-- Caso seja, exiba "Já assisti a esse filme". Caso contrário, exiba "Não conheço o filme". 
-- Não esqueça de usar um alias para renomear a coluna da condicional. 
SELECT film_id, title, IF(title = 'ACE GOLDFINGER', "Já assisti esse filme", 'Não conheço esse filme') AS 'conheço o filme?'
FROM sakila.film;

SELECT title, rating,
	CASE 
		WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menos de 17 anos'
        ELSE 'Proibido poara menores de idade'
	END AS 'público alvo'
FROM sakila.film;