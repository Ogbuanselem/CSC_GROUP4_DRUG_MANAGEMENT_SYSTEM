// Array to store logs
let logs = [];

// Function to add a log entry
function addLog(message) {
    const timestamp = new Date().toLocaleString();
    logs.push(`[${timestamp}] ${message}`);

    // Update log content on the page
    updateLogPage();
}

// Function to update the log page content
function updateLogPage() {
    const logContent = document.getElementById("log-content");
    logContent.innerHTML = ""; // Clear existing logs

    if (logs.length === 0) {
        logContent.innerHTML = "<p>No logs yet.</p>";
    } else {
        const ul = document.createElement("ul");
        logs.forEach(log => {
            const li = document.createElement("li");
            li.textContent = log;
            ul.appendChild(li);
        });
        logContent.appendChild(ul);
    }
}

// Add logs when actions like adding, editing, or deleting drugs occur
function logAddDrug() {
    addLog("Drug added to the inventory.");
}

function logEditDrug() {
    addLog("Drug details updated.");
}

function logDeleteDrug() {
    addLog("Drug deleted from the inventory.");
}
