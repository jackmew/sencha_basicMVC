Ext.define('Jackmew_MVC.view.Giant',{
    extend: 'Ext.Carousel',
    xtype: 'giantCarousel',

    config:{
        title: 'Giant',
        iconCls: 'star',
        items: [
            {
                xtype: 'image',
                src: 'resources/images/image1'
            },
            {
                xtype: 'image',
                src: 'resources/images/image2'
            }
        ]

    }

})