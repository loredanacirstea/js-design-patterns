var Invoker = Class({
    create: function() {
        facade.log('Invoker created')
    },
    StoreCommand: function(command) {
        this.command = command
    }
});

var Command = Class({
    create: function() {
    },
    Execute: function(){
    }
});

var ConcreteCommand = Command.extend({
    create: function(receiver) {
        this.receiver = receiver
        facade.log('ConcreteCommand created')
    },
    Execute: function(){
        facade.log('ConcreteCommand Execute')
        this.receiver.Action();
    }
});

var Receiver = Class({
    create: function() {
        facade.log('Receiver created')
    },
    Action: function(){
        facade.log('Receiver Action')
    }
});

function init_Command() {
    var invoker = new Invoker()
    var receiver = new Receiver()
    var command = new ConcreteCommand(receiver)
    invoker.StoreCommand(command)
    invoker.command.Execute()
}