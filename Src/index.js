import express, { json, urlencoded } from "express"
import {dirname, join} from "path"
import { fileURLToPath } from "url"
import pug from "pug"
import router from "./router/router.js"

const app= express()
const __dirname=dirname(fileURLToPath(import.meta.url))

/* configuration middewalers*/

app.use(json())
app.use(urlencoded({extended:false}))
app.use(express.static(join(__dirname,"public")))
app.use(router) // router run
//rute 404 no found
app.use((req,res)=> {res.send("NO ENCONTRADO")})

/*setting*/
app.set("view engine", "pug")
app.set("views", join(__dirname,"views"))




/* runnig app */ 

app.listen(3000,"0.0.0.0",()=>{
    console.log("server runnnig")
    console.log(__dirname)
})



