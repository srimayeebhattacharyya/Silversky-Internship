-- USING OF JOINS,SUBQUERIES,AGGREAGTE FUNC
-- Q1. Show all patients and their primary doctor name (even if doctor record missing).
select p.name,d.name from patient p left join doctor  d on p.doctor_incharge=d.doctor_id;
-- Q2.show all doctors and the patients assigned to them (even if doctor has no patients).
select p.name,d.name from doctor d left join patient p on p.doctor_incharge=d.doctor_id;
-- Q3.Show all departments and their doctors (even if no doctor exists).
select d.department_name,do.name from department d left join doctor do on d.department_id=do.department_id;
-- Q4.Show all patients and their appointments (even if no appointment exists).
select p.name,a.appointment_id,a.appointment_date from patient p left join appointments a on p.patient_id=a.patient_id;
-- Q5.Show all rooms and admissions (even if room never used).
select r.room_id,a.admission_id from rooms r left join admissions a on r.room_id=a.room_id;
-- Q6.Show all doctors and their patients using RIGHT JOIN.
SELECT 
    d.name AS doctor_name,
    p.name AS patient_name
FROM patient p
RIGHT JOIN doctor d
ON p.doctor_incharge = d.doctor_id;
-- Q7.Show all admissions and patient names using RIGHT JOIN.
select a.admission_id,p.name from admissions a right join patient p on a.patient_id=p.patient_id;
-- Q8.Show all appointments and doctor names using RIGHT JOIN.
select a.appointment_id,d.name from appointments a right join doctor d on a.doctor_id=d.doctor_id;
-- Q9.Count total number of patients.
select count(patient_id) "total" from patient;
-- Q10.Count number of patients under each doctor.
select count(patient_id),doctor_incharge from patient group by doctor_incharge;
-- Q11.Show average age of patients.
select avg(age) 'age_avg' from patient;
-- Q12.Show maximum age of patients.
select max(age) from patient;
-- Q13.Show number of doctors in each department.
select count(d.doctor_id),de.department_name from doctor d join department de on d.department_id=de.department_id group by d.doctor_id order by d.doctor_id asc;
-- Q14.Show total treatment cost per patient.
select sum(t.cost),p.name from treatments t join patient p on t.patient_id=p.patient_id group by t.patient_id order by t.patient_id asc;
-- Q15.Show departments having more than 1 doctor.
select de.department_name from department de join doctor d on de.department_id=d.department_id group by de.department_id having count(d.doctor_id)>1;
-- Q16.Show patients whose age is greater than the average age.
select patient_id from patient where age>(select avg(age) from patient);
-- Q17.Show doctor(s) who belong to the department 'Cardiology'.
select d.name from doctor d join department de on d.department_id=de.department_id where de.department_name='Cardiology';
-- Q18.Show patients treated by the doctor named 'Dr. Sharma'.
select p.name from patient p left join doctor d on p.doctor_incharge=d.doctor_id where d.name='Dr.Sharma';
-- Q19.Show doctors who treat more patients than average number of patients per doctor.
SELECT d.name, COUNT(p.patient_id) AS total_patients
FROM doctor d
JOIN patient p 
ON p.doctor_incharge = d.doctor_id
GROUP BY d.doctor_id
HAVING COUNT(p.patient_id) > (
    SELECT AVG(patient_count)
    FROM (
        SELECT COUNT(*) AS patient_count
        FROM patient
        GROUP BY doctor_incharge
    ) AS temp
);
-- Q20.Show patient(s) who have highest treatment cost.
select p.name from patient p join treatments t on p.patient_id=t.patient_id where t.cost=(select max(treatments.cost) from treatments)