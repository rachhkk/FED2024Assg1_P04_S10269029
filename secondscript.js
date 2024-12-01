function startCountdown(eventId, eventDate) {
    var eventDate = new Date(eventDate).getTime();
    var timerElement = document.getElementById(eventId);

    var interval = setInterval(function() {
        var now = new Date().getTime();
        var timeLeft = eventDate - now;
        
        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        timerElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (timeLeft < 0) {
            clearInterval(interval);
            timerElement.innerHTML = "Event Started!";
        }
    }, 1000);
}

window.onload = function() {
    startCountdown('timer1', 'Jan 25, 2025 19:00:00');
    startCountdown('timer2', 'Dec 5, 2024 18:00:00');
    startCountdown('timer3', 'Dec 31, 2024 23:59:59');
};
