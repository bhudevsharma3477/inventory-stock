var express = require("express");
var app = express();
var cors = require("cors");
var bodyparser = require("body-parser");
const connect_db = require("./database/db");
const Inventory_data = require("./database/schema");

connect_db();

app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

app.post('/apidata', async(req, res) => {
    try{
        await (Inventory_data(req.body)).save();
        res.json({message: "Data Posted Successfully...."});
    } catch(err){
        console.log(err);
    }
});

app.get("/apidata", async(req, res) => {
    try{
        return res.json(await Inventory_data.find());
    }catch(err){
        return console.log(err);
    }
});

app.delete("/apidata", async(req, res) => {
    try{
        return await Inventory_data.findOneAndDelete({stock: 180});
    }catch(err){
        return console.log(err);
    }
    
});


app.listen(5000, () => console.log("server is running"));