Ext.define('Jackmew_MVC.store.People',{
    extend: 'Ext.data.Store',
    config:{
        model: 'Jackmew_MVC.model.People',
        autoLoad: true,
        proxy:{
            type:'ajax',
            url:'app/data/People.json',
            reader:{
                type: 'json',
                rootProperty: 'Person'
            }
        }
    }
});
