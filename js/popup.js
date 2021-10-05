const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup_close");

if (popup) {
    closePopup.addEventListener("click", () => {
        popup.classList.add("hide_popup");
    });

    window.addEventListener("load", () => {
        setTimeout(() => {
            popup.classList.remove("hide_popup");
        }, 1000);
    });
}
