// Function to display current date and time in New Zealand
function displayNZTime() {
    // Get the current date and time in New Zealand timezone
    const options = {
        timeZone: 'Pacific/Auckland', // New Zealand Time Zone
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    };

    const nzDateTime = new Intl.DateTimeFormat('en-NZ', options).format(new Date());

    // Display the date and time in the span with id 'timeDisplay'
    document.getElementById('timeDisplay').innerHTML = nzDateTime;
}

// Call the function once to display the date and time when the page loads
displayNZTime();

// Update the time every second
setInterval(displayNZTime, 1000);
