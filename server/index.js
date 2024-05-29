const express = require("express");
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://pasindu99:password99@cluster0.3m6svoy.mongodb.net/mernproject0?retryWrites=true&w=majority&appName=Cluster0"
);

app.get("/getUsers", async (req, res) => {
    try {
        const result = await UserModel.find({});
        res.json(result);
    } catch (err) {
        res.status(500).json(err);
    }
});

app.post("/createUser", async (req, res) => {
    try {const user = req.body;
        const newUser = new UserModel(user);
        await newUser.save();

        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }   
});


app.listen(3001, () => {
    console.log("SERVER is running successfully");
});