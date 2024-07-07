
// =========================================================================================================================
//                                                      swiper section 
// =======================================================================================================================
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });


// ==============================================================================================================================================================
//                                                                     scroll bar section
// =============================================================================================================================================================

const top_header = document.querySelector(".header");

const footerElm = document.querySelector(".section-footer");
const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");
scrollElement.classList.add("scrollTop-class");
scrollElement.classList.add("cursor");

// element inside the div element
scrollElement.innerHTML = ` <ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

// add after the scrollElement of the page
footerElm.after(scrollElement);

const scrollTop = () => {
    top_header.scrollIntoView({ behavior: "smooth" });
};

document.querySelector(".scroll-top").addEventListener("click", scrollTop);



// =============================================================================================================================
//                                     number increment animation  section                                           
// =============================================================================================================================

const counter_numbers = document.querySelectorAll(".counter-numbers");

const speed = 100;

counter_numbers.forEach((currEle) => {

    const target_number = parseInt(currEle.dataset.number);
    const updateNumber = () => {

        // console.log(target_number);
        const initial_number = parseInt(currEle.innerText);
        // console.log(initial_number);



        const increment_num = Math.trunc(target_number / speed);

        // console.log(increment_num);

        if (initial_number < target_number) {

            currEle.innerText = `${increment_num + initial_number}+`;

            setTimeout(updateNumber, 20);
        }
    }

    const updateNumber_by_1 = () => {

        // console.log(target_number);
        const initial_number = parseInt(currEle.innerText);
        // console.log(initial_number);


        if (initial_number < target_number) {
            currEle.innerText = `${1 + initial_number}+`;

            setTimeout(updateNumber_by_1, 200);
        }
    }



    if (target_number < 50) {
        updateNumber_by_1();
    }
    updateNumber();
});



// ====================================================================================================================
//                                              Responsive navigation
// ====================================================================================================================
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    // alert("hi");
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

// ================================================================================================================================================================
//                                              Responsive for review section 
// =================================================================================================================================================================


function myFunction(widthSize) {
    if (widthSize.matches) {
        // If media query matches
        const swiper = new Swiper(".swiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    } else {
        const swiper = new Swiper(".swiper", {
            slidesPerView: 2,
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
}

const widthSize = window.matchMedia("(max-width: 780px)");
// Call listener function at run time
myFunction(widthSize);
// Attach listener function on state changes
widthSize.addListener(myFunction);



// ========================================
// creating a portfolio tabbed component
// ========================================

console.log("hello your js code working...");
const port_btn = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const img_div = document.querySelectorAll(".img-overlay");

port_btn.addEventListener("click", (e) => {
    const btn_clicked = e.target;
    if (!btn_clicked.classList.contains("p-btn")) return;
    // console.log(btn_clicked);

    p_btn.forEach((cur_ele) => cur_ele.classList.remove("p_btn_active"))

    btn_clicked.classList.add("p_btn_active");

    // to find the p-img class number of the images using the btn data attribute number

    const btn_num = btn_clicked.dataset.btnNum;
    // console.log(btn_num);

    const show_img = document.querySelectorAll(`.p-btn--${btn_num}`);
    // console.log(show_img);
    // const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
    // / saari image ko remove kr do

    img_div.forEach((cur_ele) => {
        cur_ele.classList.add("hidden")
    })

    show_img.forEach((cur_ele) => {
        cur_ele.classList.remove("hidden")
    })
});