var Target = Class({
    create: function() {
    },
    Request: function(){
    }
});


var Adaptee = Class({
    create: function() {
        facade.log('Adaptee created')
    },
    SpecificRequest: function(){
        facade.log('Adaptee request')
    }
});

var Adapter = Class({
    create: function() {
        facade.log('Adapter created')
    }
}).mixin(Target, Adaptee);

Adapter.prototype.Request = function(){
        this.SpecificRequest();
    }

function init_Adapter() {
    var f = new Adapter()
    f.Request()
}