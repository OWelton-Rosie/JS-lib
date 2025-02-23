window.onload = function() {
    const now = new Date();
    const time = now.toLocaleTimeString("en-NZ", { timeZone: "Pacific/Auckland", hour: "2-digit", minute: "2-digit" });
    const date = now.toLocaleDateString("en-NZ", { timeZone: "Pacific/Auckland", year: "numeric", month: "long", day: "numeric" });
    document.getElementById("timeDisplay").innerHTML = `<b>${time}</b>, ${date}`;
};
