// Define function to calculate remaining time and progress
function calculateTimeAndProgress(countDownDate, startDate) {
    var x = setInterval(function() {
        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distanceWhole = countDownDate - startDate;
        var distanceLeft = countDownDate - now;

        // Time calculations for minutes and percentage progressed
        var days = Math.floor(distanceLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distanceLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distanceLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distanceLeft % (1000 * 60)) / 1000);
        var minutesLeft = Math.floor(distanceLeft / (1000 * 60));
        var minutesTotal = Math.floor(distanceWhole / (1000 * 60));
        var progress = Math.floor(((minutesTotal - minutesLeft) / minutesTotal) * 100);
        $('#progressbar').attr('aria-valuenow', progress).css('width', progress + "%").html(progress + "% Complete");
        document.getElementById("demo").innerHTML = "Time remaining of current season: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }, 100);
}

// Variables for the current date and the start and end date of each season (ignoring the year)
var currentDate = new Date();
var currentMonth = currentDate.getMonth(); // Get current month
var currentDay = currentDate.getDate(); // Get current day of the month
const seasons = [
    { name: "Fresh", startMonth: 2, startDay: 1, endMonth: 4, endDay: 30 }, // March (2) to May (4)
    { name: "Sizzle", startMonth: 5, startDay: 1, endMonth: 7, endDay: 31 }, // June (5) to August (7)
    { name: "Drizzle", startMonth: 8, startDay: 1, endMonth: 10, endDay: 31 }, // September (8) to November (10)
    { name: "Chill", startMonth: 11, startDay: 1, endMonth: 1  , endDay: 31 } // December (11) to February (1)
];
var season = "Unknown";

// Determine if the current year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Adjust the end day for February if it's a leap year
if (isLeapYear(currentDate.getFullYear())) {
    seasons[0].endDay = 29;
}

// Determine the current season
for (const s of seasons) {
    if (
        (currentMonth === s.startMonth && currentDay >= s.startDay) ||
        (currentMonth === s.endMonth && currentDay <= s.endDay) ||
        (currentMonth > s.startMonth && currentMonth < s.endMonth)
    ) {
        season = s.name;
        // Set countdown dates and start date for the current season
        var countDownDate = new Date(currentDate.getFullYear(), s.endMonth, s.endDay).getTime(); // Use current year for countdown
        var startDate = new Date(currentDate.getFullYear(), s.startMonth, s.startDay).getTime(); // Use current year for start date
        // Start calculating time and progress for the current season
        $(document).ready(function(){
            calculateTimeAndProgress(countDownDate, startDate);
        });
        break;
    }
}

// Change the color based on the season
var progressBar = document.getElementById("progressbar");
switch (season) {
    case "Fresh":
        progressBar.style.backgroundColor = "green";
        break;
    case "Sizzle":
        progressBar.style.backgroundColor = "orange";
        break;
    case "Drizzle":
        progressBar.style.backgroundColor = "blue";
        break;
    case "Chill":
        progressBar.style.backgroundColor = "gray";
        break;
    default:
        progressBar.style.backgroundColor = "black";
}

// Display the current season
document.getElementById("currentSeason").innerHTML = season + " Season:";