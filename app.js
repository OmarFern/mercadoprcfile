const express = require('express'); // requiere el modulo express
const path=require("path")            // requiero path 
const app = express();
app.use(express.static('public'));


/* app.listen(3050, ()=>{console.log('Servidor corriendo en http://localhost:3050/');}); */
app.listen(process.env.PORT || 3000 ,function(){ console.log('Servidor corriendo en el puerto 3000');});
//app.get('/', (req,res)=>{res.sendFile(__dirname + '/views/home.html');});
app.get("/"               ,(req,res)=> {res.sendFile(path.resolve( "./views/index.html"       ))}); 

app.get("/login"      ,(req,res)=>{ res.sendFile(path.resolve("./views/login.html"    ))});
app.get("/register"      ,(req,res)=>{ res.sendFile(path.resolve("./views/register.html"    ))});
app.get("/index"      ,(req,res)=>{ res.sendFile(path.resolve("./views/index.html"    ))});