
//TODO MODULO DONDE EJECUTA LA VISIBILIDAD DE UN BOTTOM Y LA FUNCIONALIDAD DE IR AL TOP CON EL OBJETO WINDOW

/* 

distance: tamaño de la ventana al hacer scroll
btn: clase del botton

se recomienda confiugurar una clase que hidden para que se active y remueve con facilidad

*/

const w= window;
const d = document;


const bottomUp= (btn, distance)=>{
    
    const $btnUp =d.querySelector(btn);
    

    d.addEventListener("click", e=>{
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior:"smooth",
                top:0,
            })

        }
    });

    w.addEventListener("scroll",e=>{
        w.scrollY > distance ? $btnUp.classList.remove("btn_hidden") : $btnUp.classList.add("btn_hidden")
    })  
    

}


export default bottomUp