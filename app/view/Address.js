Ext.define('Jackmew_MVC.view.Address',{
	extend: 'Ext.List',
    xtype: 'addresspage',

    config:{
        title: 'Address',
        iconCls: 'info',
        store: Ext.create('Jackmew_MVC.store.People'),
        itemTpl: '{Name}{Id}: {Email}',
        listeners: {
            itemswipe: function (list, idx, target, record, evt) {
                Ext.Msg.alert('itemswipe', record.data.name);
            }
        }
    }

})