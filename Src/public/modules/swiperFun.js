import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const createSwiper = (classContainerSwiper, config) =>{
    
    const swiper= new Swiper(classContainerSwiper, config)
    return swiper
}

export default createSwiper