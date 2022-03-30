const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();
const mysql = require("mysql");
const path = require('path')

// ========= CONNECTION TO DATABASE ========= //

const db = mysql.createPool({
    host: "us-cdbr-east-05.cleardb.net",
    user: "b8b5d4904bda01",
    password: "d09e8611",
    database: "heroku_2ada71c0045f1b8"
});

app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// ========= PRODUCTS LIST ========= //

app.get('/api/products_info', (req, res) => {
    db.query('SELECT * FROM products_info', (err, result) => {
        if (err) {
            console.log(err)
        }else {
            res.send(result);
        }
    })
});

// ========= EMAIL SUBSCRIPTIONS ========= //

app.post("/api/insert", (req, res) => {
    const userEmail = req.body.user_email;

    const sqlInsert = "INSERT INTO email_subscriptions (user_email) VALUES (?);";
    db.query(sqlInsert, [userEmail], (err, result) => {
        console.log(err)
    });
});

app.use(express.static(path.join(__dirname, './build')));

app.listen(process.env.PORT || 3001, () => {
    console.log('running on port 3001')
});