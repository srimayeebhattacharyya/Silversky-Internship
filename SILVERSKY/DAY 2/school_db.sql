CREATE DATABASE school_db;
USE school_db;
CREATE TABLE departments (
    department_id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(100) NOT NULL
);
CREATE TABLE teachers (
    teacher_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    salary DECIMAL(10,2) CHECK (salary > 0),
    department_id INT,
    FOREIGN KEY (department_id)
        REFERENCES departments(department_id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);
select * from teachers;
CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    gender CHAR(1) CHECK (gender IN ('M','F')),
    date_of_birth DATE NOT NULL,
    admission_date DATE DEFAULT (CURRENT_DATE)
);
CREATE TABLE courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(100) NOT NULL,
    department_id INT NOT NULL,
    credits INT CHECK (credits BETWEEN 1 AND 5),
    FOREIGN KEY (department_id)
        REFERENCES departments(department_id)
        ON DELETE CASCADE
);
CREATE TABLE enrollments (
    student_id INT,
    course_id INT,
    enrollment_date DATE DEFAULT (CURRENT_DATE),
    grade CHAR(2),
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id)
        REFERENCES students(student_id)
        ON DELETE CASCADE,
    FOREIGN KEY (course_id)
        REFERENCES courses(course_id)
        ON DELETE CASCADE
);
INSERT INTO departments (department_name) VALUES
('Science'),
('Mathematics'),
('Computer Science'),
('English'),
('History');
select * from departments;
INSERT INTO teachers (name, email, salary, department_id) VALUES
('Mr. Sharma', 'sharma@school.com', 50000, 1),
('Ms. Gupta', 'gupta@school.com', 55000, 2),
('Mr. Verma', 'verma@school.com', 60000, 3),
('Ms. Roy', 'roy@school.com', 48000, 4),
('Mr. Das', 'das@school.com', 47000, 5);
INSERT INTO students (name, email, gender, date_of_birth) VALUES
('Amit', 'amit@gmail.com', 'M', '2008-05-10'),
('Riya', 'riya@gmail.com', 'F', '2009-02-15'),
('Sonal', 'sonal@gmail.com', 'F', '2008-11-21'),
('Raj', 'raj@gmail.com', 'M', '2007-09-12'),
('Meera', 'meera@gmail.com', 'F', '2008-01-30'),
('Arjun', 'arjun@gmail.com', 'M', '2009-07-18'),
('Neha', 'neha@gmail.com', 'F', '2008-04-14'),
('Rohit', 'rohit@gmail.com', 'M', '2007-12-25'),
('Simran', 'simran@gmail.com', 'F', '2009-03-08'),
('Kabir', 'kabir@gmail.com', 'M', '2008-06-17');
INSERT INTO courses (course_name, department_id, credits) VALUES
('Physics', 1, 4),
('Algebra', 2, 3),
('Database Systems', 3, 5),
('Literature', 4, 2),
('World History', 5, 3);
INSERT INTO enrollments (student_id, course_id, grade) VALUES
(1, 1, 'A'),
(1, 3, 'B'),
(2, 2, 'A'),
(3, 1, 'B'),
(4, 5, 'C'),
(5, 4, 'A'),
(6, 3, 'B'),
(7, 2, 'A'),
(8, 1, 'C'),
(9, 4, 'B');
SELECT * FROM students;
SELECT * FROM students WHERE gender = 'F';
SELECT * FROM teachers ORDER BY salary DESC;
SELECT * FROM students WHERE name LIKE 'A%';
UPDATE teachers
SET salary = salary + 2000
WHERE department_id = 3;
DELETE FROM students
WHERE student_id = 10;
-- Question:

-- Show all female students.
SELECT * FROM students
WHERE gender = 'F';

-- Show unique department IDs from courses.
SELECT DISTINCT department_id
FROM courses;

-- Show students who are female AND born after 2008.
SELECT * FROM students
WHERE gender = 'F'
AND date_of_birth > '2008-01-01';

-- Show students who are male OR born after 2009.
SELECT * FROM students
WHERE gender = 'M'
OR date_of_birth > '2009-01-01';

-- Show students whose ID is 1, 3, or 5.
SELECT * FROM students
WHERE student_id IN (1,3,5);

-- Show students not in department 1 or 2.
SELECT * FROM courses
WHERE department_id NOT IN (1,2);

-- Show teachers whose salary is between 48000 and 55000.
SELECT * FROM teachers
WHERE salary BETWEEN 48000 AND 55000;

-- Show students whose name starts with 'A'.
SELECT * FROM students
WHERE name LIKE 'A%';

-- Show students whose name contains 'ri'.
SELECT * FROM students
WHERE name LIKE '%ri%';

-- Show first 5 students.
SELECT * FROM students
LIMIT 5;

SELECT * FROM teachers
WHERE department_id IS NULL;

SELECT * FROM teachers
WHERE department_id = 1
ORDER BY salary DESC
LIMIT 3;