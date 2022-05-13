/* 1 */
INSERT INTO `sakila`.`staff`
    (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
    ('Geralt', 'of Rivia', 2, 'tossacoin@gmail.com', 1, 1, 'geralt', 'theWhiteWolf');
    SELECT 
    *
FROM
    sakila.staff;
/* 2 */
INSERT INTO `sakila`.`staff`
    (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
    ('Marcelo', 'Santos', 3, 'marcelosantos@gmail.com', 1, 1, 'marcelo', 'santos123'),
    ('Carlos', 'Afonso', 5, 'carlos@gmail.com', 1, 1, 'cacalo', 'cacalo123');
    SELECT 
    *
FROM
    sakila.staff;

    /* 3 */
INSERT INTO sakila.actor(first_name, last_name)
SELECT first_name, last_name
FROM sakila.customer
ORDER BY customer_id
LIMIT 5;
/*4*/
SELECT 
    *
FROM
    sakila.category;
INSERT INTO sakila.category (name)
VALUES
    ('Sci-Fi'),
    ('Fantasy'),
    ('Biography');
/* 5 */
SELECT * FROM sakila.store;
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3);


    
