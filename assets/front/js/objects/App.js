

	window.App = function (element)
	{


		/* VARIABLES */


		// Reference

		var that = this;


		// DOM

		this.dom = {};

		this.dom.app = element;
		this.dom.head = element.find('head');
		this.dom.frame = element.find('body');
		this.dom.hamburger = element.find('.hamburger');
		this.dom.navigation = element.find('nav');
		this.dom.loader = element.find('.loader');


		// Routes

		this.routes = {};


		// Config

		this.config = {};

		this.config.root = this.dom.head.find('meta[name=root]').attr('content');


		// Current

		this.current = {};

		this.current.page = null;
		this.current.route = null;


		// Loading

		this.loading = {};
		this.loading.width = this.dom.loader.width();



		/* METHODS */


		// Init

		this.init = function (callback)
		{

			// Load CSS
			$('<link/>', 
			{
				rel: 	'stylesheet',
				type: 	'text/css',
				href: 	this.config.root + '/assets/front/styles/css/app.css'
			})
			.appendTo(this.dom.head);

			
			// Hamburger

			this.dom.hamburger.click(function (e)
			{

				// Prevent default behavior
				e.preventDefault();

				// Change button & menu state
				if($(this).hasClass('opened'))
				{
					that.dom.navigation.addClass('closed').removeClass('opened');
					that.dom.hamburger.addClass('closed').removeClass('opened');
					setTimeout(function (){ that.dom.navigation.removeClass('closed'); }, 700);
				}
				else
				{
					that.dom.navigation.addClass('opened').removeClass('closed');
					that.dom.hamburger.addClass('opened').removeClass('closed');
				}

			});


			// Navigation

			this.dom.navigation.find('a').click(function (e)
			{

				// Prevent default
				e.preventDefault();

				// Get link
				var link = that.routes[$(this).parent().attr('data-menu')];

				// Close menu
				that.dom.navigation.addClass('closed').removeClass('opened');
				that.dom.hamburger.addClass('closed').removeClass('opened');
				setTimeout(function (){ that.dom.navigation.removeClass('closed'); }, 700);
				
				// Add page
				if(that.current.route != link.page)
				{
					// Remove previous page
					that.dom.hamburger.addClass('hide');
					that.dom.frame.find('.page, .trailer').remove();

					// Change route
					window.history.pushState(link.page, '', that.config.root + '/' + link.page.url);

					// Add page
					that.load(link.page);
				}

			});

			// Callback
			if(callback){ callback(); }

		};


		// Router

		this.routing = function ()
		{
			
			// History state
			// if(window.history.state){ this.load(window.history.state); }
			
			// Url routing
			// else
			// {				
				var url = window.location.pathname.replace(this.config.root, '');
				for(route in this.routes)
				{
					if(this.routes[route].pattern.test(url)) { this.load(this.routes[route].page); break;}
				}
			// }

		};


		// Load

		this.load = function (page)
		{

			// Config page
			var config = {};
			config.root = that.config.root;
			if(page.params){ if(typeof(page.params === 'function')){ config.params = page.params(window.location.pathname.replace(this.config.root, '')); }else{ config.params = page.params; } }

			this.current.route = page;
			this.current.page = new window[page.object](this.dom.frame, config, that);
			this.current.page.load(function ()
			{
				if(that.current.page.config.theme == 'black'){ that.dom.hamburger.removeClass('hamburger-dark'); }
				that.dom.hamburger.addClass('active').removeClass('hide');
				setTimeout(function (){ that.current.page.show(); }, 400);
				if(page.execute){ page.execute(that.current.page, window.location.pathname.replace(that.config.root, '')); }
			}, 
			function (progress)
			{
				that.dom.loader.width(progress*that.loading.width);
			});

		};


	};