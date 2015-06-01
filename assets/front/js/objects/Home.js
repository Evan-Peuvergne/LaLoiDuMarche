

	window.Home = function (frame, config, app)
	{



		/* VARIABLES */


		// Reference

		var that = this;

		this.app = app;


		//  DOM

		this.dom = {};

		this.dom.frame = frame;

		this.dom.page = {};
		this.dom.page.elem = $('<div class="page page-home"><div class="container"><div class="title animate"><h1>La <span>loi</span> du marché</h1><h2>with <span>Vicent Lindon</span></h2><h2>by <span>Stéphane Brizé</span></h2></div><a href="#" class="btn btn-trailer animate"><span>Trailer</span></a></div></div>');
		this.dom.page.btnTrailer = this.dom.page.elem.find('.btn-trailer');

		this.dom.trailer = {};
		this.dom.trailer.elem = $('<div class="trailer"><video><source src="' + config.root + '/assets/front/medias/videos/trailer.mp4"><source src="' + config.root + '/assets/front/medias/videos/trailer.ogg"><source src="' + config.root + '/assets/front/medias/videos/trailer.webm"></video><div class="frame"></div><a class="close" href="#"><img src="' + config.root + '/assets/front/medias/images/close.svg" alt=""></a></div>');
		this.dom.trailer.video = this.dom.trailer.elem.find('video').get(0);
		this.dom.trailer.close = this.dom.trailer.elem.find('.close');

		
		// Config

		this.config = config;


		
		/* METHODS */


		// Load

		this.load = function (callback)
		{

			// Click on trailer button
			this.dom.page.btnTrailer.click(function (e)
			{
				// Prevent default behavior
				e.preventDefault();

				// Show trailer
				that.dom.trailer.elem.addClass('active');
				that.dom.trailer.video.play();
			});

			// Close trailer
			this.dom.trailer.close.click(function (e)
			{
				that.dom.trailer.elem.addClass('hide');
				setTimeout(function ()
				{
					that.dom.trailer.elem.removeClass('active').removeClass('hide');
					that.dom.trailer.video.pause();
					that.dom.trailer.video.currentTime = 0; 
				}, 1000);
			});

			callback();

		};


		// Show

		this.show = function ()
		{

			this.dom.frame.append(this.dom.page.elem);
			this.dom.frame.append(this.dom.trailer.elem);
			this.dom.page.elem.addClass('show');
			$('.hamburger-dark').removeClass('hamburger-dark');

		};



	};