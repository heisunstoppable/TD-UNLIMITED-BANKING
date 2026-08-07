// Change these to your own username and password
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
