Ext.define('Jackmew_MVC.model.People',{
    extend: 'Ext.data.Model',
    config:{
        idProperty: 'Id',
        fields:[
            { name: 'Id', type: 'int'},
            { name: 'Name', type: 'string'},
            { name: 'Email', type: 'string'}
        ]
    }
});
