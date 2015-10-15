var Product = Class({
    create: function() {
    }
});

var ConcreteProduct = Product.extend({
    create: function() {
        facade.log('ConcreteProduct created')
    }
});

var Creator = Class({
    create: function() {
    },
    FactoryMethod: function(){

    },
    AnOperation: function(){
        facade.log("AnOperation()")
        this.product = this.FactoryMethod()
        facade.log(this.product instanceof ConcreteProduct)
    }
});

var ConcreteCreator = Creator.extend({
    create: function() {
        facade.log('ConcreteCreator created')
    },
    FactoryMethod: function(){
        return new ConcreteProduct();
    }
});

function init_FactoryMethod() {
    var factory = new ConcreteCreator()
    factory.AnOperation()
}