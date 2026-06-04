--Given the tables below, write a query to find the name and salary of the highest-paid employee in each department. Include department name in the result.
--Employees(emp_id, name, salary, dept_id)
--Departments(dept_id, dept_name)

--Expected output columns: dept_name, name, salary
--Handle the case where two employees share the top salary in the same department — both should appear.

SELECT d.dept_name, e.name, e.salary
FROM Employees e    
JOIN Departments d ON e.dept_id = d.dept_id
WHERE e.salary = (
    SELECT MAX(salary)
    FROM Employees
    WHERE dept_id = e.dept_id
)