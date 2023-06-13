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
    pos_id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(40) NOT NULL,
    salary DECIMAL(9,2) NOT NULL,
    dept_id INT NOT NULL,
    PRIMARY KEY (pos_id)
);

INSERT INTO position(title, salary, dept_id)
VALUES ("Software Engineer", 160000, 1), ("Lead Engineer", 180000, 1), ("Sales Associate", 100000, 2), ("Sales Leader", 120000, 2), ("Accountant", 125000, 3), ("Account Manager", 175000, 3), ("Laywer", 190000, 4), ("Legal Team Lead", 225000, 4);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    pos_id INT NOT NULL,
    manager_id INT DEFAULT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE managers (
    manager_id INT AUTO_INCREMENT,
    manager VARCHAR(30),
    PRIMARY KEY (manager_id)
);