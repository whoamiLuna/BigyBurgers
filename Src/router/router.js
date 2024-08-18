import { Router } from "express";

const router= Router()
//Router


router.get("/", (req, res)=>{
    res.render("index.pug",{
        description: "PAGINA BIGY BURGERS, DONDE EL SABOR DE LA HAMBUGUESA ES UNICA",
        keywords: "HAMBURGUESA, COMIDA RAPIDA, POSTRES Y REFRESCOS, LUGAR DE LAS  HAMBURGUESAS",
        style:"CSS/home.css",
        scriptView:"JS/home.js",
    })
})


router.get("/menu", (req,res)=> {
    res.render("menu.pug")
})

export default router; 