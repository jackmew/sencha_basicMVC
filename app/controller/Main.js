Ext.define('Jackmew_MVC.controller.Main',{
    extend: 'Ext.app.Controller',

    // requires: [
    //     'Jackmew_MVC.store.People'
    // ],
    
    init: function(){
        console.log('init');

    },


    config:{
        refs:{
        	//select form
        	contactForm: '#contactForm',
            //select button subimt
            submitBtn: 'button[action=submitContact]'
        },
        control: {
            //bind event for botton submit
            submitBtn:{
                tap: 'doSubimt'
            }
        }     
    },
    doSubimt: function(){
    	console.log('press submit');

    	var form = this.getContactForm();

    	console.log(form);

    	form.submit({
    		url: 'contact.php'
    	});
    }
});
