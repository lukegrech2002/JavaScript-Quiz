<!DOCTYPE HTML>
<html lang="en">

    <!-- PHP Links -->
	<?php
        include('common.php'); 
		outputHead("How To Play");
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
            outputNav("How To Play");
        ?>

        <!-- Background Image -->
        <body background = "web-assets/images/classic-red-car.jpg">
            <div class = "how-to-play-content">
                <article>
                    <h2>How To Play</h2>
                    <p>
                        To play this game, You will need to log into an existing account in the <a href="login.php">Log In</a> page or create one from the <a href="register.php">Sign Up</a> page. 
                        Once logged in, the game will start. 
                        The score is kept in points, which are achieved from correct answers to the questions.
                        A point is earned by successfully selecting the correct answer out of the three provided.
                        The game will finish once all the questions are answered.
                        The score will be displayed at the end of the game alongside the leaderboards table. Good Luck!
                    </p>
                </article>
            </div>	
            
            <!-- Displaying Footer -->
            <?php
                outputFooter();
            ?>		    
        </body>
    </div>
</html>