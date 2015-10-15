var Iterator = Class({
    create: function() {
    },
    First: function(){
    },
    Next: function(){
    },
    IsDone: function(){
    },
    CurrentItem: function(){
    }
});

var ConcreteIterator = Iterator.extend({
    create: function(aggregate) {
        facade.log('ConcreteIterator created')
        this.index = 0
        this.aggregate = aggregate
    },
    First: function(){
        return this.aggregate.list[0]
    },
    Next: function(){
        this.index += 2
        return this.aggregate.list[this.index]
    },
    CurrentItem: function(){
        return this.aggregate.list[this.index]
    }
});

var Aggregate = Class({
    create: function() {
    },
    CreateIterator: function(){
    }
});

var ConcreteAggregate = Aggregate.extend({
    create: function(list) {
        this.list = list
        facade.log('ConcreteAggregate created')
    },
	CreateIterator: function(){
		this.iterator = new ConcreteIterator(this);
    }
});

function init_Iterator() {
    var aggregate = new ConcreteAggregate([0,1,2,3,4,5,6,7])
    aggregate.CreateIterator()
    facade.log(aggregate.iterator.First())
    facade.log(aggregate.iterator.Next())
    facade.log(aggregate.iterator.CurrentItem())
}