var Handler = Class({
    create: function() {
    },
    HandleRequest: function(){
    }
});

var ConcreteHandler1 = Handler.extend({
    create: function() {
        facade.log('ConcreteHandler1 created')
    },
    setSuccessor: function (successor) {
        this.successor = successor
    },
    HandleRequest: function(request){
        if (request === 'run')
            facade.log('ConcreteHandler1 has handled the request')
        else {
            facade.log('ConcreteHandler1 calls his successor')
            this.successor.HandleRequest(request)
        }
    }
});

var ConcreteHandler2 = Handler.extend({
    create: function() {
        facade.log('ConcreteHandler2 created')
    },
    HandleRequest: function(){
        facade.log('ConcreteHandler2 has handled the request')
    }
});

function init_ChainofResponsibility() {
    handle1 = new ConcreteHandler1()
    handle2 = new ConcreteHandler2()
    handle1.setSuccessor(handle2)
    handle1.HandleRequest('run')
    handle1.HandleRequest('stay')

}