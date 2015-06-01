<?php


	class Actor extends Model{



		/* PROPERTIES */


		





		/* CONSTRUCTOR */

		
		public function __construct ($pdo)
		{

			parent::__construct($pdo);
			$this->model = 'actors';

		}




	}


?>