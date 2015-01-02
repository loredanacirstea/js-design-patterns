var Director = Class({
    create: function() {
        this.created = true;
    },
    Construct: function(){
    }
});

var Builder = Class({
    create: function() {
        this.created = true;
    },
    BuildPart: function(){

    }
});

var ConcreteBuilder = Builder.extend({
    create: function() {
        this.created = true;
    },
    BuildPart: function(){

    },
    get:{
        GetResult: function(){
            return '';
        }

    }
});