"use strict";

class Popup {
  private btnElement: Element | null;

  constructor(classOrIdName: string) {
    this.btnElement = document.querySelector(classOrIdName);
  }

  clickTurnOnPopupBtn() {
    this.btnElement?.addEventListener("click", () => {
      this.turnOnPopup();
    });
  }

  clickTurnOffPopupBtn() {
    this.btnElement?.addEventListener("click", () => {
      this.turnOffPopup();
    });
  }

  turnOnPopup() {
    // if (this.btnElement && (this.btnElement.id === "note_btn" || "task_btn")) {
    //   console.log(this.btnElement.id);

    //   this.changeNoteAndTaskContents();
    // }
    const popupBackground = document.querySelector(".popup__background");
    popupBackground?.classList.remove("display_none");
  }

  turnOffPopup() {
    const popupBackground = document.querySelector(".popup__background");
    popupBackground?.classList.add("display_none");
  }

  changeNoteAndTaskContents() {
    const inputLabel = document.querySelector("#input_label");
    const secondInput = document.querySelector(".popup__url__title");
    if (inputLabel && secondInput) {
      inputLabel.innerHTML = "";
      secondInput.remove();
      inputLabel.innerHTML += "Body <br/>";
      secondInput.innerHTML += "<textarea></textarea>";
      secondInput.classList.add("popup__url__title");
    }
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
