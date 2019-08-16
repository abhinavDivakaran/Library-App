const Express=require('express');

var app=new Express();

app.set('view engine','ejs');

app.use(Express.static(__dirname+"/public"));

 nav=[
    {link:'/books',title:'Books'},
    {link:'/auther',title:'Authers'}
];

app.get("/",(req,res)=>{
    res.render('index',nav);

});

app.listen(3000,()=>{
    console.log("Work in progress...!");

});
