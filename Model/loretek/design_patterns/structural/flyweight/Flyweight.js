var FlyweightFactory = Class({
    create: function(){
        this.flyweights = [];
        facade.log('FlyweightFactory created')
    },
    GetFlyweight: function(key){
        if(this.flyweights[key]){
            return this.flyweights[key];
        }
        else{
            this.flyweights[key] = new ConcreteFlyweight(key);
            return this.flyweights[key];
        }
    },
    CreateGibberish: function (keys) {
        return new UnsharedConcreteFlyweight(keys, this)
    }
});

var Flyweight = Class({
    create: function() {
    },
    Operation: function(extrinsicState){
    }
});


var ConcreteFlyweight = Flyweight.extend({
    create: function(key){
        this.intrinsicState = key
        facade.log('ConcreteFlyweight created')
    },
    Operation: function(extrinsicState){
        return extrinsicState + this.intrinsicState
    }
});

var UnsharedConcreteFlyweight = Flyweight.extend({
    create: function(keys, flyweights){
        this.flyweights = flyweights
        this.keys = keys
        facade.log('UnsharedConcreteFlyweight created')
    },
    Operation: function(extrinsicState){
        var key, word = ''

        for(var i = 0; i < extrinsicState; i++) {
            //random key
            key = this.keys[Math.floor(Math.random() * (this.keys.length))]
            word = this.flyweights.GetFlyweight(key).Operation(word)
        }
        facade.log('UnsharedConcreteFlyweight Operation: ')
        facade.log(word)
    }
});

function init_Flyweight() {
    var flyweights = new FlyweightFactory()
    var gibberish = flyweights.CreateGibberish(['-', '+', '*'])
    gibberish.Operation(5)
    gibberish.Operation(10)
}