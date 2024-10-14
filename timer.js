//Timer
function updateTime() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    
    // Get the current hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Add leading zeros to minutes and seconds
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    // Format the time string
    const currentTime = `${hours}:${minutes}:${seconds}`;
    
    // Update the clock element with the current time
    clockElement.textContent = currentTime;
}

// Call updateTime every second
setInterval(updateTime, 1000);

// Call it once to initialize
updateTime();
