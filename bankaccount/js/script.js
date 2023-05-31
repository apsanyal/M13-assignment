// Get the button elements by their IDs
const nameButton = document.getElementById("Name");
const depositButton = document.getElementById("Deposit");
const withdrawalButton = document.getElementById("Withdrawal");
let nameSubmitted = false; // Variable to track if name is already submitted

// ADDING THE NAME
nameButton.addEventListener("click", function() {
    // Check if a name is already submitted
    if (nameSubmitted) {
        alert("Name already submitted!"); // Display an alert if name is already submitted
    } else {
        // Show a prompt to ask for the user's name
        const name = prompt("Please enter your name:");

        // Check if a name was entered
        if (name) {
            // Create a new row in the table
            const tableBody = document.getElementById("tableBody");
            const newRow = document.createElement("tr");

            // Create the "Name" cell
            const nameCell = document.createElement("td");
            nameCell.textContent = name;
            newRow.appendChild(nameCell);

            // Create the "Balance" cell
            const balanceCell = document.createElement("td");
            balanceCell.textContent = "0"; // Set the initial balance to 0
            newRow.appendChild(balanceCell);

            // Append the new row to the table body
            tableBody.appendChild(newRow);

            nameSubmitted = true; // Mark name as submitted
        }
    }
});

//DEPOSITING MONEY
depositButton.addEventListener("click", function() {
    // Check if a name is already submitted
    if (!nameSubmitted) {
        alert("Please submit a name first!"); // Display an alert if no name is submitted
    } else {
        // Show a prompt to ask for the deposit amount
        const depositAmount = parseFloat(prompt("Please enter the deposit amount:"));

        // Check if a valid deposit amount is entered
        if (!isNaN(depositAmount) && depositAmount > 0) {
            // Get the last row in the table
            const tableBody = document.getElementById("tableBody");
            const lastRow = tableBody.lastElementChild;

            // Get the balance cell of the last row
            const balanceCell = lastRow.lastElementChild;

            // Update the balance by adding the deposit amount
            const currentBalance = parseFloat(balanceCell.textContent);
            const newBalance = currentBalance + depositAmount;
            balanceCell.textContent = newBalance.toFixed(2); 
        } else {
            alert("Invalid deposit amount!"); // Display an alert for an invalid deposit amount
        }
    }
});

//WITHDRAWING MONEY
withdrawalButton.addEventListener("click", function() {
    // Check if a name is already submitted
    if (!nameSubmitted) {
        alert("Please submit a name first!"); // Display an alert if no name is submitted
    } else {
        // Show a prompt to ask for the withdrawal amount
        const withdrawalAmount = parseFloat(prompt("Please enter the withdrawal amount:"));

        // Check if a valid withdrawal amount is entered
        if (!isNaN(withdrawalAmount) && withdrawalAmount > 0) {
            // Get the last row in the table
            const tableBody = document.getElementById("tableBody");
            const lastRow = tableBody.lastElementChild;

            // Get the balance cell of the last row
            const balanceCell = lastRow.lastElementChild;

            // Update the balance by subtracting the withdrawal amount
            const currentBalance = parseFloat(balanceCell.textContent);
            const newBalance = currentBalance - withdrawalAmount;

            // Check if the resulting balance is negative
            if (newBalance >= 0) {
                balanceCell.textContent = newBalance.toFixed(2); 
            } else {
                alert("Insufficient balance!"); // Display an alert for insufficient balance
            }
        } else {
            alert("Invalid withdrawal amount!"); // Display an alert for an invalid withdrawal amount
        }
    }
});


