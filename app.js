const Express=require('express');

var app=new Express();

app.set('view engine','ejs');

app.use(Express.static(__dirname+"public"));

app.get("/",(req,res)=>{
    res.render('index');

});

app.listen(3000,()=>{
    console.log("Work in progress...!");

});
