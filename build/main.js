"use strict";
var Popup = /** @class */ (function () {
    function Popup(classOrIdName) {
        this.btnElement = document.querySelector(classOrIdName);
    }
    Popup.prototype.clickTurnOnPopupBtn = function () {
        var _this = this;
        var _a;
        (_a = this.btnElement) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
            _this.changeContents();
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
    Popup.prototype.changeContents = function () {
        var _a, _b, _c, _d;
        var inputLabel = document.querySelector("#input_label");
        var secondInput = document.querySelector(".popup__url__title");
        var parentPopupInput = document.querySelectorAll(".popup__input")[1];
        var textArea = document.createElement("textarea");
        var inputElement = document.createElement("input");
        if (((_a = this.btnElement) === null || _a === void 0 ? void 0 : _a.id) === "note_btn" || "task_btn") {
            if (inputLabel && secondInput) {
                console.log("id", (_b = this.btnElement) === null || _b === void 0 ? void 0 : _b.id);
                console.log("note&task");
                inputLabel.innerHTML = "";
                inputLabel.innerHTML += "Body <br/>";
                parentPopupInput.replaceChild(textArea, secondInput);
                secondInput.setAttribute("class", "popup__url__title");
            }
        }
        else if (((_c = this.btnElement) === null || _c === void 0 ? void 0 : _c.id) === "img_btn" || "video_btn") {
            if (inputLabel && secondInput) {
                console.log("id", (_d = this.btnElement) === null || _d === void 0 ? void 0 : _d.id);
                console.log("image&video");
                inputLabel.innerHTML = "";
                inputLabel.innerHTML += "URL <br/>";
                parentPopupInput.replaceChild(inputElement, secondInput);
                secondInput.setAttribute("class", "popup__url__title");
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