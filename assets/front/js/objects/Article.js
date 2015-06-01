

	window.Article = function (frame, config, app)
	{


		/* VARIABLES */


		// Reference

		var that = new window.Page(frame, 
		{
			template: 	'article',
			theme: 		'black',
			root: 		config.root,
			datas: 		[
				{
					name: 		'article',
					method: 	'GET',
					endpoint: 	'/news/' + config.params.id,
					loading: 1
				}
			]
		}, app);







		
		/* METHODS */ 


		// Process data

		that.processData = function (callback, progress)
		{

			// Process
			if(this.datas.article.image){ this.datas.article.image = that.config.root + '/uploads/' + this.datas.article.image; }

			// Load template
			that.loadTemplate(callback, progress);

		};


		// Attach events

		that.attachEvents = function (callback)
		{

			// Update views number
			$.ajax({
				type: 'PUT',
				url: that.config.root + '/api/news/' + config.params.id + '/views'
			});

			// Call callback
			if(callback){ callback(); }

		};

		




		/* RETURN */


		return that;


	};