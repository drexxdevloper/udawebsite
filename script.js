document.addEventListener("DOMContentLoaded", function(){

/* AMBIL ELEMENT */
const fill = document.querySelector(".fill");
const loading = document.getElementById("loading");
const enterText = document.getElementById("enterText");
const main = document.getElementById("main");
const music = document.getElementById("bgMusic");
const musicBox = document.getElementById("musicBox");
const toggle = document.getElementById("menuToggle");
const dropdown = document.getElementById("dropdownMenu");

/* CEK BIAR GA ERROR */
if(!fill) return;

/* LOADING PROGRESS */
let percent = 0;

const loadInterval = setInterval(()=>{
    percent += 1;                // kecepatan isi (ubah kalau mau lebih cepat)
    fill.style.width = percent + "%";

    if(percent >= 100){
        clearInterval(loadInterval);
        enterText.style.display = "block";
    }
},30);


/* MASUK KE WEB */
enterText.addEventListener("click", ()=>{
    loading.style.display = "none";
    main.classList.remove("hidden");

    // autoplay music setelah user klik (biar tidak diblok browser)
    if(music){
        music.play().catch(()=>{});
    }
});


/* MUSIC CONTROL */
let playing = true;

if(musicBox){
    musicBox.addEventListener("click", ()=>{
        if(!music) return;

        if(playing){
            music.pause();
            musicBox.innerText = "▶ MUSIC";
        }else{
            music.play().catch(()=>{});
            musicBox.innerText = "⏸ MUSIC";
        }

        playing = !playing;
    });
}


/* MENU TOGGLE */
if(toggle){
    toggle.addEventListener("click", ()=>{
        dropdown.style.display =
        dropdown.style.display === "flex" ? "none" : "flex";
    });
}


/* SHOW SECTION */
window.showSection = function(id){
    document.querySelectorAll(".section")
    .forEach(sec=>sec.classList.remove("show"));

    const active = document.getElementById(id);
    if(active) active.classList.add("show");
};

});
