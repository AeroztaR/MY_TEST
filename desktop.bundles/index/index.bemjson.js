module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    mods: { theme: 'islands' },
    content: [
        {
            block: 'card',
            mix: { block: 'clearfix' },
            content: [
                {
                    block: 'logo',
                    tag: 'a',
                    attrs: {href:'http://www.mediabusiness.pro'}            
                },
                {
                    block: 'icon', 
                    mods: { map: true },
                    content: 
                        {
                            elem: 'title',
                            content: 'Карта'
                        }
                },
                {
                    elem: 'header',
                    content: 'Издательство «Медиа-Бизнес»'
                },   
                {
                    elem: 'site',
                    content: 'Сайт::'                    
                },
                {
                    elem: 'slink',
                    content: 'http://www.mediabusiness.pro',
                    tag: 'a',
                    attrs: {href: 'http://www.mediabusiness.pro'}
                },
                {
                    elem: 'mail',
                    content: 'E-mail:' 
                },
                {
                    elem: 'mlink',
                    content: 'info@glavportal.com',
                    attrs: {href: "mailto:info@glavportal.com"},
                    tag: 'a'
                },
                {
                    elem: 'phone',
                    content: 'Телефон:'
                },
                {
                    elem: 'number',
                    content: '+7(343)237-237-4'
                },
                {
                    elem: 'addres',
                    content: 'Адрес:'
                },
                {
                    elem: 'adr',
                    content: '620075, г. Екатеринбург, ул. Карла Либкнехта, д. 22, офис 315'
                }
            ]
        },
    ]
};
