var Prototype = Class({
    create: function() {
        this.created = true;
    },
    Clone: function(){
    }
});

var ConcretePrototype1 = Prototype.extend({
    create: function() {
        this.created = true;
    },
    Clone: function(){
        return this;
    }
});

var ConcretePrototype2 = Prototype.extend({
    create: function() {
        this.created = true;
    },
    Clone: function(){
        return this;
    }
});