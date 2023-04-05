"use strict";

function turnOnPopup() {
  const popupBackground = document.querySelector(".popup__background");
  popupBackground?.classList.remove("display_none");
}

function turnOffPopup() {
  const popupBackground = document.querySelector(".popup__background");
  popupBackground?.classList.add("display_none");
}

const imgBtn = document.querySelector("#img_btn");
const closeBtn = document.querySelector(".popup__close__btn");

imgBtn?.addEventListener("click", () => {
  turnOnPopup();
});

closeBtn?.addEventListener("click", () => {
  turnOffPopup();
});
