require('./models/db');
const experss= require('express');
const path= require('path');
const exphbs= require('express-handlebars');
const bodyparser= require('body-parser');
const orderController= require('./controllers/ordercontroller');

var app=express();
app.use(bodyparser.urlencoded({
    extended: true
}))
app.use(bodyparser.json());
app.use(experss.static(path.join(__dirname,'/public')));
app.set('views',path.join(__dirname,'views'));
app.engine('hbs',exphbs({
    extname: 'hbs',
    defaultlayout: 'mainlayout',
    layoutsDir: __dirname+'/views/'
}));
app.set('view engine','hbs');
app.listen(3000,()=>{
    console.log('server on port: 3000');
});
app.use('/',orderController);