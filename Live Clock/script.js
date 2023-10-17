function updateClock() {
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");

    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toDateString();

    timeElement.textContent = time;
    dateElement.textContent = date;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
