const cartBtn = document.querySelector(".cart__btn");
const cart = document.querySelector(".cart");
const cartCloseBtn = document.querySelector(".close");
const cartCloseSpan = document.querySelector(".blkOpacity");

cartBtn.addEventListener("click", () => {
    cart.classList.add("active");
    document.body.style.overflow = "hidden";
});


cartCloseBtn.addEventListener("click", () => {
    cart.classList.remove("active");
    document.body.style.overflow = "auto";
});

cartCloseSpan.addEventListener("click", () => {
    cart.classList.remove("active");
    document.body.style.overflow = "auto";
});