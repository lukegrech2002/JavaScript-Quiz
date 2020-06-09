<!DOCTYPE HTML>
<html lang="en">

    <!-- PHP Links -->
    <?php
        include('common.php'); 
		outputHead("Log In");
    ?>

    <script src="js/login.js"></script>

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
            outputNav("Login");
        ?>

        <!-- Background Image -->
	    <body background = "web-assets/images/black-ford-mustang.jpg">
			<div class = "login-content">
				<article>
                    <h2>Sign In</h2>              
                    <form action="action_page.php" method="post">
                        <div id="login-form">
                            <label for="username"><b>Username</b></label>
                            <input type="text" placeholder="Enter Username" id="usernameInput" required>

                            <label for="password"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" id="passwordInput" required>

                            <button type="button" onclick="login()">Sign In</button>
                        </div>
                    </form>

                    <p id="loginFailure"></p>    
			    </article>
            </div>	
            
            <!-- Displaying Footer -->
            <?php   
                outputFooter();
            ?>
        </body>
	</div>
</HTML>