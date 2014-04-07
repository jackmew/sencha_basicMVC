Ext.define('Jackmew_MVC.view.Viewport',{
	extend: 'Ext.TabPanel',
	//Viewport to instantiate view
	config:{
	    //change to full screen
	    fullscreen: true,
	    //change Ext.TabPanel to buttom
	    tabBarPosition: 'bottom',
	    
	    items:[
	        {   
	            xtype: 'homePanel'
	        },
	        {
	            xtype: 'giantCarousel'
	        },
	        {
	        	xtype: 'addresspage'
	        	/*
	        	store:{
	        		fields: ['title','url'],
	        		data: [
	        			{title:'Ext Scheduler 2.0',url:'ext-scheduler-2.0'},
	        			{title:'Previewing Sencha Touch 2',url: 'sencha-touch-2-what-to-expect'},
	        			{title:'Documentation in Ext JS 4',url:'new-ext-js-4-Document-center'}
	        		]
	        	}	
	        	*/
	        },
	        {
	        	xtype: 'contactPage'
	        },
	        
	        	//second tag page
                {
                    xtype: 'nestedlist',
                    title: 'Google fetch blog',
                    iconCls: 'bookmarks',
                    displayField: 'title',

                    store: {
                        type: 'tree',

                        fields: [
                            'title', 'link', 'author', 'contentSnippet', 'content',
                            {name: 'leaf', defaultValue: true}
                        ],

                        root: {
                            leaf: false
                        },

                        proxy: {
                            type: 'jsonp',
                            url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://rss.slashdot.org/Slashdot/slashdot ',
                            reader: {
                                type: 'json',
                                rootProperty: 'responseData.feed.entries'
                            }
                        }
                    },

                    detailCard: {
                        xtype: 'panel',
                        scrollable: true,
                        styleHtmlContent: true
                    },

                    listeners: {
                        itemtap: function(nestedList, list, index, element, post) {
                            this.getDetailCard().setHtml(post.get('content'));
                        }
                    }
               
                
	        }
	        

	    ]
	}
      

})