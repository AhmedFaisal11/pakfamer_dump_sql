const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 3000 || 3001 || 5000;

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'LET_mein!123',
    database: 'pakfarmer'
});//LET_mein!123'

conn.connect((err) => {
    if(err){
        console.log(`[ERROR] Error connecting to database`);
    }
    conn.query('Select * from category limit 10' , (err1 , results , fields) => {
        if(err1){
            console.log(`[ERROR] There are some error getting data`);
        }
        console.log(`[INFO] ${JSON.stringify(results)}`);
        // console.log(`[INFO] ${JSON.stringify(fields)}`);
    })
})

app.get('/' , (req , res) => {
    res.status(200).json({
        message: "this page is working fine!!!!!!!!!!!",
        status: 'OK'
    });
});

app.listen(port , () => {
    console.log(`[INFO] Server is running on ${port}`);
});