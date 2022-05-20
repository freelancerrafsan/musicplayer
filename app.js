const music = document.getElementById("music");
const play = document.getElementById("play");
const forward = document.getElementById("forward");
const backward = document.getElementById("backward");
const image = document.getElementById("image");
const songName = document.getElementById("songName");
const singerName = document.getElementById("singerName");
const MusicCount = document.getElementById("MusicCount");
const totelSong = document.getElementById("totelSong");

let isMusic = 0;
let isPlay = false;


play.addEventListener("click",()=>{
    if(isPlay == false){
        play.classList.replace("fa-play","fa-pause")
        music.play();
        isPlay = true;
    }else{
        play.classList.replace("fa-pause","fa-play")
        music.pause();
        isPlay = false;
    }
})

let dataLode = [
    {
        song_name : "ChrisLater-&-DanyYeager",
        songer : "Taiba Islam",
        profile :  "music.jpg"
    },
    {
        song_name : "iche-gulo",
        songer : "Taiba Islam",
        profile :  "music2.jpg"
    },
    {
        song_name : "khola-janala",
        songer : "Taiba Islam",
        profile :  "music3.jpg"
    },
    {
        song_name : "OBLVYN-x-RIELL",
        songer : "Taiba Islam",
        profile :  "music4.jpg"
    },
    {
        song_name : "Obosthan-Lyrics",
        songer : "Taiba Islam",
        profile :  "music5.jpg"
    },
    {
        song_name : "valobasi-bole-dew",
        songer : "Taiba Islam",
        profile :  "music1.jpg"
    },
]
function lodeSong(event) {
    music.src = "music/"+event.song_name+".mp3";
    image.src = "img/"+event.profile;
    songName.innerText = event.song_name;
    singerName.innerText = event.songer;
}
lodeSong(dataLode[0]);
totelSong.innerHTML = dataLode.length;

const forwardFun = () => {
    isMusic++;
    if(isMusic >= dataLode.length){
        isMusic = 0;
    }
    lodeSong(dataLode[isMusic]);
    MusicCount.innerText = isMusic;
    music.play();
    isPlay = true;
    play.classList.replace("fa-play","fa-pause");
    
}

const backwardFun = () => {
    if(isMusic > 0){
        isMusic--;
        lodeSong(dataLode[isMusic]);
        MusicCount.innerText = isMusic;
        music.play();
        isPlay = true;
        play.classList.replace("fa-play","fa-pause");       
    }
}

forward.addEventListener("click",forwardFun);
backward.addEventListener("click",backwardFun);

const totelTime = document.querySelector(".totelTime");
const upDateTime = document.querySelector(".upDateTime");
const upDateBar = document.getElementById("upDateBar");

music.addEventListener('timeupdate',(event)=>{
    
    const {duration , currentTime} = music;
    upDateBar.style.width = currentTime / duration * 100+"%";


    let minUpTime = Math.floor(currentTime / 60);
    let secUpTime = Math.floor(currentTime % 60);
    upDateTime.innerText = `${minUpTime}:${secUpTime}`;
    if(secUpTime <= 9){
        upDateTime.innerText = `${minUpTime}:0${secUpTime}`;
    }

    let minTime = Math.floor(duration/60);
    let secTime = Math.floor(duration % 60);
   
    if(duration){
        totelTime.innerText = `${minTime}:${secTime}`;
    }

    if(secTime <= 9){
        totelTime.innerText = `${minTime}:0${secTime}`;
    }

    music.addEventListener('ended',forwardFun);
    
})

const progressBar = document.querySelector(".progressBar");
progressBar.addEventListener('click', (event) =>{
    const duration = music.duration; 
    let offsetX = event.offsetX;
    let clientWidth = event.srcElement.clientWidth;
    const moveProgres = (offsetX / clientWidth ) * duration; 
    music.currentTime = moveProgres;
    music.play();
    isPlay = true;
    play.classList.replace("fa-play","fa-pause");
})


const soundIcons = document.querySelector(".soundIcons");

let isVolime = true;
soundIcons.addEventListener('click',()=>{
    if(isVolime == true){
        music.volume = 0;
        isVolime = false;
        soundIcons.classList.replace("fa-volume-up","fa-volume-mute");
    }else{
        music.volume = 1;
        isVolime = true;
        soundIcons.classList.replace("fa-volume-mute","fa-volume-up");
    }
    
})
const soundBg = document.getElementById("soundBg");
const sound = document.getElementById("sound");

const soundBgFun = (event) => {
    let offsetX = event.offsetX;
    let clientWidth = event.srcElement.clientWidth;
    const clickProgres =Math.floor( (offsetX / clientWidth ) * 100);
    console.log(clickProgres);
    
    sound.style.width = clickProgres+"%";
    music.volume = `0.${clickProgres}`;
    
}
soundBg.addEventListener('click',soundBgFun);

const autoPlay = document.getElementById("autoPlay");

let isloop = false;
autoPlay.addEventListener("click",()=>{

    if(isloop == false){
        music.loop = true;
        autoPlay.style.background = "#ff793f";
        isloop = true;
    }else{
        music.loop = false;
        autoPlay.style.background = "#40407a";
        isloop = false;
    }
    
})