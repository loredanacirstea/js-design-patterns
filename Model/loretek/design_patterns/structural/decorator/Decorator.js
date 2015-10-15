var Component = Class({
    create: function() {
    },
    Operation: function(){
    }
});

var ConcreteComponent = Component.extend({
    create: function() {
        facade.log('ConcreteComponent created')
    },
    Operation: function(){
        facade.log('o o')
    }
});

var Decorator = Component.extend({
    create: function(component) {
        this.component = component
        facade.log('Decorator created')
    },
    Operation: function(){
        this.component.Operation()
    }
});

var ConcreteDecoratorA = Decorator.extend({
    create: function(component, sign){
        this.component = component
        //Decorator.prototype.create.apply(this, component)
        this.addedState = sign
        facade.log('ConcreteDecoratorA created')
    },
    Operation: function(){
        Decorator.prototype.Operation.apply(this)
        facade.log(this.addedState)
    }
});

var ConcreteDecoratorB = Decorator.extend({
    create: function(component, sign) {
        this.component = component
        //Decorator.prototype.create.apply(this, component)
        this.addedState = sign
        facade.log('ConcreteDecoratorA created')
    },
    Operation: function(){
        Decorator.prototype.Operation.apply(this)
        facade.log(this.addedState + this.addedState + this.addedState + this.addedState + this.addedState)
    },
    AddedBehavior: function (){
        this.Operation()
        facade.log('|........|')
    }
});

function init_Decorator() {
    var component = new ConcreteComponent()
    var decoratorA = new ConcreteDecoratorA(component, '!!!')
    var decoratorB = new ConcreteDecoratorB(component, '.')
    facade.log('component: ')
    component.Operation()
    facade.log('decoratorA: ')
    decoratorA.Operation()
    facade.log('decoratorB: ')
    decoratorB.AddedBehavior()
}