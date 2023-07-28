INSERT INTO `positions` (title, salary, dept_id)
VALUES ('Software Engineer', 1600.00, 1), ('Lead Engineer', 1800.00, 1), ('Sales Associate', 1000.00, 2), ('Sales Leader', 1200.00, 2), ('Accountant', 1250.00, 3), ('Account Manager', 1750.00, 3), ('Lawyer', 1900.00, 4), ('Legal Team Lead', 2250.00, 4);

INSERT INTO `employees` (first_name, last_name, pos_id, manager_id)
VALUES ('James', 'Black', 1, null), ('Anna', 'Johnson', 2, null), ('Roy', 'Coloumbo', 2, null), ('Sasha', 'Foster', 3, null), ('Kevin', 'Smith', 4, null), ('Kelli', 'McDougal', 4, null);
