//-----------LYD FOR KNAPPER-----------

function buttonSound() {
    var sound = document.getElementById("buttonSound");
    sound.play()
}

function bilde1BuySound() {
    var sound = document.getElementById("bilde1BuySound");
    sound.play()
}

function bilde2BuySound() {
    var sound = document.getElementById("bilde2BuySound");
    sound.play()
}

function bilde3BuySound() {
    var sound = document.getElementById("bilde3BuySound");
    sound.play()
}

function bilde4BuySound() {
    var sound = document.getElementById("bilde4BuySound");
    sound.play()
}

function bilde5BuySound() {
    var sound = document.getElementById("bilde5BuySound");
    sound.play()
}

function upgrade1Rank1BuySound() {
    var sound = document.getElementById("upgrade1Rank1BuySound");
    sound.play()
}

function upgrade2Rank1BuySound() {
    var sound = document.getElementById("upgrade2Rank1BuySound");
    sound.play()
}

function upgrade2Rank2BuySound() {
    var sound = document.getElementById("upgrade2Rank2BuySound");
    sound.play()
}

function upgrade3Rank1BuySound() {
    var sound = document.getElementById("upgrade3Rank1BuySound");
    sound.play()
}

function upgrade4Rank1BuySound() {
    var sound = document.getElementById("upgrade4Rank1BuySound");
    sound.play()
}

//-----mute-------

var audio = document.getElementById('backgroundMusic');

var muteEl = document.getElementById('mute')
muteEl.addEventListener('click', function (e)
{
    e = e || window.event;
    audio.muted = !audio.muted;
    e.preventDefault();
}, false);