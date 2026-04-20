try {
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    console.log("Something went wrong:", error.message);
}
function registerUser(email) {
    if (!email.includes("@")) {
        throw new Error("Invalid email format");
    }

    return "User registered";
}

try {
    console.log(registerUser("testgmail.com"));
} catch (error) {
    console.log(error.message);
}
async function fetchData() {
    try {
        const response = await fetch("wrong-url");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Fetch failed:", error.message);
    }
}
fetchData();
//finally
function processData(data) {
    try {
        if (!data) {
            throw new Error("No data provided");
        }
        console.log("Processing data: ", data);
    } catch (error) {
        console.log("Error processing data: ", error.message);
    } finally {
        console.log("Data processing complete.");
    }
}
processData("Sample data");
processData(null);