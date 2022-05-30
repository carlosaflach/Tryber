INSERT INTO sakila.actor (first_name, last_name)
VALUES('Marcelo','Santos');
SELECT * FROM sakila.actor;
SELECT * FROM sakila.staff;

INSERT INTO sakila.actor (first_name, last_name)
	SELECT first_name, last_name FROM sakila.staff;

-- Ex01 
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES ('Geralt', 'of Rivia', 2, 'tossacoin@gmail.com', 1, 1, 'geralt', 'theWhiteWolf');

-- Ex02
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
('Carlos', 'Afonso', 2, 'carlos@gmai.com', 1, 1, 'cacalo', 'themestre1'),
('Emeli', 'Maria', 2, 'emeli@gmail.com', 1, 1, 'emeli', 'thewhitemestra1');

-- Ex03
INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name
    FROM sakila.customer
    ORDER BY customer_id
    LIMIT 5; 
    
-- Ex04
SELECT * FROM sakila.category;
INSERT INTO sakila.category (name)
VALUES ('Diversão'), ('Esportes'), ('Desenvolvimento'); 

-- Ex05
SELECT * FROM sakila.store;
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 2); 