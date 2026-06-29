// Wedding date
const wedding = new Date("2028-08-24T00:00:00");

function updateDays() {

    const now = new Date();

    const difference = wedding - now;

    const days = Math.max(
        0,
        Math.ceil(difference / (1000 * 60 * 60 * 24))
    );

    document.getElementById("days").textContent = days;

}

// Run immediately
updateDays();

// Update every hour
setInterval(updateDays, 3600000);