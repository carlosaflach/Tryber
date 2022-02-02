USE hr;
SELECT * FROM employees;

-- 1. Escreva uma query que exiba o maior salário da tabela.
SELECT MAX(SALARY) AS `Maior Salário`
FROM hr.employees;

-- 2. Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT MAX(salary) - MIN(salary) AS `Diferença entre o maior e menor salário`
FROM employees;

-- 3. Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.
SELECT  JOB_ID, ROUND(AVG(SALARY),2) AS 'average_salary'
FROM hr.employees
GROUP BY JOB_ID
ORDER BY `average_salary` DESC;

-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
SELECT SUM(salary) AS `Total de gastos com funcionários` 
FROM employees;

-- 5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT ROUND(MAX(salary),2) AS `Maior Salário`, ROUND(MIN(salary),2) AS `Menor Salário`, ROUND(SUM(salary),2) `Soma de todos salários`, ROUND(AVG(salary),2) AS `Média de salários`
FROM employees;

-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).
SELECT * FROM employees;
SELECT JOB_ID , COUNT(*) AS 'total'
FROM employees
WHERE JOB_ID = "IT_PROG";

-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( JOB_ID ).
SELECT JOB_ID, SUM(salary) AS `Montante necessário/ JOB_ID`
FROM employees
GROUP BY JOB_ID;

-- 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ).
SELECT JOB_ID, SUM(salary) AS `Montante necessário/ JOB_ID`
FROM employees
GROUP BY JOB_ID
HAVING JOB_ID = "IT_PROG";

-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( IT_PROG ).
 SELECT JOB_ID, AVG(salary) AS `Montante necessário/ JOB_ID`
 FROM employees
GROUP BY JOB_ID
HAVING JOB_ID <> "IT_PROG"
ORDER BY AVG(salary) DESC;

-- 10. Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id .
SELECT * FROM employees;
SELECT department_id, AVG(salary) AS `Média salarial`, COUNT(*) AS Número_de_profissionais_por_setor
FROM employees
GROUP BY department_id
HAVING Número_de_profissionais_por_setor > 10;

-- 11. Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os telefones iniciados por 515 agora devem iniciar com 777 .
SET SQL_SAFE_UPDATES = 0;
UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

-- 12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
SELECT * FROM employees;
SELECT * FROM employees
WHERE char_length(first_name) >= 8;

-- 13. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e ano no qual foi contratado (exiba somente o ano)
SELECT employee_id, first_name, year(hire_date)
FROM employees;

-- 14. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
SELECT employee_id, first_name, day(hire_date) AS `hire_day`
FROM employees;

-- 15. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e mês no qual foi contratado (exiba somente o mês).
SELECT employee_id, first_name, month(hire_date) AS `hire_month`
FROM employees;

-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
SELECT UCASE(CONCAT(first_name, ' ', last_name)) AS `nome` 
FROM employees;

-- 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
SELECT * from employees;
SELECT last_name, hire_date 
FROM employees
WHERE month(hire_date) = 7;

-- 18: Escreva uma query que exiba as seguintes informações de cada funcionário: nome , sobrenome , tempo que trabalha na empresa (em dias) .
SELECT first_name, last_name, DATEDIFF(CURRENT_DATE() , HIRE_DATE) 'days_worked'
FROM employees;