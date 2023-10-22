document.addEventListener("DOMContentLoaded", function () {
    const entryTextarea = document.getElementById("entry");
    const saveButton = document.getElementById("save");
    const entriesDiv = document.getElementById("entries");

    // Load existing diary entries from local storage
    const savedEntries = JSON.parse(localStorage.getItem("diaryEntries")) || [];

    // Display existing diary entries
    function displayEntries() {
        entriesDiv.innerHTML = "";

        savedEntries.forEach((entry, index) => {
            const entryDiv = document.createElement("div");
            entryDiv.classList.add("entry-item");
            entryDiv.innerHTML = `
                <p>${entry}</p>
                <button onclick="deleteEntry(${index})">Delete</button>
                <button onclick="editEntry(${index})">Edit</button>
            `;
            entriesDiv.appendChild(entryDiv);
        });
    }

    // Save a new diary entry
    saveButton.addEventListener("click", function () {
        const newEntry = entryTextarea.value;
        if (newEntry.trim() !== "") {
            savedEntries.push(newEntry);
            localStorage.setItem("diaryEntries", JSON.stringify(savedEntries));
            entryTextarea.value = "";
            displayEntries();
        }
    });

    // Delete a diary entry
    window.deleteEntry = function (index) {
        savedEntries.splice(index, 1);
        localStorage.setItem("diaryEntries", JSON.stringify(savedEntries));
        displayEntries();
    };

    // Edit a diary entry
    window.editEntry = function (index) {
        const editedEntry = prompt("Edit your entry:", savedEntries[index]);
        if (editedEntry !== null) {
            savedEntries[index] = editedEntry;
            localStorage.setItem("diaryEntries", JSON.stringify(savedEntries));
            displayEntries();
        }
    };

    // Initial display of diary entries
    displayEntries();
});
