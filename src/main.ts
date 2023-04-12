"use strict";

class Popup {
  private btnElement: Element | null;

  constructor(classOrIdName: string) {
    this.btnElement = document.querySelector(classOrIdName);
  }

  clickTurnOnPopupBtn() {
    this.btnElement?.addEventListener("click", () => {
      this.changeContents();
    });
  }

  clickTurnOffPopupBtn() {
    this.btnElement?.addEventListener("click", () => {
      this.turnOffPopup();
    });
  }

  turnOnPopup() {
    const popupBackground = document.querySelector(".popup__background");
    popupBackground?.classList.remove("display_none");
  }

  turnOffPopup() {
    const popupBackground = document.querySelector(".popup__background");
    popupBackground?.classList.add("display_none");
  }

  changeContents() {
    const inputLabel = document.querySelector("#input_label");
    const secondInput = document.querySelector(".popup__url__title");
    const parentPopupInput = document.querySelectorAll(".popup__input")[1];
    const textArea = document.createElement("textarea");
    const inputElement = document.createElement("input");

    if (this.btnElement?.id === "note_btn" || "task_btn") {
      if (inputLabel && secondInput) {
        console.log("id", this.btnElement?.id);
        console.log("note&task");

        inputLabel.innerHTML = "";
        inputLabel.innerHTML += "Body <br/>";
        parentPopupInput.replaceChild(textArea, secondInput);
        secondInput.setAttribute("class", "popup__url__title");
      }
    } else if (this.btnElement?.id === "img_btn" || "video_btn") {
      if (inputLabel && secondInput) {
        console.log("id", this.btnElement?.id);
        console.log("image&video");

        inputLabel.innerHTML = "";
        inputLabel.innerHTML += "URL <br/>";
        parentPopupInput.replaceChild(inputElement, secondInput);
        secondInput.setAttribute("class", "popup__url__title");
      }
    }

    this.turnOnPopup();
  }
}

const imgPopup = new Popup("#img_btn");
const videoPopup = new Popup("#video_btn");
const notePopup = new Popup("#note_btn");
const taskPopup = new Popup("#task_btn");
const popupCloseBtn = new Popup(".popup__close__btn");

imgPopup.clickTurnOnPopupBtn();
videoPopup.clickTurnOnPopupBtn();
notePopup.clickTurnOnPopupBtn();
taskPopup.clickTurnOnPopupBtn();
popupCloseBtn.clickTurnOffPopupBtn();
