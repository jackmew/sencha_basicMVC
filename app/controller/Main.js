Ext.define('Jackmew_MVC.controller.Main',{
    extend: 'Ext.app.Controller',
    /*
    views: ['Home','Giant','Address','Contact'],
    models:['People'],
    */
    refs: [
    	{
    	ref: 'contactForm',
    	//# means id
    	selector: '#contactForm'
    	}
    ],
    
    init: function(){
        console.log('init');

        this.control({
        	'button[action=submitContact]' : {
        			tap: 'submitContactForm'
        	}
        })

    },

    submitContactForm: function(){
    	console.log('press submit');

    	var form = this.getContactForm();

    	console.log(form);

    	form.submit({
    		url: 'contact.php'
    	});
    }
});
