<!DOCTYPE HTML>
<html lang="en">

    <!-- PHP Links -->
	<?php
        include('common.php'); 
		outputHead("Game");
    ?>

    <script defer src="js/quiz.js"></script>

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
            outputNav("Game");
        ?>

        <!-- Background Image -->
        <body background = "web-assets/images/night-road.jpg">
            <div class = "game-content">
                <div id="chooseDifficulty">Select Difficulty</div>
                <div id="easy">Easy</div>
                <div id="medium">Medium</div>
                <div id="hard">Hard</div>
                <div id="game-container">
                    <div id="questionImage"></div>
                    <div id="question"></div>
                    <div id="answers">
                        <button class="choice" id="A" onclick="checkAnswer('A')"></button>
                        <button class="choice" id="B" onclick="checkAnswer('B')"></button>
                        <button class="choice" id="C" onclick="checkAnswer('C')"></button>
                    </div>
                    <div id="timer">
                        <div id="counter"></div>
                        <div id="btimeGauge"></div>
                        <div id="timeGauge"></div>
                    </div>
                    <div id="playerDetails">Player Details</div>
                    <div id="playerName"></div>
                    <div id="playerUsername"></div>
                    <div id="playerAge"></div>
                    <div id="playerNation"></div>
                    <div id="progress"></div>
                    <div id="score"></div> 
                    <div id="restartQuiz">
                        <button class="restart-quiz" onclick="restartQuiz()">Restart Quiz</button>
                    </div>     
                    <div id="skipQuestion">
                        <button class="skip-question" onclick="checkAnswer(answerIsWrong())">Skip Question</button>
                    </div>   
                </div>
            </div>	
            <!-- Displaying Footer -->
            <?php
                outputFooter();
            ?>		         
        </body>
    </div>
</HTML>