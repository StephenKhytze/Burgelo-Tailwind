const burgirBtn = document.querySelector(".burgir");
const headerNav = document.querySelector(".header__nav");

burgirBtn.addEventListener("click", () => {
    burgirBtn.classList.toggle("open");
    headerNav.classList.toggle("open");
});

const menuNav = document.querySelectorAll(".tab__nav__link");
const menuContent = document.querySelectorAll(".menu__page__content__item");

menuNav.forEach((menu) => {
    menu.addEventListener("click", () => {
        removeActiveMenu();
        menu.classList.add("active");
        
        const activeContent = document.querySelector(`#${menu.id}-content`);
        removeActiveContent();
        activeContent.classList.add("active");
    })
});

function removeActiveMenu() {
    menuNav.forEach((menu) => {
        menu.classList.remove("active");
    }) 
}

function removeActiveContent() {
    menuContent.forEach((menu) => {
        menu.classList.remove("active");
    }) 
}

// scroll--button
const scroll_notif = document.querySelector(".scroll");

window.addEventListener("scroll", () =>{
    if(scrollY >= 200){
        scroll_notif.classList.add("active");
    }else{
        scroll_notif.classList.remove("active");
    }
});

scroll_notif.addEventListener("click", () => {
    globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});
// scroll--button--end

function show__menu() {
    document.querySelector(".home__menu").classList.toggle("active");
    document.querySelector(".home__menu__btn").classList.toggle("active");
}
