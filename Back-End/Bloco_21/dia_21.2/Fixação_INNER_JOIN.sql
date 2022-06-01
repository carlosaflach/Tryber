SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;

-- 1. Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou, usando as tabelas actor e film_actor.
SELECT A.actor_id, CONCAT(A.first_name, ' ', A.last_name), F.film_id 
FROM sakila.actor AS A
INNER JOIN sakila.film_actor as F
ON A.actor_id = F.actor_id;

-- 2. Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
SELECT * FROM sakila.staff;
SELECT * FROM sakila.address;

SELECT S.first_name, S.last_name, A.address 
FROM sakila.staff AS S
INNER JOIN sakila.address AS A
ON S.address_id = A.address_id;

-- 3. Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, 
-- juntamente com o id do endereço e o nome da rua onde o cliente mora. 
-- Essas informações podem ser encontradas nas tabelas customer e address.

SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT C.customer_id, C.first_name, C.email, A.address_id, A.address
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON C.address_id = A.address_id
ORDER BY C.first_name DESC
LIMIT 100;

-- 4. Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California 
-- e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer.

SELECT C.first_name, C.email, A.address, A.district 
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON C.address_id = A.address_id
WHERE A.district = "California" AND C.first_name LIKE "%rene%";

-- 5. Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. 
-- Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer.

SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT C.customer_id, C.first_name, C.last_name, COUNT(A.address) AS `quantidade de endereço`
FROM sakila.customer AS C
INNER JOIN sakila.address as A
ON C.address_id = A.address_id
WHERE C.active = 1
GROUP BY C.customer_id
ORDER BY C.first_name DESC, C.last_name DESC;

-- 6. Monte uma *query* que exiba o **nome**, **sobrenome** e a **média de valor** (`amount`) paga aos funcionários no ano de 2006. 
-- Use as tabelas `payment` e `staff`. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.

SELECT * FROM sakila.payment;
SELECT * FROM sakila.staff;

SELECT S.first_name, S.last_name, AVG(P.amount)
FROM sakila.staff AS S
INNER JOIN sakila.payment AS P
ON S.staff_id = P.staff_id
WHERE YEAR(P.payment_date) = 2006
GROUP BY S.staff_id;


-- 7. Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor, film_actor e film. 
-- Dica: você precisará fazer mais de um JOIN na mesma query.
SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;
SELECT * FROm sakila.film;

SELECT A.actor_id, A.first_name, F.film_id, F.title
FROM sakila.actor AS A
INNER JOIN sakila.film_actor AS FA
ON A.actor_id = FA.actor_id
INNER JOIN sakila.film AS F
ON FA.film_id = F.film_id;