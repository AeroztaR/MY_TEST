modules.define('icon', [
    'i-bem-dom', 'loader_type_js'
], function(
    provide, bemDom, loader
) {
    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            'js': {
                'inited': function() {
                    loader('//api-maps.yandex.ru/1.1/index.xml', function() {
                        YMaps.jQuery(function () {
 
                        var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);
                        map.setCenter(new YMaps.GeoPoint(37.64, 55.76), 10);
                    })
                    });
                }
            }
        }
    }));
});