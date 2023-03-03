var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var event = isMobile ? 'touchstart' : 'click';
document.addEventListener(event, jump);


var character = document.getElementById("character");
var block = document.getElementById("block");
function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function () {
        character.classList.remove("animate")
    }, 500);
}

var refreshBtn = document.getElementById('refresh-btn');
refreshBtn.addEventListener('click', function () {
    location.reload(); // restart
});

// var refreshBtn = document.getElementById('refresh-btn');

// refreshBtn.addEventListener('touchstart', function() {
//   location.reload(); // restart
// });

// ban scrolling
document.body.addEventListener('touchmove', function (event) {
    event.preventDefault();
}, false);



var checkAhead = setInterval(function () {
    var characterTop =
        parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft =
        parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 280 && blockLeft > 200 && characterTop >= 330) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("Game over! Click「RESTART」to play again!");
    }
}, 10);
