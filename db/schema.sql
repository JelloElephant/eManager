DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE dept (
    dept_id INT AUTO_INCREMENT,
    role VARCHAR(30),
    PRIMARY KEY (dept_id)
);

INSERT INTO dept(position)
VALUES ("Sales"), ("Engineering"), ("Fiance"), ("Legal");

CREATE TABLE position (
    pos_id INT AUTO_INCREMENT,
    title VARCHAR(40),
    salary DECIMAL(9,2),
    dept_id INT,
    PRIMARY KEY (pos_id)
);

INSERT INTO position(title, salary, dept_id)
VALUES ("Software Engineer", 160000, 2), ("Lead Engineer", 180000, 2), ("Sales Associate", 100000, 2), ("Sales Leader", 120000, 2), ("Accountant", 125000, 2), ("Account Manager", 175000, 2), ("Laywer", 190000, 2), ("Legal Team Lead", 225000, 2);

CREATE TABLE employees (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    pos_id INT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE managers (
    manager_id INT AUTO_INCREMENT,
    manager VARCHAR(30),
    PRIMARY KEY (manager_id)
);