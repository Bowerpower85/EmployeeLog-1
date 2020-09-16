USE emp_tracker_db;

INSERT INTO department(name) VALUES('PayRoll');
INSERT INTO department(name) VALUES('Sales');
INSERT INTO department(name) VALUES('Warehouse');
INSERT INTO department(name) VALUES('Human Resources');

INSERT INTO role(title, salary, department_id) VALUES('Manager', 140000, 1);
INSERT INTO role(title, salary, department_id) VALUES('Supervisor', 78000, 1);
INSERT INTO role(title, salary, department_id) VALUES('Manager', 140000, 3);
INSERT INTO role(title, salary, department_id) VALUES('Supervisor', 82000, 3);
INSERT INTO role(title, salary, department_id) VALUES('Sales Manager', 165000, 2);
INSERT INTO role(title, salary, department_id) VALUES('Manager', 165000, 4);
INSERT INTO role(title, salary, department_id) VALUES('Supervisor', 115000, 4);


INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES('Stacy', 'Davis', 2, 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES('Joe', 'Jackson', 1, null);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES('Tim', 'Jacobson', 1, 2);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES('Andre', 'Dupree', 2, 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES('Nancy', 'Fletcher', 3, null);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES('Pete', 'Prekeges', 4, 5);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES('Alex', 'Dawson', 4, 7);