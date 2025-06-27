// script.js
function updateClock() {
    // Get the current time
    const now = new Date();
    let hours = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;
    // Pad minutes and seconds with leading zeros
    hours = hours < 10 ? '0' + hours : hours;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;
// Display the time in HH:MM:SS AM/PM format
    const timeString = `${hours}:${min}:${sec} ${ampm}`;
    document.getElementById('clock').innerText = timeString;

    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, dateOptions);
    document.getElementById('date').innerText = dateString;
}

// Dark/Light Mode Toggle
document.getElementById('toggleMode').addEventListener('click', () => {
    const body = document.body;
    body.classList.toggle('light');
    body.classList.toggle('dark');
    const mode = body.classList.contains('light') ? 'Dark' : 'Light';
    document.getElementById('toggleMode').innerText = `Switch to ${mode} Mode`;
});

// Update the clock every second
setInterval(updateClock, 1000);

// Call the function once to initialize the clock immediately
updateClock();
