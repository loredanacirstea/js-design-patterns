var Subject = Class({
    create: function() {
    },
    Attach: function(Observer){
        this.observers.push(Observer);
        facade.log('Observer attached')
    },
    Dettach: function(Observer){
        for(var i in this.observers)
            if(this.observers[i] === Observer)
                this.observers.splice(i, 1)
    },
    Notify: function(){
        facade.log('Subject Notify')
        for(var i in this.observers){
            this.observers[i].Update(this);
        }
    }
});

var ConcreteSubject = Subject.extend({
    create: function(){
        this.subjectState = null
        this.observers = []
        facade.log('ConcreteSubject created')
    },
    GetState: function(){
        return this.subjectState;
    },
    SetState: function(state){
        this.subjectState = state;
        this.Notify()
    }
});

var Observer = Class({
    create: function(){
    },
    Update: function(){
    }
});

var ConcreteObserver = Observer.extend({
    create: function(){
        this.observerState = '';
        facade.log('ConcreteObserver created')
    },
    Update: function(Subject){
        this.observerState = Subject.GetState();
        facade.log('Observer new state: ' + this.observerState)
    }
});

function init_Observer() {
    var observer1 = new ConcreteObserver()
    var observer2 = new ConcreteObserver()
    var subject = new ConcreteSubject()
    subject.Attach(observer1)
    subject.Attach(observer2)
    subject.SetState('state 1')
}