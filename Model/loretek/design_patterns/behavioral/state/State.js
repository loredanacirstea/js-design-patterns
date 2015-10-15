var Contextt = Class({
    create: function(state){
        switch(state) {
            case "A":
                this.state = new ConcreteStateA()
                break
            case "B":
                this.state = new ConcreteStateB()
                break
            default:
                this.state = new ConcreteStateA()
        }
    },
    Request: function(){
        this.state.Handle(this);
    }
});

var State = Class({
    create: function(){
    },
    Handle: function(){
    }
});

var ConcreteStateA = State.extend({
    create: function(){
        facade.log('ConcreteStateA created')
    },
    Handle: function(){
        facade.log('ConcreteStateA handle')
    }
});

var ConcreteStateB = State.extend({
    create: function(){
        facade.log('ConcreteStateB created')
    },
    Handle: function(){
        facade.log('ConcreteStateB handle')
    }
});

function init_State() {
    context = new Contextt("A")
    context.Request()
}