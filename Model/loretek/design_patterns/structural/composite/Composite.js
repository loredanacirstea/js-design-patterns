var Component = Class({
    create: function() {
    },
    Operation: function(){
    },
    Add: function(Component){
    },
    Remove: function(Component){
    },
    GetChild: function(key){
    }
});

var Leaf = Component.extend({
    create: function(name) {
        this.name = name
        facade.log('Leaf created')
    },
    Operation: function(){
        facade.log(this.name)
    }
});

var Composite = Component.extend({
    create: function(name) {
        this.name = name
        this.children = []
        facade.log('Composite created')
    },
    Operation: function(){
        facade.log('Composite Operation for: ' + this.name)
        for(var i in this.children)
            this.children[i].Operation()
    },
    Add: function(Component){
        this.children.push(Component)
    },
    Remove: function(Component){
        for(var i in this.children)
            if(this.children[i] === Component)
                this.children.splice(i, 1)
    },
    GetChild: function(key){
        return this.children[key]
    }
});


function init_Composite() {
    var composite1 = new Composite('C1')
    composite1.Add(new Leaf('L1'))
    composite1.Add(new Leaf('L2'))
    var composite2 = new Composite('C2')
    composite2.Add(composite1)
    composite1.GetChild(1).Operation()
    composite2.Operation()
}