module.exports = {
    block : 'page',
    title : 'Block communication',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : '02-loading-block.css' }
    ],
    scripts: [{ elem : 'js', url : '02-loading-block.js' }],
    mods : { theme : 'islands' },
    content : [
        {
            block : 'header',
            content : [
                'header content goes here'
            ]
        },
        {
            block: 'loading-block',
            js: true,
            content: 'This is loading-block',
        },
	{
            block: 'test1',
            js: true,
            content: 'This is clickable test1 block',
        },
        {
            block : 'footer',
            content : [
                'footer content goes here'
            ]
        }
    ]
};
