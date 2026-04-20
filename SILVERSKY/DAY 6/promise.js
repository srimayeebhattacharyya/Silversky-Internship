//promises real world example
//promise=new Promise((resolve, reject) => {
//     // Simulating an asynchronous operation (e.g., fetching data from an API)
//     setTimeout(() => {   
//         const success = true; // Change this to false to simulate an error
//         if (success) {
//             resolve("Data fetched successfully!");
//         } else {
//             reject("Error fetching data.");
//         }
//     }, 2000);
// });
// promise.then(data => {
//     console.log(data);   
// }).catch(error => {
//     console.error(error);
// });
//
//fetch google homepage
//fetch data from data api
//fetch pictures from server
//print downloading
let p=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetched successfully!");
    }, 2000);
});
console.log("Downloading...");
p.then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
});
//promise chaining
function fetchData(url) {   
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "Data fetched from " + url };
            resolve(data);
        }, 2000);
    });
}
fetchData("https://api.example.com/data")
    .then(data => {
        console.log(data.message);  
        return fetchData("https://api.example.com/other-data");
    })
    .then(otherData => {
        console.log(otherData.message);
    })
    .catch(error => {
        console.error("Error fetching data: ", error);
    });

let p1=new Promise((resolve, reject) => {
    console.log("Promise 1 pending...");
    setTimeout(() => {
        console.log("Promise 1 resolved");
        resolve("Promise 1 resolved");
    }, 2000);
});
let p2=new Promise((resolve, reject) => {
    console.log("Promise 2 pending...");
    setTimeout(() => {
        console.log("Promise 2 rejected");
        reject(new Error("Promise 2 rejected"));
    }, 3000);
});
p1.then((value)=>{
    console.log(value);
}).catch(error=>{
    console.log(error);
});
// p2.catch((error)=>{
//     console.log(error);
// });
p2.then((value)=>{
    console.log(value);
},(error)=>{
    console.log(error);
});
//Promise.all
Promise.all([p1, p2])
    .then(values => {
        console.log("All promises resolved: ", values);
    })
    .catch(error => {
        console.error("One or more promises rejected: ", error);
    });
