//CONFIGURACION DE SCRIPT PAGE HOME

import swiperFun from "../modules/swiperFun.js";
import bottomUp from "../modules/bottomUp.js";
import ModalsView from "../modules/modals.js";

const d=document


//options slider menu hamburger
const classMenu=".swiper"
const optionsMenu={
    slidesPerView: 4,
    spaceBetween:8,
    loop:true,
    allowTouchMove: true,
    pagination:{
        el:".swiper-pagination",
        type: "bullets",
        clickable: true,
    },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints:{
        1440:{
          slidesPerView: 3,
          spaceBetween:13,
        },
        1230:{
          slidesPerView:2,
        },

        1024:{
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1000: {
          slidesPerView:1,
          spaceBetween:0,
        },
        780:{
          slidesPerView:1,
          spaceBetween:0,
        },
        420:{
          slidesPerView:1,
          spaceBetween:0,
        },
        400:{
          slidesPerView:1,
          spaceBetween:0,
        },
        380:{
          slidesPerView:1,
          spaceBetween:0,
        },
        350:{
          slidesPerView:1,
          spaceBetween:0,
        },
        300:{
          slidesPerView:1,
          spaceBetween:0,
        },
        280:{
          slidesPerView:1,
          spaceBetween:0,
        }
      }
}

console.log("hola mundo")


// TODO RUN DOMCONTENDLOAD

d.addEventListener("DOMContentLoaded",e=>{
swiperFun(classMenu,optionsMenu)
bottomUp(".main_btn-Up", 800)
ModalsView("[data-modals]")
})
