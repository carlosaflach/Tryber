-- SEM USAR O ALIAS AS, retorna um erro.
SELECT sakila.actor.first_name, actor_id, sakila.film_actor.actor_id
FROM sakila.actor
INNER join film_actor
ON sakila.actor.actor_id = sakila.film_actor.actor_id;

-- Usando o Alias AS.
SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor AS a
INNER JOIN film_actor AS f
ON a.actor_id = f.actor_id;

-- O Alias AS pode ser omitido.
SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor a
INNER JOIN film_actor f
ON a.actor_id = f.actor_id;