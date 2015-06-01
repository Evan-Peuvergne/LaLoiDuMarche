

	window.Review = function (frame, config, app)
	{



		/* VARIABLES */


		// Reference

		var that = new window.Page(frame, 
		{
			template: 	'review',
			theme: 		'black',
			root: 		config.root,
			datas: 		[
				{
					name: 'review',
					method: 'GET',
					endpoint: '/reviews/' + config.params.id
				},
				{
					name: 'responses',
					method: 'GET',
					endpoint: '/reviews/' + config.params.id + '/responses'
				}
			]
		}, app);







		
		/* METHODS */ 


		// Process data

		that.processData = function (callback)
		{

			// Process
			if(that.datas.review.image){ that.datas.review.image = that.config.root + '/uploads/' + that.datas.review.image; }

			// Load template
			that.loadTemplate(callback);

		};


		// Attach events

		that.attachEvents = function (callback)
		{

			// Update DOM
			that.dom.page.close = that.dom.page.elem.find('.close');

			that.dom.page.form = {};
			that.dom.page.form.elem = that.dom.page.elem.find('form.review-response');
			that.dom.page.form.message = that.dom.page.form.elem.find('textarea');

			that.dom.page.responses = that.dom.page.elem.find('.review-responses');
			
			// Close review
			that.dom.page.close.click(function (e)
			{
				// Prevent default behavior
				e.preventDefault();

				// Action
				alert('hello');
			});

			// Submit response
			that.dom.page.form.elem.submit(function (e)
			{
				// Prevent default behavior
				e.preventDefault();

				// Submit response
				that.submitAnswer(that.dom.page.form.message.val());

			});

			// Callbak
			if(callback){ callback(); }

		};






		/* ACTIONS */


		// Submit response

		that.submitAnswer = function (message)
		{

			// Get user infos
			FB.getLoginStatus(function(response) {
				if (response.status === 'connected')
				{
					FB.api('/me', function (response)
					{ 
						// Request
						var request = $.ajax({
							type: 'POST',
							url: that.config.root + '/api/reviews/' + config.params.id + '/response',
							data: {
								name: 			response.name,
								facebook_id: 	response.id,
								content: 		message
							}
						});

						// Done
						request.done(function (data)
						{
							// Reset form
							that.dom.page.form.message.val('');

							// Add comment in list
							var elem = $('<div class="response"><img src="//graph.facebook.com/' + response.id + '/picture" alt=""><p><span>' + response.name + '</span>' + message + '</p></div>');
							elem.insertAfter(that.dom.page.responses.find('> span'));
							this.dom.page.height(this.dom.page.height() + elem.height);
							this.dom.page.jScrollPane({
								contentWidth: '0px',
								verticalDragMaxHeight: 100,
								verticalDragMinHeight: 100
							});
						});
					});
				}
				else 
				{
					FB.login(function (){ that.submitAnswer(); }, {scope: 'public_profile, email'});
				}
			});


		};
		
		




		/* RETURN */


		return that;


	};