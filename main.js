const con = document.querySelector(".container");
const text = document.querySelector("#text");

const time = 7500;
const btime = (time/5)*2; 
const htime = (time/2);


breath()

function breath()
{
    text.innerHTML = "Breath in";
    con.className = "container grow";

    setTimeout(() => {
        text.innerText = "Feel the universe inside you";
        setTimeout(()=>{
        text.innerText = "Breathe Out";
        con.className = "container shrink";
    }, htime)
}, btime)
}

setInterval(breath,9000);