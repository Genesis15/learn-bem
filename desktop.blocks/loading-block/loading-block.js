modules.define('loading-block', ['i-bem__dom', 'events__channels'], function(provide, BEMDOM, channels) {
	provide(BEMDOM.decl(this.name, {
		onSetMod: {
			js: {
				inited: function() {
					// подписываемся на канал
					channels('app-channel')
						// передаем наш блок (this) в кач-ве параметра в обработчик
						.on('loading-start', this, function(e, data) {
							var _this = e.data;
							console.log('Get event @loading-start@ ' + data);
							_this.setMod('visible');
							// решение отсюда https://ru.bem.info/forum/545/
						 	// setTimeout(() => e.data.toggleMod('visible'), 1000);
						 	setTimeout(function(){
                				_this.toggleMod('visible');
                				console.log('Истекло время ожидания получения данных');
            				}, 1000);
					});
				}
			}
		}
	}
));
	
});