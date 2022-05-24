USE PecasFornecedores;
SELECT * FROM Pecas;

-- Ex01 
SELECT * FROM Pecas
WHERE name LIKE "GR%";

-- Ex02 
SELECT * FROM Fornecimentos;
SELECT * FROM Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor;

-- Ex03
SELECT peca, Preco, Fornecedor FROM Fornecimentos
WHERE Fornecedor LIKE "%N%";

-- Ex04
SELECT * FROM Fornecedores
WHERE name LIKE "%LTDA%"
ORDER BY name DESC;

-- Ex05
SELECT COUNT(*) FROM Fornecedores
WHERE code LIKE "%F%";

-- Ex06
SELECT * FROM Fornecimentos
WHERE preco BETWEEN 15 AND 40 ORDER BY preco ASC;

-- Ex07
SELECT * FROM Vendas;
SELECT COUNT(*) FROM Vendas
WHERE order_date BETWEEN '2018-04-15' AND '2019-07-30';
