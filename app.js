//array that contain all our song
const songs = [
    "bensound-anewbeginning.mp3",
    "bensound-creativeminds.mp3",
    "bensound-happyrock.mp3",
    "bensound-jazzyfrenchy.mp3",
    "bensound-littleidea.mp3",
    "bensound-ukulele.mp3"
];

// we declare the player outside of function so it have global scope and we can access from everywhere
const player = document.getElementById('player');

// first step:we create a function where we create an ol,we cycle all the songs array, inside the cicle
// we create one li for every array element,we pass the array element as text (createtextnode) to the li,
//we put the li inside the ol and return the populated list, outside we pass this function to our ol inside the dom
function createSongList() {
    const list = document.createElement("ol");
    for(let i = 0; i < songs.length; i++) {
    const item = document.createElement('li');
    item.appendChild(document.createTextNode(songs[i]));
    list.appendChild(item);
    }
    return list
}

const songList = document.getElementById('songList');
songList.appendChild(createSongList());

//second step:we create a function that run after clicking on our ul,we set the src dinamically for the source,
// we can grab the innertext of the clicked element with event.target.innerText, then we grab the player and it will preload the song 
// and start play them when we click on it,we also display the song title inside the p element currentsong
const links = document.querySelectorAll('li');
for(const link of links){
    link.addEventListener('click',setSong)
}
function setSong(event){
    document.querySelector('#headphones').classList.remove('pulse');
    const source = document.getElementById('source');
    source.src = "sound/" + event.target.innerText;

    document.querySelector('#currentSong').innerText = `
    Now playing:${event.target.innerText}
    `;

    player.load();
    player.play();
    document.querySelector('#headphones').classList.add('pulse');
}

//third step, we define 2 function to play and pause the song bby clickìng on the corresponding btn
//we declare the onlick inside the html on the corresponding element
function playAudio() {
    //we verify if readystate is true, readystate verify the loading state of the document
    if(player.readyState){
        player.play();
    }
}
//pause function part of the third step
function pauseAudio() {
    player.pause();
}


// fourth step we put the volume inslider inside the cont slider, then we create a function
// that activate slider oninput that take the event as argument , we take the value from
// the slider and set it to be equal to the volume
const slider = document.getElementById('volumeSlider');
slider.oninput = function (e) {
    const volume = e.target.value;
    player.volume = volume;
};

//we set up progress ,we add to audio ontimeupdate is an event which runs when the position of the audio has changed
// we take the progressbar and populate with the current time divide by the duration of the song and multiplied by 100,
// this value need to be a number beetween 0 and 100 because we set min and max from 0 to 100
function updateProgress() {
    if(player.currentTime > 0){
        const progressBar = document.getElementById('progress');
        progressBar.value = (player.currentTime / player.duration) * 100;
    }
}