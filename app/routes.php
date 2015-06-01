<?php


	/* API */
	

	// Informations

	$app->get('/api/informations', function () use ($app, $informations)
	{
		return $app->json($informations->readAll());
	});


	// Casting

	$app->get('/api/actors', function () use ($app, $actors)
	{
		return $app->json($actors->readAll());
	});


	// Photo

	$app->get('/api/photos', function () use ($app, $photos)
	{
		return $app->json($photos->readAll());
	});


	// News

	$app->get('/api/news{params}', function ($params) use ($app, $news)
	{
		return $app->json($news->readAll($params));
	})
	->value('params', null);

	$app->get('/api/news/{id}', function ($id) use ($app, $news)
	{
		return $app->json($news->readOne($id));
	});

	$app->put('/api/news/{id}/views', function ($id) use ($app, $news)
	{
		return $app->json($news->updateViews($id,($news->readOne($id)->views+1)));
	});


	// Reviews

	$app->get('/api/reviews', function () use ($app, $reviews)
	{
		return $app->json($reviews->readAll());
	});

	$app->get('/api/reviews/{id}', function ($id) use ($app, $reviews)
	{
		return $app->json($reviews->readOne($id));
	});

	$app->get('/api/reviews/{id}/responses', function ($id) use ($app, $reviews)
	{
		return $app->json($reviews->readResponses($id));
	});

	$app->post('/api/reviews/{id}/response', function ($id) use ($app, $reviews)
	{
		return $app->json($reviews->insertResponse($id, $_POST));
	});







	/* FRONT */


	$app->get('/{url}', function () use ($app)
	{
		return $app['twig']->render('front/layout.twig');
	});

	$app->get('/{url}/{param}', function () use ($app)
	{
		return $app['twig']->render('front/layout.twig');
	});

	$app->get('/', function () use ($app)
	{
		return $app['twig']->render('front/layout.twig');
	});
	

?>