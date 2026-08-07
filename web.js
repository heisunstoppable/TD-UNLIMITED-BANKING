// // Change these to your own username and password
const correctUser = "Margret@td";
const correctPass = "Ivy90@!";

function login() {
    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;


    if (username === correctUser && password === correctPass) {
        window.location.href = "welcome.html";
    } else {
        document.getElementById('result').style.color = 'red';
        document.getElementById('result').innerText = 'Invalid credentials!';
    }
}


setTimeout(() => {
    window.location.href = "index.html"; 
  }, 180000);





const downloadBtn = document.getElementById("downloadBtn");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");
const okBtn = document.getElementById("okBtn");

downloadBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

okBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});




// script for transfer failed

const transferBtn = document.getElementById("transferBtn");
const transferPopup = document.getElementById("transferPopup");
const popupClose = document.querySelector(".popup-close");
const popupOkBtn = document.getElementById("popupOkBtn");

transferBtn.addEventListener("click", () => {
    transferPopup.style.display = "flex";
});

popupClose.addEventListener("click", () => {
    transferPopup.style.display = "none";
});

popupOkBtn.addEventListener("click", () => {
    transferPopup.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === transferPopup) {
        transferPopup.style.display = "none";
    }
});


//script for deposit

const depositBtn = document.getElementById("depositBtn");
const depositPopup = document.getElementById("depositPopup");
const depositClose = document.querySelector(".deposit-close");
const depositOkBtn = document.getElementById("depositOkBtn");

depositBtn.addEventListener("click", () => {
    depositPopup.style.display = "flex";
});

depositClose.addEventListener("click", () => {
    depositPopup.style.display = "none";
});

depositOkBtn.addEventListener("click", () => {
    depositPopup.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === depositPopup) {
        depositPopup.style.display = "none";
    }
});
