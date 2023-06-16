const express = require('express');
const rutas_xss = require('./XSS/routes');
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;



//configuracion de handlebars
app.set("views", __dirname + "\\views");
app.engine("hbs", engine(
    {
        layoutsDir: __dirname + "\\views\\layouts",
        defaultLayout: "main",
        extname: '.hbs',
    }));
app.set("view engine", "hbs");

//middleware

app.use(express.urlencoded({ extended: true }));
//rutas

app.use('/xss', rutas_xss);

app.get('/', (req, res) =>  {
    res.render('home');
} );


         

 


//servidor
app.listen(port, () => console.log(`Example app listening on port ${port}!`));