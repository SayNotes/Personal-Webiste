const dates = new Date();
let birthday = new Date("June 2, 2005");
let age = dates.getFullYear() - birthday.getFullYear();

if (
    dates.getMonth() < birthday.getMonth() ||
    (dates.getMonth() == birthday.getMonth() &&
        dates.getDate() < birthday.getDate())
) {
    age--;
}

document.querySelector("#age").innerHTML = `${age} Years Old`;

// membuat jam

let clockHours = document.getElementById("hours");
let clockMinutes = document.getElementById("minutes");

let clock = {
    jam: dates.getHours(),
    menit: dates.getMinutes(),
    detik: dates.getSeconds(),
};

let timerInterval = setInterval(function () {
    clock.detik++;
    if (clock.detik >= 60) {
        clock.detik = 0;
        clock.menit++;
    } else if (clock.menit >= 60) {
        clock.menit = 0;
        clock.jam++;
    } else if (clock.jam > 24) {
        clock.jam = 0;
    }
    clockHours.textContent = clock.jam.toString();
    clockMinutes.textContent = clock.menit.toString().padStart(2, '0');
    
}, 1000);
