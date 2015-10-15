var Director = Class({
    create: function() {
        this.structure = ['Maze','Wall','Door'];
        facade.log("Director class created");
    },
    Construct: function(){
        for(var all in this.structure){
            builder = new ConcreteBuilder();
            builder.BuildPart(this.structure[all]);
            builder.GetResult()
        }
    }
});

var Builder = Class({
    create: function() {
    },
    BuildPart: function(){
    }
});

var ConcreteBuilder = Builder.extend({
    create: function() {
        facade.log("ConcreteBuilder1 class created");
    },
    BuildPart: function(rawmaterial){
        facade.log("ConcreteBuilder BuildPart()");
        material = rawmaterial
        this.product = new Product(material)
    },
    GetResult: function(){
        facade.log(JSON.stringify(this.product))
        return this.product
    }
});

var Product = new Class({
    create: function(material){
        this.data = material
        facade.log("Product class created");
    }
});

function init_Builder() {
    director = new Director()
    director.Construct()
}