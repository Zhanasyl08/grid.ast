const popup = document.getElementsByClassName("popup");
const openBtn = document.getElementsByClassName("filters__btn");
const closeBtn = document.getElementsById("closeBtn");

openBtn.addEventListener("click", () => popup.classList.add("active"));
closeBtn.addEventListener("click", () => popup.classList.remove("active"));
