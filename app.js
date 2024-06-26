const express = require('express');

// express app
const morgan = require('morgan')
const mongoose = require('mongoose')

const blogRoutes = require('./routes/BlogRoutes')


const app = express();
// Connect to the database
const dbURI = 'mongodb+srv://Youremail:YourPassword@cluster0.r54f38d.mongodb.net/yourappname?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result)=>app.listen(3000), console.log('connected'))
.catch((err)=>console.log(err));
app.set('view engine', 'ejs');
// app.set('views','/express_tutorial/views', 'ejs');
// listen for request


app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res)=>{
    // res.send('<p>Home Page</p>');
    //res.sendFile('./views/home.html', {root:__dirname});


    res.redirect('/blogs')
})



app.get('/about', (req, res)=>{
    res.render('about')
});

app.use('/blogs', blogRoutes)

app.use((req, res)=>{
    // res.send('<p>Home Page</p>');
    // res.sendFile('./views/about.html', {root:__dirname});
    res.status(404).render('404')
});
