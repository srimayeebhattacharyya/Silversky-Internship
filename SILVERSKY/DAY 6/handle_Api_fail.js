function fetchData() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5;

        setTimeout(() => {
            if (success) {
                resolve("Data received");
            } else {
                reject("Server error");
            }
        }, 1500);
    });
}

async function getData() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    }
}

getData();
