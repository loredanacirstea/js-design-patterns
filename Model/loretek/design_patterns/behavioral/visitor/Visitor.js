var Visitor = Class({
    create: function(){
        this.created = true;
    },
    VisitConcreteElementA: function(ConcreteElementA){
    },
    VisitConcreteElementB: function(ConcreteElementB){
    }  
});

var ConcreteVisitor1 = Visitor.extend({
    VisitConcreteElementA: function(ConcreteElementA){
    },
    VisitConcreteElementB: function(ConcreteElementB){
    }  
});

var ConcreteVisitor2 = Visitor.extend({
    VisitConcreteElementA: function(ConcreteElementA){
    },
    VisitConcreteElementB: function(ConcreteElementB){
    }  
});

var ObjectStructure = Class({
    create: function(){
        this.created = true;
    }
});

var Element = Class({
    create: function(){
        this.created = true;
    },
    Accept: function(visitor){
    }
});

var ConcreteElementA = Element.extend({
    Accept: function(visitor){
        visitor.VisitConcreteElementA(this);
    },
    OperationA: function(){  
    }
});

var ConcreteElementB = Element.extend({
    Accept: function(visitor){
        visitor.VisitConcreteElementB(this);
    },
    OperationB: function(){  
    }
});