const mongoose = require("mongoose")

//kết nối database
const connectDB = async () =>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/demo_tuoi"); //thay localhost => 127.0.0.1
        console.log("Connect db success");
    } catch (error) {   
        console.log("Connect db fail");
        console.log(error.message);
    }
}
//export ra để file app.js sẽ sử dụng
module.exports = connectDB;