"use strict";
var Popup = /** @class */ (function () {
    function Popup(classOrIdName) {
        this.btnElement = document.querySelector(classOrIdName);
    }
    Popup.prototype.clickTurnOnPopupBtn = function () {
        var _this = this;
        var _a;
        (_a = this.btnElement) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
            _this.turnOnPopup();
        });
    };
    Popup.prototype.clickTurnOffPopupBtn = function () {
        var _this = this;
        var _a;
        (_a = this.btnElement) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
            _this.turnOffPopup();
        });
    };
    Popup.prototype.turnOnPopup = function () {
        // if (this.btnElement && (this.btnElement.id === "note_btn" || "task_btn")) {
        //   console.log(this.btnElement.id);
        //   this.changeNoteAndTaskContents();
        // }
        var popupBackground = document.querySelector(".popup__background");
        popupBackground === null || popupBackground === void 0 ? void 0 : popupBackground.classList.remove("display_none");
    };
    Popup.prototype.turnOffPopup = function () {
        var popupBackground = document.querySelector(".popup__background");
        popupBackground === null || popupBackground === void 0 ? void 0 : popupBackground.classList.add("display_none");
    };
    Popup.prototype.changeNoteAndTaskContents = function () {
        var inputLabel = document.querySelector("#input_label");
        var secondInput = document.querySelector(".popup__url__title");
        if (inputLabel && secondInput) {
            inputLabel.innerHTML = "";
            secondInput.remove();
            inputLabel.innerHTML += "Body <br/>";
            secondInput.innerHTML += "<textarea></textarea>";
            secondInput.classList.add("popup__url__title");
        }
    };
    return Popup;
}());
var imgPopup = new Popup("#img_btn");
var videoPopup = new Popup("#video_btn");
var notePopup = new Popup("#note_btn");
var taskPopup = new Popup("#task_btn");
var popupCloseBtn = new Popup(".popup__close__btn");
imgPopup.clickTurnOnPopupBtn();
videoPopup.clickTurnOnPopupBtn();
notePopup.clickTurnOnPopupBtn();
taskPopup.clickTurnOnPopupBtn();
popupCloseBtn.clickTurnOffPopupBtn();
//# sourceMappingURL=main.js.map