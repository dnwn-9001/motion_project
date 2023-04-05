"use strict";
function turnOnPopup() {
    var popupBackground = document.querySelector(".popup__background");
    popupBackground === null || popupBackground === void 0 ? void 0 : popupBackground.classList.remove("display_none");
}
function turnOffPopup() {
    var popupBackground = document.querySelector(".popup__background");
    popupBackground === null || popupBackground === void 0 ? void 0 : popupBackground.classList.add("display_none");
}
var imgBtn = document.querySelector("#img_btn");
var closeBtn = document.querySelector(".popup__close__btn");
imgBtn === null || imgBtn === void 0 ? void 0 : imgBtn.addEventListener("click", function () {
    turnOnPopup();
});
closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener("click", function () {
    turnOffPopup();
});
//# sourceMappingURL=main.js.map