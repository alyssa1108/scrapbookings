const book = document.getElementById("book");
const unlockBtn = document.getElementById("unlockBtn");
const passwordInput = document.getElementById("passwordInput");
const errorMsg = document.getElementById("errorMsg");

book.addEventListener("click", () => {
    if(!book.classList.contains("open")){
        book.classList.add("open");
    }
});

unlockBtn.addEventListener("click", () => {
    if(passwordInput.value === "JoashManicum"){
        alert("Password Correct! Next we build the scrapbook pages.");
    } else {
        errorMsg.innerText = "Wrong Password ❤️";
    }
});

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
                 
