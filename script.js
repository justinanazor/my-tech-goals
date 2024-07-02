function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = days[now.getUTCDay()];

    document.getElementById('time').textContent = utcTime;
    document.getElementById('day').textContent = currentDay;
}

updateTime();
setInterval(updateTime, 1000);
