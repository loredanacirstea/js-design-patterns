var Abstraction = Class({
    create: function() {
    },
    Operation: function(){
        this.imp.OperationImp();
    }
});

var RefinedAbstraction = Abstraction.extend({
    create: function() {
        facade.log('RefinedAbstraction created')
    },
    setImp (imp) {
        this.imp = imp
    }
});

var Implementor = Class({
    create: function() {
    },
    OperationImp: function(){
    }
});

var ConcreteImplementorA = Implementor.extend({
    create: function() {
        facade.log('ConcreteImplementorA created')
    },
    OperationImp: function(){
        facade.log('ConcreteImplementorA OperationImp')
    }
});

var ConcreteImplementorB = Implementor.extend({
    create: function() {
        facade.log('ConcreteImplementorB created')
    },
    OperationImp: function(){
        facade.log('ConcreteImplementorB OperationImp')
    }
});

function init_Bridge() {
    var abstraction = new RefinedAbstraction()
    var state = Math.floor(Math.random()*2)
    if(state)
        abstraction.setImp(new ConcreteImplementorA())
    else
        abstraction.setImp(new ConcreteImplementorB())

    abstraction.Operation()
}