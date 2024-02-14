const dotenv = require('dotenv');
dotenv.config({path: "./Config/config.env"})
const express = require('express');
const app = express();
const cors = require('cors');
const database = require('./Database/ScanTheMenu.Database');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// Route Importing
const adminAuthRoute = require('./Routes/Admin/AdminAuth.Route');
const dishesRoute = require('./Routes/Admin/Dishes.Routes');

// Route Declaration
app.use('/api/v1', adminAuthRoute)
app.use('/api/v1', dishesRoute)


database().then(
    app.listen(process.env.PORT, () => {
        console.log("Jay Shree Ram");
    })
)