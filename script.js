const player = document.getElementById("player");
const play_button = document.getElementById("play");
const random_button = document.getElementById("random");
const previous_button = document.getElementById("previous");
const next_button = document.getElementById("next");
const volume = document.getElementsByClassName("volume_level");
const volume_parent = document.getElementById("volume");
const mute = document.getElementById("mute");
const container = document.getElementById("container");
const controller = document.getElementById("controller");
var _counter = null;
var _volume = 1;
controller.addEventListener("mouseover", function() {
    volume_parent.style.filter = "opacity(100%)";
    play_button.style.filter = "opacity(100%)";
    random_button.style.filter = "opacity(100%)";
    previous_button.style.filter = "opacity(100%)";
    next_button.style.filter = "opacity(100%)";
    mute.style.filter = "opacity(100%)";
});
window.addEventListener("load", (event) => {
    let rand_num = Math.floor(Math.random() * 498);
    let rand_gif = Math.floor(Math.random() * 23);
    _counter = rand_num;
    player.src = "Songs/Lofi_" + _counter + ".mp3";
    container.style.backgroundImage = `url("Gif/Gif_${rand_gif}.gif")`;
});
var timeout;
addEventListener("mousemove", function(){
        volume_parent.style.filter = "opacity(100%)";
        play_button.style.filter = "opacity(100%)";
        random_button.style.filter = "opacity(100%)";
        previous_button.style.filter = "opacity(100%)";
        next_button.style.filter = "opacity(100%)";
        mute.style.filter = "opacity(100%)";
    clearTimeout(timeout);
    timeout = setTimeout(function(){
        volume_parent.style.filter = "opacity(0%)";
        play_button.style.filter = "opacity(0%)";
        random_button.style.filter = "opacity(0%)";
        previous_button.style.filter = "opacity(0%)";
        next_button.style.filter = "opacity(0%)";
        mute.style.filter = "opacity(0%)";
    }, 5000);
});
addEventListener("keydown", (event) => {
    volume_parent.style.filter = "opacity(100%)";
    play_button.style.filter = "opacity(100%)";
    random_button.style.filter = "opacity(100%)";
    previous_button.style.filter = "opacity(100%)";
    next_button.style.filter = "opacity(100%)";
    mute.style.filter = "opacity(100%)";
    clearTimeout(timeout);
    timeout = setTimeout(function(){
        volume_parent.style.filter = "opacity(0%)";
        play_button.style.filter = "opacity(0%)";
        random_button.style.filter = "opacity(0%)";
        previous_button.style.filter = "opacity(0%)";
        next_button.style.filter = "opacity(0%)";
        mute.style.filter = "opacity(0%)";
    }, 5000);
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
    if (event.keyCode === 77) {
        if (player.muted == false) {
            player.muted = true;
            for (let index = 0; index < volume.length; index++) {
                volume.item(index).style.backgroundColor = "#ff6e6e64";
            }
        }
        else {
            player.muted = false;
            for (let i = 0; i <= (_volume * 10) - 1; i++) {
                volume.item(i).style.backgroundColor = "#ff6e6e";
            }
        }
    }
    if (event.keyCode === 37) {
        if (_counter > 0 && !player.paused) {
            _counter--;
            container.style.backgroundImage = `url("Gif/gif_${Math.floor(Math.random() * 25)}.gif")`;
            player.src = "Songs/Lofi_" + _counter + ".mp3";
            player.play();
        }
        else if (_counter == 0 && !player.paused) {
            _counter = 497;
            container.style.backgroundImage = `url("Gif/gif_${Math.floor(Math.random() * 25)}.gif")`;
            player.src = "Songs/Lofi_" + _counter + ".mp3";
            player.play();
        }
    }
    if (event.keyCode === 39) {
        if (_counter < 497 && !player.paused) {
            _counter++;
            container.style.backgroundImage = `url("Gif/gif_${Math.floor(Math.random() * 25)}.gif")`;
            player.src = "Songs/Lofi_" + _counter + ".mp3";
            player.play();
        }
        else if (_counter == 497 && !player.paused) {
            _counter = 0;
            container.style.backgroundImage = `url("Gif/gif_${Math.floor(Math.random() * 25)}.gif")`;
            player.src = "Songs/Lofi_" + _counter + ".mp3";
            player.play();
        }
    }
    if (event.keyCode === 38) {
        player.muted = false;
        if (_volume < 1.0) {
            _volume += 0.1;
            player.volume = _volume.toPrecision(1);
        }
        for (let i = 0; i < _volume.toPrecision(1) * 10; i++) {
            volume.item(i).style.backgroundColor = "#ff6e6e";
        }
        for (let i = _volume.toPrecision(1) * 10; i < volume.length; i++) {
            volume.item(i).style.backgroundColor = "#ff6e6e64";
        } 
    }
    if (event.keyCode === 40) {
        if (_volume >= 0.1) {
            _volume -= 0.1;
            player.muted = false;
            player.volume = _volume.toPrecision(1);
            for (let i = 0; i < _volume.toPrecision(1) * 10; i++) {
                volume.item(i).style.backgroundColor = "#ff6e6e";
            }
            for (let i = _volume.toPrecision(1) * 10; i < volume.length; i++) {
                volume.item(i).style.backgroundColor = "#ff6e6e64";
            }   
        }
    }
    if (event.keyCode === 82) {
        container.style.backgroundImage = `url("Gif/gif_${Math.floor(Math.random() * 25)}.gif")`;
        _counter = Math.floor(Math.random() * 498);
        player.src = "Songs/Lofi_" + _counter + ".mp3";
        play_button.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        play_button.style.animationIterationCount = "0";
        player.play();
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
    container.style.backgroundImage = `url("Gif/gif_${Math.floor(Math.random() * 24)}.gif")`;
    if (_counter > 0 && !player.paused) {
        _counter--;
        player.src = "Songs/Lofi_" + _counter + ".mp3";
        player.play();
    }
    else if (_counter == 0 && !player.paused) {
        _counter = 497;
        player.src = "Songs/Lofi_" + _counter + ".mp3";
        player.play();
    }
});
next_button.addEventListener("click", function() {
    if (_counter < 497 && !player.paused) {
        _counter++;
        container.style.backgroundImage = `url("Gif/gif_${Math.floor(Math.random() * 25)}.gif")`;
        player.src = "Songs/Lofi_" + _counter + ".mp3";
        player.play();
    }
    else if (_counter == 497 && !player.paused) {
        _counter = 0;
        container.style.backgroundImage = `url("Gif/gif_${Math.floor(Math.random() * 25)}.gif")`;
        player.src = "Songs/Lofi_" + _counter + ".mp3";
        player.play();
    }
});
for (let index = 0; index < volume.length; index++) {
    volume.item(index).addEventListener("mouseup", function() {
        player.muted = false;
        _volume = (index + 1) / 10;
        player.volume = _volume;
        for (let i = 0; i <= index; i++) {
            volume.item(i).style.backgroundColor = "#ff6e6e";
        }
        for (let i = index + 1; i < volume.length; i++) {
            volume.item(i).style.backgroundColor = "#ff6e6e64";
        }
    });
}
mute.addEventListener("click", function(){
    if (player.muted == false) {
        player.muted = true;
        for (let index = 0; index < volume.length; index++) {
            volume.item(index).style.backgroundColor = "#ff6e6e64";
        }
    }
    else {
        player.muted = false;
        for (let i = 0; i < (_volume * 10) - 1; i++) {
            volume.item(i).style.backgroundColor = "#ff6e6e";
        }
    }
});
random_button.addEventListener("click", function() {
    container.style.backgroundImage = `url("Gif/gif_${Math.floor(Math.random() * 25)}.gif")`;
    _counter = Math.floor(Math.random() * 498);
    player.src = "Songs/Lofi_" + _counter + ".mp3";
    play_button.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    play_button.style.animationIterationCount = "0";
    player.play();
});
player.addEventListener("ended", function() {
    if (_counter < 497) {
        _counter++;
        container.style.backgroundImage = `url("Gif/gif_${Math.floor(Math.random() * 25)}.gif")`;
        player.src = "Songs/Lofi_" + _counter + ".mp3";
        player.play();
    }
    else if (_counter == 497) {
        _counter = 0;
        container.style.backgroundImage = `url("Gif/gif_${Math.floor(Math.random() * 25)}.gif")`;
        player.src = "Songs/Lofi_" + _counter + ".mp3";
        player.play();
    }
});
