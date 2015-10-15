var Prototype = Class({
    create: function(prototype) {
    },
    Clone: function(){
    }
});

var ConcretePrototype1 = Prototype.extend({
    create: function() {
        this.feature = "feature 1"
        facade.log("ConcretePrototype1 created");
    },

    setFeature(key, val) {
        this[key] = val
    },

    Clone: function(){
        facade.log('custom cloning function')
        clone = new ConcretePrototype1()
        keys = Object.keys(this)

        for(var k in keys) {
            clone.setFeature(keys[k], this[keys[k]])
        }

        facade.log("ConcretePrototype1 cloned");
        return clone;
    }
});

var ConcretePrototype2 = Prototype.extend({
    create: function() {
        facade.log("ConcretePrototype2 created");
    },
    Clone: function(){
        facade.log("ConcretePrototype2 cloned");
        return this;
    }
});

function init_Prototype () {
    var proto1 = new ConcretePrototype1()
    proto1.setFeature('feature', "feature 22")
    var clone1 = proto1.Clone()
    facade.log(clone1.feature)
}