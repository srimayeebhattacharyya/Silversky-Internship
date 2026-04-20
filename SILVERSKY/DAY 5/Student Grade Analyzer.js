// Input:
// [
//   { name: "A", marks: 78 },
//   { name: "B", marks: 45 },
//   ...
// ]
// Write logic to:
// Assign grades (A/B/C/D/Fail)
// Calculate average
// Find topper
// Count failures
// Return full report object
let students_new = [
  { name: "A", marks: 80 },
  { name: "B", marks: 45 },
  { name: "C", marks: 30 },
  { name: "D", marks: 90 }
];
for (let student of students_new) {
    if (student.marks >= 80) {
        student.grade = "A";
    } else if (student.marks >= 60) {
        student.grade = "B";
    } else if (student.marks >= 35) {
        student.grade = "C";
    } else {
        student.grade = "Fail";
    }
}
console.log(students_new);