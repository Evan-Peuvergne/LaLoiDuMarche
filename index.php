<?php
	
	// Autoload
	require_once __DIR__.'/vendor/autoload.php';

	// Create applicaiton
	$app = new Silex\Application();

	// Config
	require_once __DIR__.'/config/config.php';
	require_once __DIR__.'/config/dependencies.php';
	
	// Routes
	require_once __DIR__.'/app/routes.php';

	// Run application
	$app->run();

?>