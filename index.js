const express = require('express');

const app = express();
const port = process.env.PORT || 3000 || 3001 || 5000;

app.get('/' , (req , res) => {
    res.status(200).json({
        message: "this page is working fine!!!!!!!!!!!",
        status: 'OK'
    });
});

app.listen(port , () => {
    console.log(`[INFO] Server is running on ${port}`);
});