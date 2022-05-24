--  Ex01
SELECT 'This is SQL Exercise, Practtice and Solution';

-- Ex02
SELECT 07 AS numero_da_sorte, 28 AS idade, 19 AS data_preferida;

-- Ex03
SELECT 10 + 15;

-- Ex04
SELECT 2*2;

-- Ex05
SELECT * FROM Scientists.Scientists;

-- Ex06
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects;

-- Ex07
SELECT Name FROM Scientists.Scientists
ORDER BY NAme;

-- Ex08
SELECT Name FROM Scientists.Projects
ORDER BY Name DESC; 

-- Ex09
SELECT CONCAT("O projeto ", Name, " precisou de ", Hours, " horas de trabalho para ser concluído.") FROM Scientists.Projects;

-- Ex10
SELECT Name, Hours FROM Scientists.Projects
ORDER BY Hours DESC
LIMIT 3;

-- Ex11
SELECT DISTINCT Project FROM Scientists.AssignedTo;

-- Ex12
SELECT Name FROM Scientists.Projects
ORDER BY Hours DESC LIMIT 1; 

-- Ex13
SELECT Name, Hours FROM Scientists.Projects
ORDER BY Hours LIMIT 1 OFFSET 1;

-- Ex14
SELECT * FROM Scientists.Projects
ORDER BY Hours LIMIT 5;

-- Ex15
SELECT CONCAT("Existem ", COUNT(Name), " cientistas na tabela Scientists.") FROM Scientists.Scientists;   