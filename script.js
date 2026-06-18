const book = document.getElementById("book");
const unlockBtn = document.getElementById("unlockBtn");
const passwordInput = document.getElementById("passwordInput");
const errorMsg = document.getElementById("errorMsg");

/* OPEN BOOK */

book.addEventListener("click", () => {

    if(!book.classList.contains("open")){
        book.classList.add("open");
    }

});

/* PASSWORD */

unlockBtn.addEventListener("click", () => {

    if(passwordInput.value === "JoashManicum"){

        launchScrapbook();

    }else{

        errorMsg.innerText = "Wrong Password ❤️";

    }

});

/* SCRAPBOOK */

function launchScrapbook(){

    document.body.innerHTML = `

    <div id="scrapbook">

        <div id="page">

            <div class="polaroid">

                <img id="memoryImage">

                <h2 id="memoryTitle"></h2>

                <p id="memoryText"></p>

            </div>

        </div>

        <button id="prevBtn">◀</button>
        <button id="nextBtn">▶</button>

    </div>

    `;

    currentPage = 0;

    loadMemory(currentPage);

    document
        .getElementById("nextBtn")
        .addEventListener("click", nextPage);

    document
        .getElementById("prevBtn")
        .addEventListener("click", prevPage);

}

let currentPage = 0;

function loadMemory(index){

    document.getElementById("memoryImage").src =
        memories[index].image;

    document.getElementById("memoryTitle").innerText =
        memories[index].title;

    document.getElementById("memoryText").innerText =
        memories[index].text;

}

function nextPage(){

    if(currentPage < memories.length - 1){

        currentPage++;

        loadMemory(currentPage);

    }else{

        alert(
            "End of Scrapbook ❤️"
        );

    }

}

function prevPage(){

    if(currentPage > 0){

        currentPage--;

        loadMemory(currentPage);

    }

}

/* GOLD SPARKLES */

document.addEventListener("click",(e)=>{

    for(let i=0;i<10;i++){

        const sparkle =
            document.createElement("div");

        sparkle.classList.add("sparkle");

        sparkle.style.left =
            e.pageX + "px";

        sparkle.style.top =
            e.pageY + "px";

        document.body.appendChild(
            sparkle
        );

        setTimeout(()=>{

            sparkle.remove();

        },1000);

    }

});