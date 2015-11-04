modules.define('call-button', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js' : {
            'inited' : function() {
                // при инициализации устанавливаем обработчик на onClick
                this.bindTo('click', function() {
                    // добавить модификатор calling
                    this.setMod('calling');
                });
            }
        },
        // если установлен модификатор calling
        'calling' : function() {
            // меняем текс ссылки
            this.elem('link').text('Звоним ...');
        }
    }
}));

});