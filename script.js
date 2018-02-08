console.log("ieatass");
var h = 11;
var m = 58;
var s = 01;

$(document).ready(function() {
    buttonClicked();
    countdown();
});

function buttonClicked() {
    $("button").click(function() {
        //do stuff
    })
}

function countdown() {
    $("#txt").text(`${h}:${m}:01`);
    var t = setInterval(forwardOneSecond, 1000);
}

function forwardOneSecond() {
    s += 1;
    if (s == 60) {
        s = 1;
        m += 1;
    }
    $("#txt").text(`${h}:${convertSingleDigitsToDouble(m)}:${convertSingleDigitsToDouble(s)}`);
}

function convertSingleDigitsToDouble(num) {
    if (num < 10) {
        return `0${num}`;
    }
    return num
}
