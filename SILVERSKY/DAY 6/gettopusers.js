// const users = [
//   { id: 1, name: "Alice", age: 22, isActive: true, purchases: [120, 80, 50] },
//   { id: 2, name: "Bob", age: 17, isActive: true, purchases: [20, 30] },
//   { id: 3, name: "Charlie", age: 25, isActive: false, purchases: [200, 150] },
//   { id: 4, name: "David", age: 30, isActive: true, purchases: [] }
// ];
// ❓ Task
// Write a function:
 
// function getTopUsers(users) {}
// Requirements:
// Consider only users who:
 
// are active
 
// are 18 or older
 
// Calculate their total purchase amount
// function getTopUsers(users){
//     return users.filter(user=>user.isActive && user.age>=18)
//                 .map(user=>({
//                     ...user,
//                     totalPurchase:user.purchases.reduce((sum,amount)=>sum+amount,0)
//                 })).sort((a,b)=>b.totalPurchase-a.totalPurchase);
// }

//do with for loop and and also this method
function getTopUser(users) {

    let topUser = null;
    let maxPurchase = 0;

    for (let user of users) {

        if (!user.isActive || user.age < 18) {
            continue;
        }

        let total = 0;

        for (let amount of user.purchases) {
            total += amount;
        }

        if (total > maxPurchase) {
            maxPurchase = total;
            topUser = user;
        }
    }

    return topUser;
}
function getTopUser(users) {

    let topUser = null;
    let maxPurchase = 0;

    users
        .filter(user => user.isActive && user.age >= 18)
        .forEach(user => {

            const total = user.purchases.reduce(
                (sum, amount) => sum + amount,
                0
            );

            if (total > maxPurchase) {
                maxPurchase = total;
                topUser = user; 
            }
        });

    return topUser;
}

const users = [
  { id: 1, name: "Alice", age: 22, isActive: true, purchases: [120, 80, 50] },
  { id: 2, name: "Bob", age: 17, isActive: true, purchases: [20, 30] },
  { id: 3, name: "Charlie", age: 25, isActive: false, purchases: [200, 150] },
  { id: 4, name: "David", age: 30, isActive: true, purchases: [] }
];
console.log(getTopUser(users));