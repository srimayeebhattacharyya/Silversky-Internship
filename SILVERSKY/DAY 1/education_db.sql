CREATE DATABASE education_db;
USE education_db;
CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    age INT
);

CREATE TABLE courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(100)
);

CREATE TABLE enrollments (
    enrollment_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    course_id INT
);
INSERT INTO students (name, age) VALUES
('Amit Sharma', 20),
('Riya Das', 19),
('Sonal Verma', 21);