<?php

	

	$basepath = dirname(dirname(__FILE__));
	
	/* MODELS */


	// Main model

	require_once(__DIR__.'/../app/models/Model.model.php');

	
	// Information

	require_once(__DIR__.'/../app/models/Information.model.php');
	$informations = new Information($app['db']);


	// Actor

	require_once(__DIR__.'/../app/models/Actor.model.php');
	$actors = new Actor($app['db']);


	// Photo

	require_once(__DIR__.'/../app/models/Photo.model.php');
	$photos = new Photo($app['db']);


	// News

	require_once(__DIR__.'/../app/models/News.model.php');
	$news = new News($app['db']);


	// Reviews

	require_once(__DIR__.'/../app/models/Reviews.model.php');
	$reviews = new Reviews($app['db']);



?>