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
    book.classList.add("open");
});

/* PASSWORD + UNLOCK */
unlockBtn.addEventListener("click", () => {
    if(passwordInput.value === "JoashManicum"){

        errorMsg.innerText = "";
        book.classList.add("open");

        setTimeout(() => {
            document.getElementById("scrapbook-unlock").style.display = "none";
            document.getElementById("scrapbook").style.display = "flex";
        }, 800);

    } else {
        errorMsg.innerText = "Wrong Password ❤️";
    }
});

/* =========================
   EDIT YOUR DATES HERE
   (THIS IS WHAT YOU CAN CHANGE ANYTIME)
========================= */

const dates = [
"01 Jan 2025",
"05 Jan 2025",
"10 Jan 2025",
"15 Jan 2025",
"20 Jan 2025",
"25 Jan 2025",
"01 Feb 2025",
"05 Feb 2025",
"10 Feb 2025",
"14 Feb 2025",
"20 Feb 2025",
"25 Feb 2025",
"01 Mar 2025",
"05 Mar 2025",
"10 Mar 2025"
];

/* =========================
   15 UNIQUE PAGES ONLY
   (NO REPEATS)
========================= */

const pages = [];

for(let i=1;i<=15;i++){
    pages.push({
        img:`pic0${i}.jpg.jpeg`,
        date:dates[i-1] || ""
    });
}

let currentPage = 0;
let notes = new Array(15).fill("");

/* RENDER PAGE */
function renderPage(){
    photo.src = pages[currentPage].img;
    dateText.innerText = pages[currentPage].date;
    pageNum.innerText = `${currentPage+1} / 15`;
    noteBox.value = notes[currentPage];
}

/* SAVE TEXT PER PAGE */
noteBox.addEventListener("input", () => {
    notes[currentPage] = noteBox.value;
});

/* NEXT */
nextBtn.addEventListener("click", () => {
    if(currentPage < 14){
        currentPage++;
        renderPage();
    }
});

/* PREV */
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
