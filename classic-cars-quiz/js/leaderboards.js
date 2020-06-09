var highScore = JSON.parse(localStorage.getItem('highScores')); // Retrieving High Scores from Local Storage

// Loading Table on Window Navigation
window.onload = () => {
	loadTableData(highScore);
	sortScoreAscending();
};

function loadTableData(highScore){
	const tableBody = document.getElementById('leaderboardsTableData');
	let tableData = '';			
	
	// Loop to Fill in Table from High Scores Array
	for(highScoresCount = 0; highScoresCount < highScore.length; highScoresCount++){
		// Counter starts at 0 but positions start at 1
		let position = highScoresCount + 1; 

		// Filling Table from High Scores Array
		tableData += '<tr><td>' + position + '</td><td>' + 
		highScore[highScoresCount].name + '</td><td>' + 
		highScore[highScoresCount].username + '</td><td>' + 
		highScore[highScoresCount].age +'</td><td>' + 
		highScore[highScoresCount].difficulty + '</td><td>' + 
		highScore[highScoresCount].score + '</td><td>' + 
		highScore[highScoresCount].nation +'</td></tr>';
	}
	tableBody.innerHTML = tableData;
}

// Sorting the Leaderboards Table
// Score- Low to High
function sortScoreAscending(){
	highScore.sort(function(a, b) {
		return parseFloat(b.score) - parseFloat(a.score);
	});
	loadTableData(highScore);
}

// Score- High to Low
function sortScoreDescending(){
	highScore.sort(function(a, b) {
		return parseFloat(a.score) - parseFloat(b.score);
	});
	loadTableData(highScore);
}

// Age- Low to High
function sortAgeAscending(){
	highScore.sort(function(a, b) {
		return parseFloat(b.age) - parseFloat(a.age);
	});
	loadTableData(highScore);
}

// Age- High to Low
function sortAgeDescending(){
	highScore.sort(function(a, b) {
		return parseFloat(a.age) - parseFloat(b.age);
	});
	loadTableData(highScore);
}


