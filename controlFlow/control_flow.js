let userRole = "admin";
let accessLevel;

let isLoggedIn = true;
let userMessage;

let userType = "subscriber";
let userCategory;

let isAuthenticated = false;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

if (isLoggedIn) {
if (userRole === "admin") {
    accessLevel = "Full access granted";
    userMessage = "Welcome, Admin!";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
    userMessage = "Welcome, User!";
} else {
    accessLevel = "No access granted";
}
}
else {
    userMessage = "Please log in to access the system.";
}

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break
    case "subscriber":
        userCategory = "Subscriber";
        break
    default:
        userCategory = "Unknown";
}
console.log("Access Level:", accessLevel);

console.log("User Message:", userMessage);

console.log("User Category:", userCategory);

console.log("Authentication Status:", authenticationStatus);