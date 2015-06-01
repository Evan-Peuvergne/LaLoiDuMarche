

	window.Page = function (frame, config, app)
	{



		/* VARIABLES */


		// Reference

		var that = this;

		this.app = app;


		// DOM

		this.dom = {};

		this.dom.frame = frame;

		this.dom.page = {};
		this.dom.page.elem = null;

		this.dom.loader = frame.find('.loader');
		

		// Loading

		this.loading = {};
		this.loading.width = this.dom.frame.width();
		this.loading.slices = 0;


		// Config

		this.config = {};
		this.config = $.extend(that.config, config);


		// Datas

		this.datas = {};




		
		/* METHODS */


		// Load

		this.load = function (callback, progress)
		{
			// Start loading
			this.dom.loader.addClass('loading');

			// Get data
			if(this.config.datas && this.config.datas.length > 0){ this.loadData(1, this.config.datas[0], callback, progress); }
			else{ this.dom.loader.width(that.loading.width); setTimeout(function (){ that.loadTemplate(callback); }, 300); }

		};


		// Load data

		this.loadData = function (slice, data, callback, progress)
		{

			// Attributes
			var attributes = {};
			attributes.type = data.method;
			attributes.url = this.config.root + '/api' + data.endpoint;
			if(data.params){ attributes.data = data.params; }
			attributes.xhr = function()
			{
				var xhr = new window.XMLHttpRequest();
				
				//Upload progress
				xhr.upload.addEventListener("progress", function(evt){
					if (evt.lengthComputable) {
						var percentage = (evt.loaded / evt.total) * data.loading;
						if(progress){ progress(percentage); }
					}
				}, false);
			
				//Download progress
				xhr.addEventListener("progress", function(evt){
					if (evt.lengthComputable) {
						var percentage = (evt.loaded / evt.total) * data.loading;
						if(progress){ progress(percentage); }
					}
				}, false);
				
				return xhr;
			};

			// Request
			var request = $.ajax(attributes);

			// Done
			request.done(function (result)
			{
				that.datas[data.name] = result;
				console.log(progress);
				progress(data.loading);
				if(slice < that.config.datas.length)
				{
					that.loadData(slice+1, that.config.datas[slice], callback, progress);
				}
				else{ that.processData(callback); }
			});

		};


		// Process data

		this.processData = function (callback)
		{

			this.loadTemplate(callback);

		};


		// Load template

		this.loadTemplate = function (callback)
		{
			// Load template
			var request = $.ajax({
				type: 'GET',
				contentType: 'html',
				url: this.config.root + '/assets/front/templates/' + this.config.template + '.tpl',
				cache: false
			});

			// Success
			request.done(function (data)
			{
				// Fill template
				var template = Handlebars.compile(data);
				var html = template(that.datas);
				that.dom.page.elem = $(html);

				// Attach events
				that.attachEvents(callback);
			});

		};


		// Attach events

		this.attachEvents = function (callback)
		{

			// Attach events
			// ...

			// Callback
			if(callback){ callback(); }

		};


		// Show

		this.show = function ()
		{

			// Append page
			this.dom.frame.append(that.dom.page.elem);

			// Change 
			if(this.config.theme && this.config.theme == 'white')
			{
				$('.hamburger').addClass('hamburger-dark');
			}

			// Remove loader
			this.dom.loader.addClass('loaded').removeClass('loading');

			// Launch page animations
			this.dom.page.elem.addClass('show');
			setTimeout(function (){ that.dom.loader.width(0).removeClass('loaded'); })

			// Add scroll if necessary
			if(this.dom.page.elem.hasClass('scroll'))
			{
				this.dom.page.elem.jScrollPane({
					contentWidth: '0px',
					verticalDragMaxHeight: 100,
					verticalDragMinHeight: 100
				});
				if(this.dom.page.elem.hasClass('not-horizontal')){
					this.dom.page.elem.css({ 'overflow-x': 'visible' });
				}
			}

		};




		/* RETURN */


		return this;



	};