var AbstractClass = Class({
    create: function(){
    },
    TemplateMethod: function(){
        this.PrimitiveOperation1();
        this.PrimitiveOperation2();
    },
    PrimitiveOperation1: function(){
    },
    PrimitiveOperation2: function(){
    }  
});

var ConcreteClass = AbstractClass.extend({
    create: function(){
        facade.log("ConcreteClass created")
    },
    PrimitiveOperation1: function(){
        facade.log('ConcreteClass PrimitiveOperation1')
    },
    PrimitiveOperation2: function(){
        facade.log('ConcreteClass PrimitiveOperation2')
    }  
});

function init_TemplateMethod() {
    class1 = new ConcreteClass()
    class1.TemplateMethod()
}  