<?php

    // Head
    function outputHead($pageTitle){
        echo '<head>';
            echo '<title>' . $pageTitle . '</title>';
            echo '<link rel="stylesheet" type="text/css" href="style.css">'; // Link to CSS File   
            echo '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">'; // Social Media Icons
        echo '</head>';
    }

    // Navigation Menu
    function outputNav($pageName){
        echo '<div class="navigation">';

            // Arrays for linking link names with link addresses
            $linkNames = array("Leaderboards", "How To Play");
            $linkAddresses = array("leaderboards.php", "how-to-play.php");
            
            // For loop to link addresses using a counter
            for($linkCount = 0; $linkCount < count($linkNames); $linkCount++){
                echo '<div>';
                    echo '<nav>';
                        echo '<a ';
                        echo 'href="' . $linkAddresses[$linkCount] . '">' . $linkNames[$linkCount] . '</a>';
                    echo '</nav>';
                echo '</div>';
            }

            // Dropdown Menu
            echo '<div class="dropdown">';
            echo '<button class="drop-btn">Menu</button>';		
                echo '<div class="dropdown-content">';
                    echo '<nav>';	
                        echo '<a href="index.php">Home</a>';
                        echo '<a href="login.php">Log In</a>';
                        echo '<a href="register.php">Sign Up</a>';
                        echo '<a href="accounts-management.php">Accounts Management</a>';
                    echo '</nav>';	
                echo '</div>';	
            echo '</div>';
        echo '</div>';
    }       

    // Footer
    function outputFooter(){
        echo '<div class ="footer-div">';
            echo '<footer>';  
			    echo '<h3>';
					echo '© 2019 Classic Cars Website';
                echo '</h3>';

                // Social Media Links
                echo '<a href="https://www.facebook.com/Classic-Cars-Quiz-113177036776072/" class="fa fa-facebook"></a>';
                echo '<a href="https://twitter.com " class="fa fa-twitter"></a>';
                echo '<a href="https://www.youtube.com/" class="fa fa-youtube"></a>';
                echo '<a href="https://www.instagram.com/" class="fa fa-instagram"></a>';
            echo '</footer>';	
        echo '</div>';
    }          
?>