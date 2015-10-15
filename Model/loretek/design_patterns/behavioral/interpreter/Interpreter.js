var Context = Class({
    create: function() {
        this.created = true;
    }
});

var AbstractExpression = Class({
    create: function() {
        this.created = true;
    },
    Interpret: function(Context){
    }
});

var TerminalExpression = AbstractExpression.extend({
	Interpret: function(Context){
    }
});

var NonterminalExpression = AbstractExpression.extend({
	Interpret: function(Context){
    }
});

function init_Interpreter() {
    facade.log('Not implemented')
}