const express=require('express');
const path=require('path');
const morgan=require('morgan');
const mysql=require('mysql');
const myConection=require('express-myconnection');

const app=  express ();

//  SETTHINGS
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MIDDLEWARES
app.use(morgan('dev'));
app.use(myConection(mysql,{
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crudjsmysql',
    port: 3006
}));

app.listen(app.get('port'), () =>{
    console.log("Escuchando en puerto 3000");
});


