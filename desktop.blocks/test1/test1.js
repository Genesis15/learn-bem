modules.define('test1', ['i-bem__dom', 'events__channels'], function(provide, BEMDOM, channels) {
	console.log('block test1 module');
	provide(BEMDOM.decl(this.name, {
		onSetMod: {
			js: {
				'inited': function() {
                	this.bindTo('click', this._onClick);
                	console.log("inited");
            	}
			}
		},
		 _onClick : function() {
		 	console.log("click");
		 	channels('app-channel').emit('loading-start');
		 }
	}
));
	
});