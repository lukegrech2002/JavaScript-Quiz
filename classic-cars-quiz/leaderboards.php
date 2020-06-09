<!DOCTYPE HTML>
<html lang="en">

	<!-- PHP Links -->
	<?php
		include('common.php'); 
		outputHead("Leaderboards");
	?>

	<script src="js/leaderboards.js"></script>

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
			outputNav("Leaderboards");
		?>

		<!-- Background Image -->
		<body background = "web-assets/images/road.jpg">
			<div class = "content">
				<article>
					<h2>Leaderboards</h2>
					<p>
						<!-- Buttons to Sort Table -->
						<button id="scoreAscending" onclick="sortScoreAscending()">Score Ascending</button>
						<button id="scoreDescending" onclick="sortScoreDescending()">Score Descending</button>
						<button id="ageAscending" onclick="sortAgeAscending()">Age Ascending</button>
						<button id="ageDescending" onclick="sortAgeDescending()">Age Descending</button>
						<!-- Leaderboards Table -->
						<table id="leaderboardsTable">
							<thead>
								<tr>
									<th>Position</th>
									<th>Name</th>
									<th>Username</th>
									<th>Age</th>
									<th>Difficulty</th>
									<th>Score</th>
									<th>Nationality</th>								
								</tr>
							<thead>
							<tbody id="leaderboardsTableData"></tbody>
						</table>
					</p>
				</article>
			</div>	

			<!-- Displaying Footer -->
			<?php  
				outputFooter();
			?>
        </body>
	</div>
</HTML>