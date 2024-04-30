//variables for the current date and the start and end date of each season
var currentDate = new Date();
const freshStart = new Date("3/1/2024");
const freshEnd = new Date("5/31/2024");
const sizzleStart = new Date("6/1/2024");
const sizzleEnd = new Date("8/31/2024");
const drizzleStart = new Date("9/1/2024");
const drizzleEnd = new Date("11/30/2024");
const chillStart = new Date("12/1/2024");
const chillEnd = new Date("2/29/2024");
var season = "null";

//if current season is fresh
if (currentDate > freshStart && currentDate < freshEnd){
    season = "Fresh";
    $(document).ready(function(){
        // Set the date we're counting down to
        var countDownDate = new Date("5/31/2024 16:00:00").getTime();
        var startDate = new Date("3/1/2024 16:00:00").getTime();
    
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
    });
}
    //check if sizzle season
    else {
        if (currentDate > sizzleStart && currentDate < sizzleEnd){
            season = "Sizzle";
            $(document).ready(function(){
                // Set the date we're counting down to
                var countDownDate = new Date("Sept 1, 2024 16:00:00").getTime();
                var startDate = new Date("Jun 1, 2024 16:00:00").getTime();
            
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
            });  
        }
            //check if season is drizzle
            else {
                if (currentDate > drizzleStart && currentDate < drizzleEnd){
                    season = "Drizzle";
                    $(document).ready(function(){
                        // Set the date we're counting down to
                        var countDownDate = new Date("Sept 1, 2024 16:00:00").getTime();
                        var startDate = new Date("Nov 30, 2024 16:00:00").getTime();
                    
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
                    });  
                }
                    //check if season is chill
                    else {
                        if (currentDate > chillStart && currentDate < chillEnd){
                            season = "Chill";
                            $(document).ready(function(){
                                // Set the date we're counting down to
                                var countDownDate = new Date("Sept 1, 2024 16:00:00").getTime();
                                var startDate = new Date("Jun 1, 2024 16:00:00").getTime();
                            
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
                            });
                        };

                    };
            };
};

document.getElementById("currentSeason").innerHTML = season + " Season:";
