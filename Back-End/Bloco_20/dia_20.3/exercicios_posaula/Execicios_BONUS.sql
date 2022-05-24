-- Ex01 Bonus
SELECT * FROM Scientists.Scientists
WHERE name LIKE "%e%";

-- Ex02 Bonus
SELECT * FROM Scientists.Projects;
WHERE name LIKE "a%" ORDER BY name;

-- Ex03 Bonus
SELECT Code, Name FROM Scientists.Projects
WHERE code LIKE "%3%" ORDER BY Name;

-- Ex04 Bonus
SELECT * FROM AssignedTo;
SELECT Scientist FROM AssignedTo
WHERE Project IN('AeH3', 'Ast3', 'Che1');

-- Ex05 Bonus 
SELECT * FROM Scientists.Projects
WHERE Hours > 500;

-- Ex06 Bonus
SELECT * FROM Scientists.Projects
WHERE Hours BETWEEN 250 AND 800; 

-- Ex07 Bonus
SELECT Name, Code FROM Scientists.Projects
WHERE name NOT LIKE "A%";

-- EX08 Bonus
SELECT Name FROM Scientists.Projects
WHERE code LIKE "%H%";