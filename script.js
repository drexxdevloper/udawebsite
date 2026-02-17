document.addEventListener("DOMContentLoaded", function(){

const fill = document.querySelector(".fill");
const loading = document.getElementById("loading");
const enterText = document.getElementById("enterText");
const main = document.getElementById("main");
const music = document.getElementById("bgMusic");
const musicBox = document.getElementById("musicBox");
const toggle = document.getElementById("menuToggle");
const dropdown = document.getElementById("dropdownMenu");

/* ================= LOADING BAR (FIXED) ================= */
let percent = 0;

function animateLoading(){
    percent++;

    fill.style.width = percent + "%";

    if(percent < 100){
        requestAnimationFrame(animateLoading);
    }else{
        enterText.style.display = "block";
    }
}

requestAnimationFrame(animateLoading);

/* ================= MASUK WEBSITE ================= */
enterText.addEventListener("click", ()=>{
loading.style.display="none";

main.classList.remove("hidden");

setTimeout(()=>{
main.classList.add("show");
},50);

music.play().catch(()=>{});
});

/* ================= MUSIC CONTROL ================= */
let playing=true;

musicBox.addEventListener("click", ()=>{
if(playing){
music.pause();
musicBox.innerText="▶ MUSIC";
}else{
music.play().catch(()=>{});
musicBox.innerText="⏸ MUSIC";
}
playing=!playing;
});

/* ================= MENU ================= */
toggle.addEventListener("click", ()=>{
dropdown.style.display =
dropdown.style.display==="flex"?"none":"flex";
});

/* ================= SHOW SECTION ================= */
window.showSection=function(id){
document.querySelectorAll(".section")
.forEach(sec=>sec.classList.remove("show"));

document.getElementById(id).classList.add("show");
};

});
