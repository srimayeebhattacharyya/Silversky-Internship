function fetchUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: 1, name: "Alice" });
        }, 2000);
    });
}
/**
 * explanation of code line by line:
 * 1. We define a function `fetchUser` that returns a Promise. This Promise simulates an asynchronous operation (like fetching data from a server) by using `setTimeout`.
 * 2. Inside the `setTimeout`, after a delay of 2000 milliseconds (2 seconds), we resolve the Promise with a user object containing an `id` and a `name`.
 */
async function loadUser() {
    console.log("Loading...");

    const user = await fetchUser();

    console.log("User loaded:", user);
}

loadUser();
