

	window.News = function (frame, config, app)
	{


		/* VARIABLES */


		// Reference

		var that = new window.Page(frame, 
		{
			template: 	'news',
			theme: 		'white',
			root: 		config.root,
			datas: 		[
				{
					name: 'news',
					method: 'GET',
					endpoint: '/news',
					loading: 1
				}
			]
		}, app);







		
		/* METHODS */ 


		// Process data

		that.processData = function (callback, progress)
		{

			// Process
			if(that.datas.news){ for(index in that.datas.news){ that.datas.news[index].image = that.config.root + '/uploads/' + that.datas.news[index].image; } }

			// Load template
			that.loadTemplate(callback, progress);

		};


		// Attach events

		that.attachEvents = function (callback)
		{

			// Update DOM
			that.dom.page.articles = that.dom.page.elem.find('article');

			// Scroll

			// Article click
			that.dom.page.articles.find('a').click(function (e)
			{
				// Prevent default behavior
				e.preventDefault();

				// Create article object
				var id = $(this).parent().attr('data-id');

				// Leave previous page
				that.app.current.page.dom.page.elem.addClass('leave');
				
				// Get new page
				that.app.current.route = that.app.routes['article'].page;
				that.app.current.page = new window[that.app.current.route.object](that.dom.frame, 
				{
					root: that.config.root,
					params: {
						id: id
					}
				}, that);
				that.app.current.page.load(function ()
				{
					setTimeout(function ()
					{
						// Update url
						var link = that.app.routes['article'];
						window.history.pushState({}, '', 'news/' + id);

						// Show page
						that.dom.frame.find('.page.page-news').remove();
						that.app.current.page.show();
						that.app.dom.hamburger.removeClass('hamburger-dark');
					}, 700);
				}, 
				function (progress)
				{
					console.log(progress);
				});
			});

			// Call callback
			if(callback){ callback(); }

		};

		




		/* RETURN */


		return that;


	};