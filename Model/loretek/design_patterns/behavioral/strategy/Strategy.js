var Contexttt = Class({
    create: function(type){
        switch(type) {
            case "A":
                this.strategy = new ConcreteStrategyA()
                break
            case "B":
                this.strategy = new ConcreteStrategyB()
                break
            default:
                this.strategy = new ConcreteStrategyA()
        }
    },
    ContextInterface: function(){
        this.strategy.AlgorithmInterface()
    }
});

var Strategy = Class({
    create: function(){
    },
    AlgorithmInterface: function(){
    }
});

var ConcreteStrategyA = Class({
    create: function(){
        facade.log('ConcreteStrategyA created')
    },
    AlgorithmInterface: function(){
        facade.log('ConcreteStrategyA algorithm')
    }
});

var ConcreteStrategyB = Class({
    create: function(){
        facade.log('ConcreteStrategyB created')
    },
    AlgorithmInterface: function(){
        facade.log('ConcreteStrategyB algorithm')
    }
});

function init_Strategy() {
    contextA = new Contexttt("A")
    contextA.ContextInterface()
    contextB = new Contexttt("B")
    contextB.ContextInterface()
}