SELECT
    CONCAT(Employee.FIRST_NAME, " ", Employee.LAST_NAME) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente"
FROM
	employees AS Employee
INNER JOIN
	employees AS Manager ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID;

SELECT * FROM hr.employees;

-- Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências (manager) cujos departamentos (department) são diferentes.
SELECT
	EMP.DEPARTMENT_ID, CONCAT(EMP.FIRST_NAME, " ", EMP.LAST_NAME) AS "Nome da Pessoa Colaboradora",
    MAN.DEPARTMENT_ID, CONCAT(MAN.FIRST_NAME, " ", MAN.LAST_NAME) AS "Nome do Mananger"
FROM 
	hr.employees AS EMP
INNER JOIN
	hr.employees AS MAN
ON
	EMP.MANAGER_ID = MAN.EMPLOYEE_ID
WHERE
	EMP.DEPARTMENT_ID <> MAN.DEPARTMENT_ID;

-- Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerente.
SELECT
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente",
    COUNT(*)
FROM
	hr.employees AS Manager
INNER JOIN
	hr.employees AS Employee ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
GROUP BY
	Manager.EMPLOYEE_ID;
