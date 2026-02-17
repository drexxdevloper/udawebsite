document.addEventListener("DOMContentLoaded", function(){

const fill = document.querySelector(".fill");
const loading = document.getElementById("loading");
const enterText = document.getElementById("enterText");
const main = document.getElementById("main");
const music = document.getElementById("bgMusic");
const musicBox = document.getElementById("musicBox");
const toggle = document.getElementById("menuToggle");
const dropdown = document.getElementById("dropdownMenu");

/* LOADING */
let percent = 0;

function loadingAnim(){
percent++;
fill.style.width = percent + "%";

if(percent < 100){
setTimeout(loadingAnim, 25);
}else{
enterText.style.display = "block";
}
}

loadingAnim();

/* ENTER */
document.addEventListener("click", function start(){
if(percent < 100) return;

loading.style.display="none";
main.classList.remove("hidden");

setTimeout(()=> main.classList.add("show"),50);

music.play().catch(()=>{});
document.removeEventListener("click", start);
});

/* MUSIC */
let playing = true;
musicBox.addEventListener("click", ()=>{
if(playing){
music.pause();
musicBox.innerText="▶ MUSIC";
}else{
music.play().catch(()=>{});
musicBox.innerText="⏸ MUSIC";
}
playing = !playing;
});

/* MENU */
toggle.addEventListener("click", ()=>{
dropdown.style.display =
dropdown.style.display==="flex" ? "none" : "flex";
});

/* SECTION */
window.showSection = function(id){
document.querySelectorAll(".section")
.forEach(s=>s.classList.remove("show"));
document.getElementById(id).classList.add("show");
dropdown.style.display="none";
};

});
