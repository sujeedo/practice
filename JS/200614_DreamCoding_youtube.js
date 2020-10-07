const moreBtn = document.querySelector(".playerInfo .title .moreBtn");
const title = document.querySelector(".playerInfo .title .moreTitle");

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});