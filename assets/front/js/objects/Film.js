

	window.Film = function (frame, config, app)
	{



		/* VARIABLES */


		// Reference

		var that = new window.Page(frame, 
		{
			template: 	'film',
			theme: 		'white',
			root: 		config.root,
			datas: 		[
				{
					name: 		'informations',
					method: 	'GET',
					endpoint: 	'/informations',
					loading: 0.3
				},
				{
					name: 		'actors',
					method: 	'GET',
					endpoint: 	'/actors',
					loading: 0.6
				}, 
				{
					name: 		'photos',
					method: 	'GET',
					endpoint: 	'/photos',
					loading: 1
				}
			]
		}, app);


		// Slider

		that.slider = {};
		that.slider.current = 0;
		that.slider.length = null;






		
		/* METHODS */ 


		// Process data

		that.processData = function (callback)
		{

			// Process
			if(that.datas.actors){ for(index in that.datas.actors){ that.datas.actors[index].image = that.config.root + '/uploads/' + that.datas.actors[index].image; } }
			if(that.datas.photos){ for(index in that.datas.photos){ that.datas.photos[index].url = that.config.root + '/uploads/' + that.datas.photos[index].url; } }

			// Load template
			that.loadTemplate(callback);

		};


		// Attach events

		that.attachEvents = function (callback)
		{

			// Update DOM
			that.dom.page.slider = {};
			that.dom.page.slider.elem = that.dom.page.elem.find('.slider');
			that.dom.page.slider.slides = that.dom.page.slider.elem.find('li');
			that.dom.page.slider.previous = that.dom.page.slider.elem.parent().find('.controls .previous');
			that.dom.page.slider.next = that.dom.page.slider.elem.parent().find('.controls .next');

			// Init slider
			that.slider.length = that.dom.page.slider.slides.length;
			that.dom.page.slider.previous.click(function (e)
			{
				e.preventDefault();
				var previous = that.slider.current;
				if(that.slider.current == 0){ that.slider.current = that.slider.length - 1; }else{ that.slider.current--; }
				that.goToSlide(previous, that.slider.current);
			});
			that.dom.page.slider.next.click(function (e)
			{
				e.preventDefault();
				var previous = that.slider.current;
				if(that.slider.current == that.slider.length - 1){ that.slider.current = 0; }else{ that.slider.current++; }
				that.goToSlide(previous, that.slider.current);
			});

			// Call callback
			if(callback){ callback(); }

		};


		// Slider

		that.goToSlide = function (previous, slide)
		{

			// Get slides
			var previousSlide = that.dom.page.slider.elem.find('li:nth-child(' + (previous+1) + ')');
			var nextSlide = that.dom.page.slider.elem.find('li:nth-child(' + (slide+1) + ')');
			
			// Append next slide
			nextSlide.css({ opacity: 1 });
			previousSlide.css({ opacity:0 });

		};
		




		/* RETURN */


		return that;


	};