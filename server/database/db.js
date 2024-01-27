const mongoose = require("mongoose");

// mongo atlas password = Ugy08iuP1sYqiMmf
// mongo atlas username = bhudev3477
// mongo ip address = 49.42.68.181/32

const connect_db = async() => {
    try{
        await mongoose.connect("mongodb+srv://bhudev3477:Ugy08iuP1sYqiMmf@cluster0.4yatuoi.mongodb.net/inventory_data?retryWrites=true&w=majority");
        console.log("mongodb connected");
    } catch(err){
        console.log(err);
    }
}

module.exports = connect_db;