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

const scrapbookUnlock = document.getElementById("scrapbook-unlock");
const scrapbook = document.getElementById("scrapbook");

/* =========================
   BOOK OPEN (COVER ONLY)
========================= */
book.addEventListener("click", () => {
    book.classList.add("open");
});

/* =========================
   PASSWORD UNLOCK
========================= */
unlockBtn.addEventListener("click", () => {
    if(passwordInput.value === "JoashManicum"){

        errorMsg.innerText = "";

        // open book animation
        book.classList.add("open");

        setTimeout(() => {

            // hide password screen
            scrapbookUnlock.style.display = "none";

            // show scrapbook
            scrapbook.style.display = "flex";

            // IMPORTANT: reset properly
            currentPage = 0;
            renderPage();

        }, 800);

    } else {
        errorMsg.innerText = "Wrong Password ❤️";
    }
});

/* =========================
   EDIT YOUR DATES HERE
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
   15 UNIQUE PAGES (NO REPEAT IMAGES)
========================= */
const pages = [];

for(let i = 1; i <= 15; i++){
    pages.push({
        img: `pic0${i}.jpg.jpeg`,
        date: dates[i - 1] || ""
    });
}

let currentPage = 0;
let notes = new Array(15).fill("");

/* =========================
   RENDER PAGE
========================= */
function renderPage(){
    photo.src = pages[currentPage].img;
    dateText.innerText = pages[currentPage].date;
    pageNum.innerText = `${currentPage + 1} / 15`;
    noteBox.value = notes[currentPage];
}

/* SAVE NOTES PER PAGE */
noteBox.addEventListener("input", () => {
    notes[currentPage] = noteBox.value;
});

/* NEXT PAGE */
nextBtn.addEventListener("click", () => {
    if(currentPage < 14){
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

/* =========================
   SPARKLES
========================= */
document.addEventListener("click", e => {
    for(let i = 0; i < 10; i++){
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");

        sparkle.style.left = e.pageX + "px";
        sparkle.style.top = e.pageY + "px";

        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 1000);
    }
});
