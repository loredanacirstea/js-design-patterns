var Visitor = Class({
    create: function(){
    },
    VisitConcreteElementA: function(ConcreteElementA){
    },
    VisitConcreteElementB: function(ConcreteElementB){
    }  
});

var ConcreteVisitor1 = Visitor.extend({
    create: function(){
        facade.log("ConcreteVisitor1 created");
    },
    VisitConcreteElementA: function(ConcreteElementA){
        facade.log("ConcreteVisitor1 visited ConcreteElementA");
    },
    VisitConcreteElementB: function(ConcreteElementB){
        facade.log("ConcreteVisitor1 visited ConcreteElementB");
    }  
});

var ConcreteVisitor2 = Visitor.extend({
    create: function(){
        facade.log("ConcreteVisitor2 created");
    },
    VisitConcreteElementA: function(ConcreteElementA){
        facade.log("ConcreteVisitor2 visited ConcreteElementA");
    },
    VisitConcreteElementB: function(ConcreteElementB){
        facade.log("ConcreteVisitor2 visited ConcreteElementB");
    }  
});

var ObjectStructure = Class({
    create: function(){
        facade.log("ObjectStructure created");
    }
});

var Element = Class({
    create: function(){
    },
    Accept: function(visitor){
    }
});

var ConcreteElementA = Element.extend({
    create: function() {
        facade.log("ConcreteElementA created");
    },
    Accept: function(visitor){
        visitor.VisitConcreteElementA(this);
    },
    OperationA: function(){
        facade.log("ConcreteElementA OperationA");  
    }
});

var ConcreteElementB = Element.extend({
    create: function() {
        facade.log("ConcreteElementB created");
    },
    Accept: function(visitor){
        visitor.VisitConcreteElementB(this);
    },
    OperationB: function(){
        facade.log("ConcreteElementB OperationB");  
    }
});

function init_Visitor() {
    visitor1 = new ConcreteVisitor1();
    visitor2 = new ConcreteVisitor2();
    elementA = new ConcreteElementA();
    elementB = new ConcreteElementB();
    elementA.Accept(visitor1);
    elementB.Accept(visitor2);
}