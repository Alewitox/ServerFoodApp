
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));

const showFoodMessage = (req, res) => {
    res.send({
    list: [{food:'Japonés'},
        {food: 'Italiano'},
        {food: 'Tailandés'},
        {food: 'Norteamericana'},
        {food: 'Española'},
        {food: 'Chino'}]
    });
};

const showAdviceMessage = (req, res) => {
    res.send({
    list: [{advice:'Coma alimentos variados'},
        {advice: 'Base su dieta en alimentos ricos en hidratos de carbono'},
        {advice: 'Tome muchas frutas y verduras'},
        {advice: 'Beba muchos líquidos'},
        {advice: 'Mantenga un peso corporal saludable y siéntase bien'}]
    });
};

const showFirstMessage = (req, res) => {
    res.send({
    list: [{first:'Sopa de miso'},
        {first: 'Ensalada'},
        {first: 'Judías verdes con setas'}]
       
    });
};

const showSecondMessage = (req, res) => {
    res.send({
    list: [{second:'Ramen'},
        {second: 'Tempura'},
        {second: 'Hamburguesa'}]
       
    });
};

const showThirdMessage = (req, res) => {
    res.send({
    list: [{third:'Brownie'},
        {third: 'Puding'},
        {third: 'Arroz con leche'}]
       
    });
};

const showFourthMessage = (req, res) => {
    res.send({
    list: [{fourth:'Agua'},
        {fourth: 'Refresco'},
        {fourth: 'Vino Ramón Bilbao'}]
       
    });
};

const showBackground = (req, res) => {
    res.status(200).send({
        color: "CFCBC7"
    
    });
};

const showBackgroundTwo = (req, res) => {
    res.status(200).send({
        color: "a0b49c"
    
    });
};

const showbackimg = (req, res) => {
    res.status(302).redirect(
        `http://localhost:40000/images/download${req.params.baimage}.png`
    
    );
};


const showChicoteMessage = (req, res) => {
    res.send({
        chef: "Alberto Chicote"
    
    });
};


app.get("/food", showFoodMessage);
app.get("/advice", showAdviceMessage);
app.get("/color", showBackground);
app.get("/colortwo", showBackgroundTwo);
app.get("/backimage/:baimage", showbackimg);
app.get("/first", showFirstMessage);
app.get("/second", showSecondMessage);
app.get("/third", showThirdMessage);
app.get("/fourth", showFourthMessage);
app.get("/chicote", showChicoteMessage);

const port = 40000;
app.listen(port, () => {
    console.log("Running on http://localhost:" + port);
});