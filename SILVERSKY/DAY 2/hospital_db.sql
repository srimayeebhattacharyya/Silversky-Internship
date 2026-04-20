create database hospital_db;
use hospital_db;
create table department(
department_id int primary key auto_increment,
department_name varchar(100)
);
CREATE TABLE doctor(
    doctor_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id)
        REFERENCES department(department_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
create table patient(
patient_id int auto_increment primary key,
name varchar(100) not null,
age int,
doctor_incharge int not null,
foreign key (doctor_incharge)
references doctor(doctor_id)
on delete cascade
on update cascade
);
CREATE TABLE appointments (
    appointment_id INT PRIMARY KEY AUTO_INCREMENT,
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    appointment_date DATE NOT NULL,
    status VARCHAR(20) DEFAULT 'Scheduled',
    FOREIGN KEY (patient_id)
        REFERENCES patient(patient_id)
        ON DELETE CASCADE,
    FOREIGN KEY (doctor_id)
        REFERENCES doctor(doctor_id)
        ON DELETE CASCADE
);
CREATE TABLE rooms (
    room_id INT PRIMARY KEY AUTO_INCREMENT,
    room_number VARCHAR(10) UNIQUE,
    room_type VARCHAR(50),
    charges_per_day DECIMAL(10,2) CHECK (charges_per_day > 0)
);
CREATE TABLE admissions (
    admission_id INT PRIMARY KEY AUTO_INCREMENT,
    patient_id INT NOT NULL,
    room_id INT NOT NULL,
    admission_date DATE DEFAULT (CURRENT_DATE),
    discharge_date DATE,
    FOREIGN KEY (patient_id)
        REFERENCES patient(patient_id)
        ON DELETE CASCADE,
    FOREIGN KEY (room_id)
        REFERENCES rooms(room_id)
        ON DELETE CASCADE
);
CREATE TABLE treatments (
    treatment_id INT PRIMARY KEY AUTO_INCREMENT,
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    treatment_description VARCHAR(200),
    treatment_date DATE DEFAULT (CURRENT_DATE),
    cost DECIMAL(10,2) CHECK (cost > 0),
    FOREIGN KEY (patient_id)
        REFERENCES patient(patient_id)
        ON DELETE CASCADE,
    FOREIGN KEY (doctor_id)
        REFERENCES doctor(doctor_id)
        ON DELETE CASCADE
);
CREATE TABLE bills (
    bill_id INT PRIMARY KEY AUTO_INCREMENT,
    patient_id INT NOT NULL,
    total_amount DECIMAL(10,2),
    payment_status VARCHAR(20) DEFAULT 'Unpaid',
    FOREIGN KEY (patient_id)
        REFERENCES patient(patient_id)
        ON DELETE CASCADE
);
SHOW CREATE TABLE patient;
-- many to many rel b/w doctor<-> patient
CREATE TABLE patient_consultation (
    consultation_id INT PRIMARY KEY AUTO_INCREMENT,
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    consultation_date DATE DEFAULT (CURRENT_DATE),
    FOREIGN KEY (patient_id)
        REFERENCES patient(patient_id)
        ON DELETE CASCADE,
    FOREIGN KEY (doctor_id)
        REFERENCES doctor(doctor_id)
        ON DELETE CASCADE
);
INSERT INTO rooms (room_number, room_type, charges_per_day) VALUES
('101', 'General', 2000),
('102', 'ICU', 5000),
('103', 'Private', 3500),
('104', 'General', 2000),
('105', 'Private', 3500);
INSERT INTO appointments (patient_id, doctor_id, appointment_date, status) VALUES
(1, 1, '2025-07-01', 'Completed'),
(2, 2, '2025-07-02', 'Completed'),
(3, 1, '2025-07-03', 'Scheduled'),
(4, 3, '2025-07-04', 'Completed'),
(5, 4, '2025-07-05', 'Cancelled'),
(6, 2, '2025-07-06', 'Completed'),
(7, 5, '2025-07-07', 'Scheduled');
INSERT INTO admissions (patient_id, room_id, admission_date, discharge_date) VALUES
(1, 1, '2025-07-01', '2025-07-03'),
(3, 2, '2025-07-02', NULL),
(5, 3, '2025-07-03', '2025-07-06'),
(6, 4, '2025-07-04', NULL);
INSERT INTO treatments (patient_id, doctor_id, treatment_description, cost) VALUES
(1, 1, 'Heart Checkup', 8000),
(2, 2, 'Brain MRI', 12000),
(3, 1, 'ECG Test', 3000),
(4, 3, 'Bone X-Ray', 4000),
(5, 4, 'Child Vaccination', 2000),
(6, 2, 'Neurology Consultation', 5000),
(7, 5, 'Skin Allergy Treatment', 3500);
INSERT INTO bills (patient_id, total_amount, payment_status) VALUES
(1, 10000, 'Paid'),
(2, 15000, 'Unpaid'),
(3, 5000, 'Paid'),
(4, 7000, 'Paid'),
(5, 3000, 'Unpaid'),
(6, 8000, 'Paid');
INSERT INTO patient_consultation (patient_id, doctor_id) VALUES
(1, 2),
(1, 3),
(2, 1),
(3, 4),
(4, 2),
(5, 5),
(6, 1),
(7, 3),
(8, 4);
INSERT INTO department (department_name) VALUES
('Cardiology'),
('Neurology'),
('Orthopedics'),
('Pediatrics'),
('Dermatology');
INSERT INTO doctor (name, department_id) VALUES
('Dr. Sharma', 1),
('Dr. Gupta', 2),
('Dr. Verma', 3),
('Dr. Roy', 4),
('Dr. Das', 5);
INSERT INTO patient (name, age, doctor_incharge) VALUES
('Amit', 25, 1),
('Riya', 32, 2),
('Sonal', 40, 1),
('Raj', 29, 3),
('Meera', 5, 4),
('Arjun', 60, 2),
('Neha', 45, 5),
('Rohit', 38, 3);
SELECT * FROM department;
SELECT * FROM doctor;
SELECT * FROM patient;
select name,age from patient;
select name from patient where age>40;
select name from doctor where department_id=2;
select name from patient where doctor_incharge=3;
select name from patient where doctor_incharge in (1,3,5);
select name from doctor where department_id not in (2,4);
select name from patient where age between 25 and 45;
select name from doctor where doctor_id between 2 and 4;
select name from patient where name like 'A%';
select name from patient where name like '%a';
select name from patient where name like '%sh%';
select distinct doctor_incharge from patient;
select * from patient order by age desc;
select * from patient order by age asc limit 3;
select * from doctor order by name asc;
update patient
set age=age+1 where doctor_incharge=1;
update doctor
set department_id=3 where doctor_id=5;
delete from patient where patient_id>0 and age<5;