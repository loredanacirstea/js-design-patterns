var Singleton = Class({
    singleton: true,
    create: function(data){
        this.data = data
        facade.log("Singleton class created");
    },
    SingletonOperation: function() {
        facade.log('SingletonOperation')
    },
    get:{
        GetSingletonData: function(){
            return this.data
        }
    }
});

function init_Singleton() {
    var singleton1 = Singleton.instance("data1")
    var singleton2 = Singleton.instance("data2")
    facade.log(singleton1.GetSingletonData)
    facade.log(singleton2.GetSingletonData)
    facade.log(singleton1 instanceof Singleton)
    facade.log(singleton2 instanceof Singleton)
    facade.log(singleton1 === singleton2)
}