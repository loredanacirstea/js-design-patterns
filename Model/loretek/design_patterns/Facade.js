require(['Model/loretek/design_patterns/creational/singleton/Singleton.js']);

var Facade = Class({
    create: function() {
        this.log("Facade class created");
        this.htmlid = null;
    },
    log: function(text){
        if(typeof this.htmlid === null){
            console.log(text);
        }
        else{
            $('#'+this.htmlid).append(text+'</br>');
        }
    },
    test_dp: function(dp){
        switch(dp){
            case "Facade":
                this.htmlid = "test_Facade";
                this.log("Facade is already created");
                break;
            case "AbstractFactory": 
                this.htmlid = "test_AbstractFactory";
                var dpclass = new AbstractFactory();
                this.log("Not yet implemented");
                break;
            case "Builder":
                this.htmlid = "test_Builder";
                var dpclass = new Builder();
                this.log("Not yet implemented");
                break;
            case "Factory":
                this.htmlid = "test_Factory";
                this.log("Not yet implemented");
                break;
            case "Prototype":
                this.htmlid = "test_Prototype";
                var dpclass = new Prototype();
                this.log("Not yet implemented");
                break;
            case "Singleton":
                this.htmlid = "test_Singleton";
                var dpclass = new Singleton("data");
                var dpclass2 = new Singleton("data");
                this.log(dpclass == dpclass2);
                break;
            case "Adapter":
                this.htmlid = "test_Adapter";
                var dpclass = new Adapter();
                this.log("Not yet implemented");
                break;
            case "Bridge":
                this.htmlid = "test_Bridge";
                this.log("Not yet implemented");
                break;
            case "Composite":
                this.htmlid = "test_Composite";
                var dpclass = new Composite();
                this.log("Not yet implemented");
                break;
            case "Decorator":
                this.htmlid = "test_Decorator";
                var dpclass = new Decorator();
                this.log("Not yet implemented");
                break;
            case "Flyweight":
                this.htmlid = "test_Flyweight";
                var dpclass = new Flyweight();
                this.log("Not yet implemented");
                break;
            case "Proxy":
                this.htmlid = "test_Proxy";
                var dpclass = new Proxy();
                this.log("Not yet implemented");
                break;
            case "ChainofResponsibility":
                this.htmlid = "test_ChainofResponsibility";
                this.log("Not yet implemented");
                break;

            case "Command":
                this.htmlid = "test_Command";
                var dpclass = new Command();
                this.log("Not yet implemented");
                break;
            case "Interpreter":
                this.htmlid = "test_Interpreter";
                this.log("Not yet implemented");
                break;
            case "Iterator":
                this.htmlid = "test_Iterator";
                var dpclass = new Iterator();
                this.log("Not yet implemented");
                break;
            case "Mediator":
                this.htmlid = "test_Mediator";
                var dpclass = new Mediator();
                this.log("Not yet implemented");
                break;
            case "Memento":
                this.htmlid = "test_Memento";
                var dpclass = new Memento();
                this.log("Not yet implemented");
                break;
            case "Observer":
                this.htmlid = "test_Observer";
                var dpclass = new Observer();
                this.log("Not yet implemented");
                break;
            case "State":
                this.htmlid = "test_State";
                var dpclass = new State();
                this.log("Not yet implemented");
                break;
            case "Strategy":
                this.htmlid = "test_Strategy";
                var dpclass = new Strategy();
                this.log("Not yet implemented");
                break;
            case "TemplateMethod":
                this.htmlid = "test_TemplateMethod";
                this.log("Not yet implemented");
                break;
            case "Visitor":
                this.htmlid = "test_Visitor";
                var visitor1 = new ConcreteVisitor1();
                var visitor2 = new ConcreteVisitor2();
                var element = new ConcreteElementA();
                element.Accept(visitor1);
                element.Accept(visitor2);
                break;
            default:
                console.log("nothing to test");
        }
    }
});