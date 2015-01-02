//var Class = require('../jsclass/src/js.class');

var AbstractProductA = Class({
    create: function() {
        this.created = true;
    }
});

var AbstractProductB = Class({
    create: function() {
        this.created = true;
    }
});

var AbstractFactory = Class({
    create: function() {
        this.created = true;
    },
    createProductA: function(){
        //this.productA = new AbstractProductA();
    },
    createProductB: function(){
        //this.productB = new AbstractProductB();
    }
});

var ProductA = AbstractProductA.extend({
    create: function() {
        this.created = true;
    }
});

var ProductB = AbstractProductB.extend({
    create: function() {
        this.created = true;
    }
});

var ConcreteFactory1 = AbstractFactory.extend({
    createProductA: function(){
        this.product = new ProductA();
    }
});

var ConcreteFactory2 = AbstractFactory.extend({
    createProductB: function(){
        this.product = new ProductB();
    }
});