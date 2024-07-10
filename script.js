
// Random BG-Color
document.addEventListener('DOMContentLoaded', () => {
    const colors = ['#6D8DB8', '#000000', '#191919'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});



Copy Discord username to clipboard
function copyToClipboard(text) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Copied Name to Clipboard: ' + text);
}


//B-Day Timer:----------

function timer() {
    var year = new Date().getFullYear().toString();
    var now = new Date();

    if (now > new Date("Sep 24, " + year)) {
        var y = parseInt(year);
        year = (++y).toString(); 
    }

    var countDownDate = new Date("Sep 24, " + year).getTime();
    var nowInMs = new Date().getTime();

    var distance = countDownDate - nowInMs;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + " : " + hours + " : "
        + minutes + " : " + seconds + " ";
}

// Run the timer function every second to update the countdown
setInterval(timer, 1000);


//--------------------------
