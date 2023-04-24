"use strict";
var Popup = /** @class */ (function () {
    function Popup(classOrIdName) {
        this.btnElement = document.querySelector(classOrIdName);
    }
    Popup.prototype.clickTurnOnPopupBtn = function () {
        var _this = this;
        var _a;
        (_a = this.btnElement) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (e) {
            _this.changeContents(e.target);
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
        var popupBackground = document.querySelector(".popup__background");
        popupBackground === null || popupBackground === void 0 ? void 0 : popupBackground.classList.remove("display_none");
    };
    Popup.prototype.turnOffPopup = function () {
        var popupBackground = document.querySelector(".popup__background");
        popupBackground === null || popupBackground === void 0 ? void 0 : popupBackground.classList.add("display_none");
    };
    Popup.prototype.changeContents = function (target) {
        var inputLabel = document.querySelector("#input_label");
        var secondInput = document.querySelector(".popup__url__title");
        var parentPopupInput = document.querySelectorAll(".popup__input")[1];
        var textArea = document.createElement("textarea");
        var inputElement = document.createElement("input");
        if (target.id === "note_btn" || target.id === "task_btn") {
            console.log(secondInput);
            if (inputLabel && secondInput) {
                inputLabel.innerHTML = "";
                inputLabel.innerHTML += "Body <br/>";
                parentPopupInput.replaceChild(textArea, secondInput);
                textArea.setAttribute("class", "popup__url__title");
            }
        }
        else if (target.id === "img_btn" || target.id === "video_btn") {
            console.log(secondInput);
            if (inputLabel && secondInput) {
                inputLabel.innerHTML = "";
                inputLabel.innerHTML += "URL <br/>";
                parentPopupInput.replaceChild(inputElement, secondInput);
                inputElement.setAttribute("class", "popup__url__title");
            }
        }
        this.turnOnPopup();
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