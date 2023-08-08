const express = require("express");
const app = express();

app.set("views", "./views")
app.set("view engine", "ejs")

app.use(express.static('./public'))
//GET, POST, PATCH, PUT, DELETE
const products = [
    {
        title: "Giaayf ddaa",
        img: "https://anhdep123.com/wp-content/uploads/2021/01/anh-giay-the-thao-768x768.jpg"
    },
    {
        title: "giầy sneaker",
        img: "https://anhdep123.com/wp-content/uploads/2021/01/hinh-anh-giay-adidas.jpg"
    },
    {
        title: "giầy sneaker",
        img: "https://anhdep123.com/wp-content/uploads/2021/01/hinh-anh-giay-adidas.jpg"
    },
    {
        title: "giầy sneaker",
        img: "https://anhdep123.com/wp-content/uploads/2021/01/hinh-anh-giay-adidas.jpg"
    },
    {
        title: "giầy sneaker",
        img: "https://anhdep123.com/wp-content/uploads/2021/01/hinh-anh-giay-adidas.jpg"
    },
    {
        title: "giầy sneaker",
        img: "https://anhdep123.com/wp-content/uploads/2021/01/hinh-anh-giay-adidas.jpg"
    },
    {
        title: "giầy sneaker",
        img: "https://anhdep123.com/wp-content/uploads/2021/01/hinh-anh-giay-adidas.jpg"
    },
    {
        title: "giầy sneaker",
        img: "https://anhdep123.com/wp-content/uploads/2021/01/hinh-anh-giay-adidas.jpg"
    },
    {
        title: "giầy sneaker",
        img: "https://anhdep123.com/wp-content/uploads/2021/01/hinh-anh-giay-adidas.jpg"
    },
]
app.get("/home", (req, res, next)=>{ 
    return res.render("home/index.ejs", {
        products
    })
})
//MVC Model View Controller
app.listen(5000, ()=>{
    console.log("Server run at port 5000");
})