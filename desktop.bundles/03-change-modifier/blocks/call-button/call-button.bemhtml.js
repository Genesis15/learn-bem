block('call-button')(
    // тег <span></span>
    tag()('span'),
    // определим содержимое
    content()(function() {
        // контент состоит из того, что возвращает функция
        return {
            // возвращаем один элемент link c содержимым content
            elem: 'link',
            content: this.ctx.content
        };
    }),
    // доопределяем элемент link
    elem('link')(
        tag()('a')
    )
);