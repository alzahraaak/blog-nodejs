//require
const { Router } = require('express');
const express=require('express');
const { route } = require('express/lib/application');
const mongoose= require('mongoose');
const Order= mongoose.model('Order');

varrouter= express.Router();
mongoose.set('userFindAndModify',false);

//Router
Router.get('/',(req,res)=>{
    res.render('menu');
});
Router.get('/cart',(req,res)=>{
    res.render('cart');
});
Router.get('/admin',(req,res)=>{
    Order.find((err,docs)=>{
        if(!err) {
            res.render("admin",{
                order:docs
            });
        } else {
            console.log('error in order: ' +err);
        }
    });
});
Router.get('/order/:id',(req,res)=>{
    Order.findById(req.params.id,(err,doc)=>{
        if(!err) {
            res.render("orders",{order:doc});
        } else {
            console.log('error findbyId: '+err);
        }
    });
});
router.get('/order/delete/:id',(req,res)=>{
    Order.findByIdAndRemove(req.params.id,(err,doc)=>{
        if (!err) {
            res.redirect('/admin');
        } else {
            console.log('error in delete: ' +err);
        }
    });
});
//POST
router.post('/cart',(req,res)=>{
    insertOrder(req,res);
});
router.post('/order',(req,res)=>{
    updateOrder(req,res);
});

//functions
function updateOrder(req,res) {
    Order.findOneAndUpdate({id:erq.body._id},req.body,{new:true},(err,doc)=>{
        if (!err) {
              res.redirect('/admin');
        } else {
            console.log('Update error ' +err);
        }
    });
}
function insertOrder(req,res) {
    var d=new Data();
    var t=d.getTime();
    var counter= t;
    counter+=1;
    var order=new Order();
    order.total=req.body.total;
    order.order=counter;
    order.save((err,doc)=>{
        if(!err) {
            console.log('order: '+order);
            res.redirect('/admin');
        } else {
            console.log('Error insertOrder: '+err)
        }
    });
}
module.exports=router
