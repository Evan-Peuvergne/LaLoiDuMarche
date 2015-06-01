<?php

	
	/* DEBUG */

	
	$app['debug'] = true;





	/* MODULES */


	// Twig

	$app->register(new Silex\Provider\TwigServiceProvider(), array
	(
		'twig.path' => __DIR__.'/../app/views',
	));


	// Urls

	$app->register(new Silex\Provider\UrlGeneratorServiceProvider());


	// Doctrine

	$app->register(new Silex\Provider\DoctrineServiceProvider(), array
	(
		'db.options' => array
		(
			'driver' 	=> 'pdo_mysql',
			'host' 		=> 'localhost',
			'dbname' 	=> 'hetic_projet_site_film',
			'user' 		=> 'root',
			'password' 	=> 'root',
			// 'charset' 	=> 'uft8'
		)
	));
	$app['db']->setFetchMode(PDO::FETCH_OBJ);



?>