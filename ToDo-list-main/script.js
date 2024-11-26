function addTask() {
    const inputBox = document.getElementById("input-box");
    const taskTableBody = document.querySelector("#task-table tbody");

    if (inputBox.value === "") {
        alert("You must write something!");
    } else {
        // Create a new row
        const row = document.createElement("tr");

        // Select Column (Checkbox)
        const selectCell = document.createElement("td");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onclick = function () {
            taskCell.classList.toggle("strikethrough");
        };
        selectCell.appendChild(checkbox);
        row.appendChild(selectCell);

        // Task Column
        const taskCell = document.createElement("td");
        taskCell.textContent = inputBox.value;
        row.appendChild(taskCell);

        // Action Column (Delete Button)
        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            row.remove();
        };
        actionCell.appendChild(deleteButton);
        row.appendChild(actionCell);

        // Add row to the table body
        taskTableBody.appendChild(row);

        // Clear input box
        inputBox.value = "";
    }
}
