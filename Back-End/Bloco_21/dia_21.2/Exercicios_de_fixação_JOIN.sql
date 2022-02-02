use sakila;
SELECT * FROM actor;
-- 1 Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor .
SELECT a.actor_id, CONCAT(a.first_name,' ', a.last_name), f.film_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f 
ON a.actor_id = f.actor_id;

-- 2.Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address .

SELECT * FROM staff;
SELECT CONCAT(s.first_name, ' ', s.last_name) AS nome, a.address 
FROM sakila.staff AS s
INNER JOIN sakila.address AS a
ON s.address_id = a.address_id;

-- 3 Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address .

SELECT * FROM customer;
SELECT * FROM address;

SELECT c.customer_id, CONCAT(c.first_name, ' ', c.last_name) AS Name, c.email, a.address_id, a.address
FROM customer AS c
INNER JOIN address AS a
ON c.address_id = a.address_id
ORDER BY Name DESC
LIMIT 100;

-- 4. Exiba o **nome** , **email** , **id do endereço** , **endereço** e **distrito** dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas `address` e `customer` .
SELECT * FROM customer;
SELECT * FROM address;
SELECT c.first_name, c.email, c.address_id, a.address, a.district
FROM customer AS c
JOIN address AS a
ON c.address_id = a.address_id
WHERE
    a.district = 'California'
        AND c.first_name LIKE '%rene%';

-- 5. Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer .
SELECT c.customer_id, c.first_name, COUNT(a.address) AS `quantidade de endereços`
FROM
	customer c
JOIN
	address AS a
ON
	c.address_id = a.address_id
WHERE
	c.active = 1
GROUP BY
	c.customer_id
ORDER BY
	first_name DESC,
	last_name DESC;

-- 6. Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) paga aos funcionários no ano de 2006. Use as tabelas payment e staff . Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT * FROM payment;
SELECT * FROM staff;
SELECT
    stf.first_name,
    stf.last_name,
    AVG(pay.amount) AS `Média de pagamento`
FROM
    sakila.staff stf
INNER JOIN
    sakila.payment pay ON stf.staff_id = pay.staff_id
WHERE
    YEAR(pay.payment_date) = 2006
GROUP BY stf.staff_id;

-- 7. Monte uma *query* que exiba o **id do ator** , **nome** , **id do filme** e **título do filme** , usando as tabelas `actor` , `film_actor` e `film` . Dica: você precisará fazer mais de um `JOIN` na mesma *query* .
SELECT * FROM actor;
SELECT * FROM film_actor;
SELECT * FROM film;
SELECT act.actor_id, act.first_name, fil.film_id, f.title
FROM actor AS act
JOIN film_actor AS fil ON act.actor_id = fil.actor_id
JOIN film f ON fil.film_id = f.film_id;

