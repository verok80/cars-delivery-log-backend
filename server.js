const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require('./CarsLogRoutes');
require ("dotenv").config();
mongoose.set("strictQuery", false)


const PORT = 4000 || process.env.port;

app.use(express.json())
app.use(cors());

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log("WE ARE CONNECTED TO MONGO"))
.catch((err) => console.log(err))

app.use(routes);
app.listen(PORT, () => {
    console.log("SERVER STARTED.....")
})