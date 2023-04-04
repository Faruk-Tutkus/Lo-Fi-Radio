const player = document.getElementById("player");
const play_button = document.getElementById("play");
const random_button = document.getElementById("random");
const previous_button = document.getElementById("previous");
const next_button = document.getElementById("next");
const volume = document.getElementsByClassName("volume_level");
const volume_parent = document.getElementById("volume");
const mute = document.getElementById("mute");
var _counter = null;
var _volume = 1;
var _mute = false;
window.addEventListener("load", (event) => {
    let rand_num = Math.floor(Math.random() * 500);
    _counter = rand_num;
    player.src = "Songs/Lofi_" + rand_num + ".mp3";
});
addEventListener("keydown", (event) => {
    if (event.keyCode === 32) {
        if (player.paused) {
            play_button.innerHTML = `<i class="fa-solid fa-pause"></i>`;
            play_button.style.animationIterationCount = "0";
            player.play();
        }
        else{
            play_button.innerHTML = `<i class="fa-solid fa-play"></i>`;
            play_button.style.animationIterationCount = "infinite";
            player.pause();
        }
    }
    if (event.keyCode === 109 || event.keyCode === 77) {
        if (!_mute) {
            player.volume = 0.0;
            for (let index = 0; index < volume.length; index++) {
                volume.item(index).style.backgroundColor = "#ba5b5b";
            }
            _mute = true;
        }
        else if (_mute) {
            player.volume = _volume;
            for (let i = 0; i < (_volume * 10); i++) {
                volume.item(i).style.backgroundColor = "#ff6e6e";
            }
            _mute = false;
        }
    }
    if (event.keyCode === 37) {
        if (_counter > 0 && !player.paused) {
            _counter--;
            player.src = "Songs/Lofi_" + _counter + ".mp3";
            player.play();
        }
    }
    if (event.keyCode === 39) {
        if (_counter < 499 && !player.paused) {
            _counter++;
            player.src = "Songs/Lofi_" + _counter + ".mp3";
            player.play();
        }
    }
});
play_button.addEventListener("click", function(){
    if (player.paused) {
        play_button.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        play_button.style.animationIterationCount = "0";
        player.play();
    }
    else{
        play_button.innerHTML = `<i class="fa-solid fa-play"></i>`;
        play_button.style.animationIterationCount = "infinite";
        player.pause();
    }
});
previous_button.addEventListener("click", function() {
    if (_counter > 0 && !player.paused) {
        _counter--;
        player.src = "Songs/Lofi_" + _counter + ".mp3";
        player.play();
    }
});
next_button.addEventListener("click", function() {
    if (_counter < 499 && !player.paused) {
        _counter++;
        player.src = "Songs/Lofi_" + _counter + ".mp3";
        player.play();
    }
});
for (let index = 0; index < volume.length; index++) {
    volume.item(index).addEventListener("mouseup", function() {
        _volume = (index + 1) / 10
        player.volume = _volume;
        for (let i = 0; i <= index; i++) {
            volume.item(i).style.backgroundColor = "#ff6e6e";
        }
        for (let i = index + 1; i < volume.length; i++) {
            volume.item(i).style.backgroundColor = "#ba5b5b";
        }
    });
}
mute.addEventListener("click", function(){
    if (!_mute) {
        player.volume = 0.0;
        for (let index = 0; index < volume.length; index++) {
            volume.item(index).style.backgroundColor = "#ba5b5b";
        }
        _mute = true;
    }
    else if (_mute) {
        player.volume = _volume;
        for (let i = 0; i < (_volume * 10); i++) {
            volume.item(i).style.backgroundColor = "#ff6e6e";
        }
        _mute = false;
    }
});