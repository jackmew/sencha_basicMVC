/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides


Ext.Loader.setConfig({
    enable: true
});

Ext.application({
    //create a single global namespace for your entire app
    name: 'Jackmew_MVC',

    requires: [
        'Ext.field.*',
        'Ext.form.*',
        'Ext.Img',
        'Ext.data.proxy.JsonP',
        'Ext.dataview.NestedList',
        //weird... => I think need to using "stores: ['People']"
        'Jackmew_MVC.store.People'
    ],
    //but it doesn't work.
    //stores: ['People'],
    controllers: ['Main'],
    views: ['Address','Contact','Giant','Home','Viewport'],
    
    models: ['People'],


    launch: function() {
        Ext.create('Jackmew_MVC.view.Viewport');
    }
























});
