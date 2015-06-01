$(document).ready(function ()
{



	/* CONFIG */


	var routes = {
		home: {
			pattern: /^\/$/,
			page: {
				index: 0,
				object: 'Home',
				title: 'Home',
				url: './'
			}
		},
		film: {
			pattern: /^\/film$/,
			page: {
				index: 1,
				object: 'Film',
				title: 'Film',
				url: 'film'
			}
		},
		news: {
			pattern: /^\/news$/,
			page: {
				index: 2,
				object: 'News',
				title: 'News',
				url: './news'
			}
		},
		article: {
			pattern: /^\/news\/[0-9]+$/,
			page: {
				index: 3,
				object: 'Article',
				title: 'Article',
				url: 'article',
				params: function (url){ return {id: url.split('/')[2]}; }
			}
		},
		reviews: {
			pattern: /^\/reviews$/,
			page: {
				index: 4,
				object: 'Reviews',
				title: 'Reviews',
				url: 'reviews'
			}
		},
		review: {
			pattern: /^\/reviews\/[0-9]+$/,
			page: {
				index: 4,
				object: 'Reviews',
				title: 'Review',
				url: 'review',
				execute: function (page, url)
				{
					setTimeout(function (){ page.loadReview(url.split('/')[2]); }, 1000);
				}
			}
		}
	};


	window.objects = {};





	/* APP */


	var app = new App($('html'));
	app.init(function ()
	{
		app.routes = routes;
		app.routing();
	});


});