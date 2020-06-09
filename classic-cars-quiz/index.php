<!DOCTYPE HTML>
<html lang="en">

	<!-- PHP Links -->
	<?php
		include('common.php'); 
		outputHead("Home");
	?>

	<div class = "grid">	
		<!-- Website Logo -->
		<div class="logo">
            <img src ="web-assets/images/carLogo.png">
		</div>

		<!-- Header -->
		<div class= "div-header">
			<header>
				<h1>Classic Cars Quiz</h1>
			</header>
		</div>
			
		<!-- Displaying Navigation Bar -->
		<?php
			outputNav("Home");
		?>

		<!-- Background Image -->
		<body background = "web-assets/images/classic-car-pub.jpg">
			<div class = "home-content">
				<article>	
					<h2>Home</h2>				
					<p>
						Welcome to Classic Cars Quiz!
					</p>
					<button type="button" onclick="window.location.href = 'login.php';">Sign In</button> 
					<button type="button" onclick="window.location.href = 'register.php';">Sign Up</button>
				</article>
            </div>
				
			<!-- Displaying Footer -->
			<?php    
				outputFooter();
			?>  
        </body>
	</div>
</HTML>
