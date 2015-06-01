<?php


	class Reviews extends Model{



		/* PROPERTIES */


		





		/* CONSTRUCTOR */

		
		public function __construct ($pdo)
		{

			parent::__construct($pdo);
			$this->model = 'reviews';

		}







		/* REDEFINE */


		// ReadOne

		public function readResponses ($id)
		{

			// Get result

			$query = $this->pdo->prepare('SELECT * FROM responses WHERE review_id = :id ORDER BY created');
			$query->execute(array(
				'id' => $id
			));
			$row = $query->fetchAll();


			// Return 

			return $row;

		}


		// Insert Response

		public function insertResponse ($id, $data)
		{

			// Request

			$request = $this->pdo->prepare('INSERT INTO responses (facebook_id, name, content, created, review_id) VALUES (:facebook_id, :name, :content, NOW(), :review_id)');
			$data['review_id'] = $id;
			$result = $request->execute($data);


			// Retour

			return $result;

		}




	}


?>