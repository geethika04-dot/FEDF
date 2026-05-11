// =======================================
// TypeScript-like Interface (for understanding)
// interface User {
//    id: number;
//    name: string;
//    email: string;
// }
// =======================================
// API Layer (Async Programming)
const UserAPI = {
    fetchUsers: async function () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = true;
                if (success) {
                    resolve([
                        { id: 1, name: "Geethika", email: "geethika@gmail.com" },
                        { id: 2, name: "Siri", email: "siri@gmail.com" },
                        { id: 3, name: "Shailu", email: "shailu@gmail.com" },
                        { id: 4, name: "Jhansi", email: "jhansi@gmail.com" },
                        { id: 5, name: "Shravya", email: "shravya@gmail.com" },
                        { id: 6, name: "Bhavitha", email: "bhavitha@gmail.com" },
                        { id: 7, name: "Rishi", email: "rishi@gmail.com" },
                        { id: 8, name: "Aishu", email: "aishu@gmail.com" },
                        { id: 9, name: "Pavani", email: "pavani@gmail.com" },
                        { id: 10, name: "Yamini", email: "yamini@gmail.com" },
                    ]);
                } else {
                    reject("Failed to fetch users");
                }
            }, 2000);
        });
    }
};
// UI Layer
const UI = {
    displayUsers(users) {
        const userList = document.getElementById("userList");
        userList.innerHTML = "";
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `${user.name} - ${user.email}`;
            userList.appendChild(li);
        });
    }
};
// Controller Layer
async function loadUsers() {
    try {
        console.log("Loading users...");
        const users = await UserAPI.fetchUsers();
        UI.displayUsers(users);
        console.log("Users loaded successfully");
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong!");
    }
}
