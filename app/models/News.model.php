<?php


	class News extends Model{



		/* PROPERTIES */


		





		/* CONSTRUCTOR */

		
		public function __construct ($pdo)
		{

			parent::__construct($pdo);
			$this->model = 'news';

		}





		/* REDEFINE */


		// Read

		public function readAll ($params = null)
		{
			
			// Get results

			$query = $this->pdo->prepare('SELECT id, title, created, image FROM ' . $this->model);
			$query->execute();
			$rows = $query->fetchAll();


			// Process

			$rows = $this->afterReadAll($rows);


			// Return

			return $rows;

		}







		/* METHODS */


		// Update views

		public function updateViews ($id, $views)
		{

			// Request

			$request = $this->pdo->prepare('UPDATE ' . $this->model . ' SET views = :views WHERE id = :id');
			$request = $request->execute(array(
				'id' 	=> $id,
				'views' => $views
			));
			

			// Return

			return ($request == 1) ? ['success' => true] : ['success' => false];

		}




	}


?>