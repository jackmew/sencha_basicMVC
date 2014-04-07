Ext.define('Jackmew_MVC.view.Home',{
    extend: 'Ext.Panel',
    xtype: 'homePanel',

    config:{
        title: 'Home',
        iconCls: 'home',
        cls: 'home',
        html: [
            '<img width="60%" src="http://staging.sencha.com/img/sencha.png" />',
            '<h1>Jack uses Sencha Touch first time</h1>',
            '</br>',
            "<p>We're creating the Getting Started app, which demonstrates how ",
            "to use tabs, lists, and forms to create a simple app.</p>",
            '<h2>Sencha Touch</h2>'
        ].join("")

    }

})