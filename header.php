<?php

$logo = 'images/me2-small.jpg'; // set logo path
$menu_links = array(
	"Bio" => "bio.php", 
	"CV" => "resume.php", 
	"Projects" => "projects.php"
);

function buildMenu($array) {

	foreach($array as $name => $path) {

		echo "<li><a href='$path'>$name</a></li>";
	}
}

?>

<header>
	<nav class='navbar navbar-default navbar-fixed-top' height='75px'>
		<div class='container-fluid'>

		    <div class='navbar-header'>

		    	<button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
			        <span class='sr-only'>Toggle navigation</span>
			        <span class='icon-bar'></span>
			        <span class='icon-bar'></span>
			        <span class='icon-bar'></span>
		      	</button>

			    <a class='navbar-brand' href='manage.php'>
			        <img alt='Brand' src="<?php echo $logo; ?>" height="100%">
			    </a>

		    </div>

			<div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
		      	<ul class='nav navbar-nav'>
		      		<?php buildMenu($menu_links); ?>
		      	</ul>
		    </div>

		</div>

	</nav>
</header>