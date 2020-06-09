<!DOCTYPE HTML>
<html lang="en">

    <!-- PHP Links -->
    <?php
        include('common.php'); 
		outputHead("Accounts Management");
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
            outputNav("Accounts Management");
        ?>
        
        <!-- Background Image -->
	    <body background = "web-assets/images/garage.jpg">
			<div class = "accounts-management-content">
				<article>
                    <h2>Accounts Management</h2> 
                    <form action="action_page.php" method="post">     
                        <div class="accounts-management-form">                           
                            <button type="button" onclick="window.location.href = 'register.php';">Create New Account</button>
                            <button type="button" onclick="window.location.href = 'login.php';">Log Into Existing Account</button>
                            <button type="button" onclick="logout()">Sign Out</button>    
                            <button type="button" onclick="clearStorage()">Delete All Accounts</button>                
                        </div>
                    </form> 

                    <script>
                        // Deletes All Existing Accounts
                        function clearStorage(){
                            localStorage.clear();
                            logout();
                            alert("All Accounts Have Been Deleted");
                            window.location.href = 'register.php';
                        }

                        // Logs Out of Session
                        function logout(){
                            sessionStorage.clear();
                            alert("You Have Signed Out");
                            window.location.href = 'login.php';
                        }
                    </script>
			    </article>
            </div>	
            
            <!-- Displaying Footer -->            
            <?php   
                outputFooter();
            ?>
        </body>
	</div>
</HTML>