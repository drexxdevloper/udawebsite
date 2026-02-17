const enterScreen = document.getElementById("enterScreen");
const main = document.getElementById("main");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicControl");
const dropdown = document.getElementById("dropdownMenu");
const toggle = document.getElementById("menuToggle");

/* SHOW ENTER */
setTimeout(()=>{
enterScreen.classList.remove("hidden");
},2000);

/* ENTER SITE */
enterScreen.onclick=()=>{
enterScreen.style.display="none";
main.classList.remove("hidden");
music.play();
};

/* MUSIC */
let playing=true;
musicBtn.onclick=()=>{
if(playing){
music.pause();
musicBtn.innerText="▶ PLAY MUSIC";
}else{
music.play();
musicBtn.innerText="⏸ STOP MUSIC";
}
playing=!playing;
};

/* MENU TOGGLE */
toggle.onclick=()=>{
dropdown.style.display =
dropdown.style.display==="flex"?"none":"flex";
};

/* CLOSE IF CLICK OUTSIDE */
document.addEventListener("click",(e)=>{
if(!toggle.contains(e.target)&&!dropdown.contains(e.target)){
dropdown.style.display="none";
}
});

/* SHOW SECTION WITH ANIMATION */
function showSection(id){
document.querySelectorAll(".section").forEach(sec=>{
sec.classList.add("hidden");
sec.classList.remove("show");
});

const active=document.getElementById(id);
active.classList.remove("hidden");

setTimeout(()=>active.classList.add("show"),50);
}

/* CLICK EFFECT */
document.querySelectorAll("p,#menuToggle,#musicControl")
.forEach(btn=>{
btn.addEventListener("click",()=>{
btn.classList.add("click-anim");
setTimeout(()=>btn.classList.remove("click-anim"),250);
});
});
