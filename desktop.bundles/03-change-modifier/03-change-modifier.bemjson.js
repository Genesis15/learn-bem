module.exports = {
    block : 'page',
    title : 'Changing modifier after click',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : '03-change-modifier.min.css' },
    ],
    scripts: [{ elem : 'js', url : '03-change-modifier.min.js' }],
    //mods : { theme : 'islands' },
    content : [
        {
            block: 'content',
            attrs: { style: 'padding: 30px' },
            content: [
                {
                    block: 'spin-btn',
                    //icon: '&#128222;',
                    text: 'Звони!',
                    hint: 'Менеджер ответит через 59 сек.'
                },
                {
                    block: 'call-button',
                    mix: { block: 'animated-button', mods: { 'big': true } },
                    content: 'Бесплатно позвонить другу'
                }
            ]
        }
    ]
};
