<?php


	class Photo extends Model{



		/* PROPERTIES */


		





		/* CONSTRUCTOR */

		
		public function __construct ($pdo)
		{

			parent::__construct($pdo);
			$this->model = 'photos';

		}




	}


?>