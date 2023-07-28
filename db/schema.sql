DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE dept (
    dept_id INT AUTO_INCREMENT,
    dept_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (dept_id)
);

CREATE TABLE positions (
    pos_id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    salary DECIMAL(9,2) NOT NULL,
    dept_id INT NOT NULL,
    PRIMARY KEY (pos_id)
);

INSERT INTO dept (dept_name)
VALUES ('Sales'), ('Engineering'), ('Finance'), ('Legal');

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    pos_id INT NOT NULL,
    manager_id INT DEFAULT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE employees ADD FOREIGN KEY (pos_id) REFERENCES positions(pos_id);

CREATE TABLE managers (
    manager_id INT AUTO_INCREMENT,
    manager VARCHAR(30),
    PRIMARY KEY (manager_id)
);
