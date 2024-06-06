const express = require('express');

//express app

const app = express();

//listen for requests
app.listen(3000)
app.get('/', (req, res)=>{
    // res.send('<p>home pages</p>');
    res.sendFile('./index.html', {root: __dirname})
})
app.get('/about', (req, res)=>{
    // res.send('<p>home pages</p>');
    res.sendFile('./about.html', {root: __dirname})
})
app.get('/contact', (req, res)=>{
    // res.send('<p>home pages</p>');
    res.sendFile('./contact-me.html', {root: __dirname})
})

// 404 Page

app.use((req,res)=>{
    res.status(404).sendFile('404.html', {root:__dirname})
})