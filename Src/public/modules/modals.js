//TODO ES MODULO REALIZA UN FUNCION PARA ABRIR VENTANAS MODALES Y SUS RESPECTIVAS INFORMACION DE CONTENIDO


/*
    data-modals
    data-modalsIMG
    data-modalsCaption
     data-modalsPrice
 */


const d=document
const $main=d.querySelector(".main")

const $divModal= d.createElement("div")

$divModal.innerHTML=`
                <div class="data_modal-containerContent"> 
                    <div class="data_modal-containerIMG">
                        <img class="data_modal-img" alt="product" src="">
                    </div>
                    <div class="data_modal-containerText">
                        <h2 class="data_modal-title"></h2>
                        <span class="data_modal-price"></span>
                    </div>
                    <bottom class="data_modal-close">
                        <i class="fas fa-times-circle data_modal-icon"></i>
                    </bottom>
                </div>
                `
                $divModal.classList.add("data_modalHidden")
                $divModal.classList.add("data_modal")

                $main.appendChild($divModal)

    const $btnClose= d.querySelector(".data_modal-close")
    const $imgModal=d.querySelector(".data_modal-img")
    const $captionModal=d.querySelector(".data_modal-title")
    const $priceModal=d.querySelector(".data_modal-price")

                
const ModalsView= (modalAll)=>{
    
    const $Modals = d.querySelectorAll(modalAll)

    $Modals.forEach(modal=>{
        modal.addEventListener("click",e=>{
            if(e.target.matches(modalAll)){
              
                const $img=e.target.children[0].src
                const $caption=e.target.children[1].textContent
                const $price=e.target.children[2].children[0].textContent

                $imgModal.src= $img
                $captionModal.textContent = $caption 
                $priceModal.textContent= $price               
                
                $divModal.classList.remove("data_modalHidden")
            }
        })

        $btnClose.addEventListener("click", e=>{

            return $divModal.classList.add("data_modalHidden")
        })

    })


}

export default ModalsView
