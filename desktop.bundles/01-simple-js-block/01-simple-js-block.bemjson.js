module.exports = {
    block : 'page',
    title : 'Title of the page',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : '01-simple-js-block.css' }
    ],
    scripts: [{ elem : 'js', url : '01-simple-js-block.js' }],
    mods : { theme : 'islands' },
    content : [
        {
            block : 'header',
            content : [
                'header content goes here'
            ]
        },
        {
            block: 'simple-js-block',
            js: true,
            content: 'This is simple-js-block',
        },
        {
            block : 'footer',
            content : [
                'footer content goes here'
            ]
        }
    ]
};
