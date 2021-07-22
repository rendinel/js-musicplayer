//array that contain all our song
const songs = [
    "bensound-anewbeginning.mp3",
    "bensound-creativeminds.mp3",
    "bensound-happyrock.mp3",
    "bensound-jazzyfrenchy.mp3",
    "bensound-littleidea.mp3",
    "bensound-ukulele.mp3"
];

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
// and start play them when we click on it

songList.onclick = function(event){
    const source = document.getElementById('source');
    source.src = "sound/" + event.target.innerText;
    const player = document.getElementById('player');
    player.load();
    player.play();
}