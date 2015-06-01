

	window.Reviews = function (frame, config, app)
	{



		/* VARIABLES */


		// Reference

		var that = new window.Page(frame, 
		{
			template: 	'reviews',
			theme: 		'black',
			root: 		config.root,
			datas: 		[
				{
					name: 'reviews',
					method: 'GET',
					endpoint: '/reviews?order=created',
					loading: 1
				}
			]
		}, app);


		// Review

		that.review = null;










		
		/* METHODS */ 


		// Process data

		that.processData = function (callback)
		{

			// Process
			if(this.datas.reviews){ for(i in this.datas.reviews){ if(this.datas.reviews[i].facebook){ this.datas.reviews[i].image = 'hello'; }else{ this.datas.reviews[i].image = config.root + '/uploads/' + this.datas.reviews[i].image; } } }

			// Load template
			that.loadTemplate(callback);

		};


		// Attach events

		that.attachEvents = function (callback)
		{

			// Update DOM
			that.dom.page.title = that.dom.page.elem.find('h1');

			that.dom.page.grid = {};
			that.dom.page.grid.elem = that.dom.page.elem.find('.reviews');
			that.dom.page.grid.items = that.dom.page.grid.elem.find('.review');

			// Select a review
			that.dom.page.grid.items.click(function (e)
			{
				// Prevent default behavior
				e.preventDefault();

				// Chnage url
				window.history.pushState({object: 'Review'}, '', 'reviews/' + $(this).attr('data-id'));

				// Load review
				that.loadReview($(this).attr('data-id'));
			});

			// Call callback
			if(callback){ callback(); }

		};





		/* REVIEWS */


		// Load review

		that.loadReview = function (id)
		{

			// Get review page
			that.review = new window.Review(that.dom.frame, 
			{
				root: that.config.root,
				params: {
					id: id
				}
			}
			, app);
			
			// Load and show page
			that.review.load(function ()
			{
				// Change reviews opacity
				that.dom.page.elem.addClass('disabled');

				// Show
				that.review.show();

				// Close button
				var elem = $('<a href="#" class="close"><img src="' + that.config.root + '/assets/front/medias/images/close.svg" /></a>');
				elem.click(function (e){ e.preventDefault(); that.removeReview(); });
				that.dom.page.elem.append(elem);

			}, 
			function (progress)
			{
				console.log(progress);
			});

		};


		// Remove review

		that.removeReview = function ()
		{

			// Active reviews
			that.dom.page.elem.addClass('active').removeClass('disabled');
			setTimeout(function (){ that.dom.page.elem.removeClass('active'); that.review.dom.page.close.remove(); }, 500)

			// Remove review
			that.review.dom.page.elem.addClass('leave').removeClass('show');
			
			// Update url
			window.history.pushState({}, '', '../reviews');

			// Set review to null
			that.review = null;

		};
		




		/* RETURN */


		return that;


	};