const book = document.getElementById("book");
const unlockBtn = document.getElementById("unlockBtn");
const passwordInput = document.getElementById("passwordInput");
const errorMsg = document.getElementById("errorMsg");

const photo = document.getElementById("photo");
const pageNum = document.getElementById("pageNum");
const dateText = document.getElementById("dateText");
const noteBox = document.getElementById("noteBox");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

/* OPEN BOOK */
book.addEventListener("click", () => {
    if(!book.classList.contains("open")){
        book.classList.add("open");
    }
});

/* PASSWORD */
unlockBtn.addEventListener("click", () => {
    if(passwordInput.value === "JoashManicum"){
        alert("Unlocked ❤️ Enjoy your scrapbook");
    } else {
        errorMsg.innerText = "Wrong Password ❤️";
    }
});

/* DATES */
const dates = [
"01 Jan 2025","05 Jan 2025","10 Jan 2025","15 Jan 2025","20 Jan 2025",
"25 Jan 2025","01 Feb 2025","05 Feb 2025","10 Feb 2025","14 Feb 2025",
"20 Feb 2025","25 Feb 2025","01 Mar 2025","05 Mar 2025","10 Mar 2025"
];

/* BUILD 30 PAGES FROM 15 IMAGES */
const pages = [];

for(let i=1;i<=30;i++){
    let imgNum = i <= 15 ? i : i-15;

    pages.push({
        img:`pic0${imgNum}.jpg.jpeg`,
        date:dates[(i-1)%dates.length]
    });
}

let currentPage = 0;

/* SAVE NOTES PER PAGE */
let notes = new Array(30).fill("");

function renderPage(){

    photo.src = pages[currentPage].img;
    dateText.innerText = pages[currentPage].date;
    pageNum.innerText = `${currentPage+1} / 30`;

    noteBox.value = notes[currentPage];
}

/* SAVE TEXT WHILE TYPING */
noteBox.addEventListener("input", () => {
    notes[currentPage] = noteBox.value;
});

/* NEXT PAGE */
nextBtn.addEventListener("click", () => {
    if(currentPage < 29){
        currentPage++;
        renderPage();
    }
});

/* PREV PAGE */
prevBtn.addEventListener("click", () => {
    if(currentPage > 0){
        currentPage--;
        renderPage();
    }
});

/* INIT */
renderPage();

/* SPARKLES */
document.addEventListener("click", e => {
    for(let i=0;i<10;i++){
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");

        sparkle.style.left = e.pageX + "px";
        sparkle.style.top = e.pageY + "px";

        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 1000);
    }
});
