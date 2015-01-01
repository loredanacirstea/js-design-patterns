var Singleton = Class({
    singleton: true,
    create: function(SingletonData){
    	this.SingletonData = SingletonData;
    },
    SingletonOperation: function() {
        return 'a';
    },
    get:{
    	GetSingletonData: function(){
    		return SingletonData;
    	}
    }
});
