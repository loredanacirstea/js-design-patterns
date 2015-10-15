var Subject = Class({
    create: function() {
    },
    Request: function(){
    }
});

var RealSubject = Subject.extend({
    create: function() {
        facade.log('RealSubject created')
    },
    Request: function(){
        facade.log('RealSubject handles request')
    }
});

var Proxy = Subject.extend({
    create: function() {
        facade.log('Proxy created')
    },
    Request: function(){
        this.realSubject = new RealSubject();
        this.realSubject.Request();
    }
});

function init_Proxy() {
    var proxy = new Proxy()
    proxy.Request()
}