const express = require('express');
const app = express();
const connectDB = require('./configs/database');
const router = require('./routers');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.use(express.json());

connectDB();
router(app);
//CRUD: Create, Read, Update, Delete

//create
// app.post("/api/categories", )

// //read
// app.get("/api/categories", )

// //update
// app.patch("/api/categories/:id", )

// //delete
// app.delete("/api/categories/:id", )

app.listen(5000, () => {
  console.log('Server run at port 5000');
});
