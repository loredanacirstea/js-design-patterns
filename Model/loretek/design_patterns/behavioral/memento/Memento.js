var Originator = Class({
    create: function() {
        facade.log('Originator created')
        this.state = 'a';
        facade.log('State= ' + this.state)
    },
    SetMemento: function(Memento){
        this.state = Memento.GetState()
        facade.log('State= ' + this.state)
    },
    CreateMemento: function(state){
        return new Memento(state);
    }
});

var Memento = Class({
    create: function(state) {
        this.state = state
        facade.log('Memento created. State= ' + this.state)
    },
    GetState: function(){
        return this.state;
    },
    SetState: function(state){
        this.state = state;
    }
});

var Caretaker = Class({
    create: function() {
        facade.log('Caretaker created')
        this.mementos = []
    },
    AddMemento: function(memento) {
        facade.log('Caretaker AddMemento')
        this.mementos.push(memento)
    },
    GetMemento: function() {
        return this.mementos[this.mementos.length-1]
    }
});

function init_Memento() {
    caretaker = new Caretaker()
    originator = new Originator()
    caretaker.AddMemento(originator.CreateMemento('b'))
    originator.SetMemento(caretaker.GetMemento())
}