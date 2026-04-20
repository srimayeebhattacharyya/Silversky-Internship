function validateLogin(email, password) {
    email = email.trim().toLowerCase();
    if (!email.includes("@") || !email.includes(".")) {
        return { success: false, message: "Invalid email format" };
    }
    if (password.length < 8) {
        return { success: false, message: "Password must be at least 8 characters" };
    }
    if (!/[A-Z]/.test(password)) {
        return { success: false, message: "Password must contain at least one uppercase letter" };
    }
    if (!/[a-z]/.test(password)) {
        return { success: false, message: "Password must contain at least one lowercase letter" };
    }
    if (!/[0-9]/.test(password)) {
        return { success: false, message: "Password must contain at least one number" };
    }
    return { success: true, message: "Login validated successfully" };
}
console.log(validateLogin("user@example.com", "Password123"));