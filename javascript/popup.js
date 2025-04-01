const popup = document.getElementById("contactPopup");
const openButton = document.getElementById("openPopup");
const closeButton = document.querySelector(".close");

openButton.onclick = function () {
  popup.style.display = "block";
 }

closeButton.onclick = function () {
  popup.style.display = "none";
}


window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}

