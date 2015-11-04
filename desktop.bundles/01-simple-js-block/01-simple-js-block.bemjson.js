module.exports = {
    block : 'page',
    title : 'A simple JavaSscript empowered BEM block',
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
            block: 'simple-js-block',
            js: true,
            content: 'This is simple-js-block',
        }
    ]
};
