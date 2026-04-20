// 1️⃣ Double the Numbers
let nums1 = [1, 2, 3, 4, 5];
let res1=nums1.map(num=>num*2);
console.log(res1);  // [2, 4, 6, 8, 10]
// 2️⃣ Get Even Numbers
let r=nums1.filter(ele=>ele%2===0)
console.log(r);  // [2, 4]
// 3️⃣Convert All Names to Uppercase
let names = ["riya", "amit", "john"];
let res2=names.map(name=>name.toUpperCase());
console.log(res2);  // ["RIYA", "AMIT", "JOHN"]
// 4️⃣Count How Many Numbers Are Greater Than 50

let nums2=[10, 55, 30, 80, 45];
let c=nums2.filter(num=>num>50).length;
console.log(c);  // 2
//5️⃣ Add 5 Bonus Marks and Return Average
let res3=nums2.map(num=>num+5)
              .reduce((acc,num)=>acc+num,0)/nums2.length;
console.log(res3);  // 47.5
//6️⃣ Get Names of Passed Students
let students = [
  { name: "A", marks: 80 },
  { name: "B", marks: 45 },
  { name: "C", marks: 30 },
  { name: "D", marks: 90 }
];
let res4=students.filter(student=>student.marks>=50)
                .map(student=>student.name);
console.log(res4);  // ["A", "D"]
//7️⃣Get Class Average (Using reduce).From students array:Return:Average marks of class
let res5=students.reduce((acc, student) => acc + student.marks, 0) / students.length;
console.log(res5);  // 61.25
//8️⃣ Get Topper Object.Return full object of student with highest marks.Expected:{ name: "D", marks: 90 }
let topper=students.reduce((acc,student)=>{
    if (student.marks>acc.marks){
        return student;
    }
    else{
        return acc;
    }
},students[0]);
console.log(topper);
console.log("-------------------");
/*9️⃣ Count Failures Using reduce

Return:

Number of students with marks < 35
 */
// let fail=students.filter(student=>student.marks<35).length;
// console.log(fail)
let fail=students.reduce((count,student)=>{
    return student.marks<35?count+1:count;
},0);
console.log(fail);
console.log("-------------------");
/*🔟 Build a Summary Using ONE reduce

From this array:

let students = [
  { name: "A", marks: 80 },
  { name: "B", marks: 45 },
  { name: "C", marks: 30 },
  { name: "D", marks: 90 }
];


Return this:

{
  totalMarks: 245,
  average: 61.25,
  passCount: 3,
  failCount: 1
} */
let summary=students.reduce((acc,student)=>{
    acc.total+=student.marks;
    if (student.marks >= 35) {
        acc.passCount++;
    } else {
        acc.failCount++;
    }

    return acc;
},{
    total:0,
    passCount:0,
    failCount:0
});
summary.average = summary.total / students.length;
console.log(summary);
