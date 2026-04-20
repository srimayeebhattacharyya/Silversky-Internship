function loadscript(src,callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload=function(){
        console.log("Script loaded with src: "+src);
        callback();
    }
    document.body.appendChild(script);
}
function hello(){
    alert('Hello');
}
loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js",hello);
//Callback hell or pyramid doom example
function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = function() {
        console.log("Script loaded: " + src);
        callback();
    }
    document.body.appendChild(script);
}

loadScript("script1.js", function() {
    loadScript("script2.js", function() {
        loadScript("script3.js", function() {
            loadScript("script4.js", function() {
                console.log("All scripts loaded!");
            });
        });
    });
});
//script1.js, script2.js, and script3.js are dummy scripts to demonstrate callback hell.
//Real world example of callback
function fetchData(url, callback) {
    setTimeout(() => {
        const data = { message: "Data fetched from " + url };
        callback(data);
    }, 2000);
}
fetchData("https://api.example.com/data", function(data) {
    console.log(data.message);
});
//promises and async/await can be used to avoid callback hell and make code more readable.
//promises
function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "Data fetched from " + url };
            resolve(data);
        }, 2000);
    });
}
//promise syntax
// fetchData("https://api.example.com/data")
//     .then(data => {
//         console.log(data.message);
//     })
//     .catch(error => {
//         console.error("Error fetching data: ", error);
//     });
fetchData("https://api.example.com/data")
    .then(data => {
        console.log(data.message);
    })
    .catch(error => {
        console.error("Error fetching data: ", error);
    });     
//async/await
async function fetchData(url) {
    return new Promise((resolve, reject) => {   
        setTimeout(() => {
            const data = { message: "Data fetched from " + url };
            resolve(data);
        }, 2000);
    });
}   