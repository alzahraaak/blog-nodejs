//GLOBAL
var products=[];
var cartItems=[];
var cart_n= document.getElementById('cat_n');
//DIVS
var chessecakeDIV = document.getElementById(chessecakeDIV);
var juiceDIV = document.getElementById(juiceDIV);
var cupcakeDIV = document.getElementById(cupcakeDIV);
//ınformation 
var Chessecake =[
    {name:'blackberry chessecake',price:15},
    {name:'chocolate chessecake',price:35},
    {name:'italian chessecake',price:37},
];
var Juices=[
    {name:'juice#1',price:15},
    {name:'juice#2',price:15},
    {name:'juice#3',price:15},
];
var Cupcake=[
    {name:'keylime',price:25},
    {name:'boston cream',price:17},
    {name:'red velvet',price:20},
];
//HTML
function HTMLchessecakeProduct(con){
    let URL ="https://www.elmundoeats.com/wp-content/uploads/2019/11/Easy-Cheesecake.jpg";
    let btn =`btnChessecake${con}`;
    return `
    <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
    <img class="card-img-top" style="height:16rem;"

    `
}