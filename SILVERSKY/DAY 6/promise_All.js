function fetchUser() {
    return new Promise(resolve =>
        setTimeout(() => resolve("User"), 1000)
    );
}

function fetchOrders() {
    return new Promise(resolve =>
        setTimeout(() => resolve("Orders"), 1500)
    );
}

function fetchProfile() {
    return new Promise(resolve =>
        setTimeout(() => resolve("Profile"), 2000)
    );
}

async function loadDashboard() {
    const [user, orders, profile] = await Promise.all([
        fetchUser(),
        fetchOrders(),
        fetchProfile()
    ]);

    console.log(user, orders, profile);
}

loadDashboard();
