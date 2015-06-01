<?php


	class Model {



		/* PROPERTIES */


		public $pdo;

		public $model;





		/* CONSTRUCTOR */


		public function __construct ($pdo)
		{

			$this->pdo = $pdo;
			$this->pdo->exec("set names utf8");

		}





		/* READ */ 


		// Read All

		public function readAll ($params = null)
		{

			// Create request
			$sql = 'SELECT * FROM ' . $this->model;
			if(!empty($_GET))
			{
				if(isset($_GET['order'])){ $sql = $sql . ' ORDER BY ' . $_GET['order'] . ' desc'; }
			}

			// Get results

			$query = $this->pdo->prepare($sql);
			$query->execute();
			$rows = $query->fetchAll();

			
			// After

			$rows = $this->afterReadAll($rows);


			// Return 

			return $rows;

		}

		public function afterReadAll($rows)
		{

			// Manage dates

			if(!empty($rows) && isset($rows[0]->created))
			{
				foreach($rows as $row){ $row->created = self::relativeDate($row->created); }
			}


			// Return

			return $rows;

		} 



		// Read one

		public function readOne ($id)
		{

			// Get result

			$query = $this->pdo->prepare('SELECT * FROM '. $this->model . ' WHERE id = :id');
			$query->execute(array(
				'id' => $id
			));
			$row = $query->fetch();


			// After

			$this->afterReadOne($row);


			// Return 

			return $row;

		}

		public function afterReadOne ($row)
		{

			// Manage dates

			if(!empty($row) && isset($row->created))
			{
				$row->created = self::relativeDate($row->created);
			}


			// Return

			return $row;

		}








		/* UTILITIES */


		// Relative human date

		static function relativeDate($ts)
		{
		    if(!ctype_digit($ts))
		        $ts = strtotime($ts);

		    $diff = time() - $ts;
		    if($diff == 0)
		        return 'now';
		    elseif($diff > 0)
		    {
		        $day_diff = floor($diff / 86400);
		        if($day_diff == 0)
		        {
		            if($diff < 60) return 'Just now';
		            if($diff < 120) return '1 minute ago';
		            if($diff < 3600) return floor($diff / 60) . ' minutes ago';
		            if($diff < 7200) return '1 hour ago';
		            if($diff < 86400) return floor($diff / 3600) . ' hours ago';
		        }
		        if($day_diff == 1) return 'Yesterday';
		        if($day_diff < 7) return $day_diff . ' days ago';
		        if($day_diff < 31) return ceil($day_diff / 7) . ' weeks ago';
		        if($day_diff < 60) return 'Last month';
		        return date('F Y', $ts);
		    }
		}



	}


?>