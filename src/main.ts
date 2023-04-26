"use strict";

class Popup {
  private btnElement: Element | null;

  constructor(classOrIdName: string) {
    this.btnElement = document.querySelector(classOrIdName);
  }

  clickTurnOnPopupBtn() {
    this.btnElement?.addEventListener("click", (e) => {
      this.changeContents(e.target as HTMLElement);
    });
  }

  clickTurnOffPopupBtn() {
    this.btnElement?.addEventListener("click", () => {
      this.turnOffPopup();
    });
  }

  clickAddBtn() {
    const addBtn = document.querySelector(".popup__add__btn");
    addBtn?.addEventListener("click", () => {
      console.log(this.btnElement);
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

  changeContents(target: HTMLElement) {
    const inputLabel = document.querySelector("#input_label");
    const secondInput = document.querySelector(".popup__url__title");
    const parentPopupInput = document.querySelectorAll(".popup__input")[1];
    const textArea = document.createElement("textarea");
    const inputElement = document.createElement("input");

    if (target.id === "note_btn" || target.id === "task_btn") {
      if (inputLabel && secondInput) {
        inputLabel.innerHTML = "";
        inputLabel.innerHTML += "Body <br/>";
        parentPopupInput.replaceChild(textArea, secondInput);
        textArea.setAttribute("class", "popup__url__title");
      }
    } else if (target.id === "img_btn" || target.id === "video_btn") {
      if (inputLabel && secondInput) {
        inputLabel.innerHTML = "";
        inputLabel.innerHTML += "URL <br/>";
        parentPopupInput.replaceChild(inputElement, secondInput);
        inputElement.setAttribute("class", "popup__url__title");
      }
    }

    this.turnOnPopup();
  }
}

// 버튼 클릭으로 팝업 띄우기
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

imgPopup.clickAddBtn();
