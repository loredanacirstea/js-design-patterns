var AbstractFactory = Class({
    create: function(factory) {
    },
    createProductA: function(){
    },
    createProductB: function(){
    }
});

var ConcreteFactory1 = AbstractFactory.extend({
    create: function(){
        facade.log("ConcreteFactory1 class created");
    },
    createProductA: function(){        
        facade.log("ProductA1 created by ConcreteFactory1");
        return new ProductA1()
    },
    createProductB: function(){
        facade.log("ProductB1 created by ConcreteFactory1");
        return new ProductB1()
    }
});

var ConcreteFactory2 = AbstractFactory.extend({
    create: function(){
        facade.log("ConcreteFactory2 class created");
    },
    createProductA: function(){
        facade.log("ProductA2 created by ConcreteFactory2");
        return new ProductA2()
    },
    createProductB: function(){
        facade.log("ProductB2 created by ConcreteFactory2");
        return new ProductB2()
    }
});

var AbstractProductA = Class({
    create: function() {
    }
});

var AbstractProductB = Class({
    create: function() {
    }
});


var ProductA1 = AbstractProductA.extend({
    create: function() {
        facade.log("ProductA1 class created");
    }
});

var ProductA2 = AbstractProductA.extend({
    create: function() {
        facade.log("ProductA2 class created");
    }
});

var ProductB1 = AbstractProductB.extend({
    create: function() {
        facade.log("ProductB1 class created");
    }
});

var ProductB2 = AbstractProductB.extend({
    create: function() {
        facade.log("ProductB2 class created");
    }
});

function init_AbstractFactory() {
    var factory1 = new ConcreteFactory1()
    var productB1 = factory1.createProductB()
    
    var factory2 = new ConcreteFactory2()
    var productA2 = factory2.createProductA()
}