for(var i = 0; i < Table.standing.length; i ++){
	var team = Table.standing[i];
	var name = team.teamName;
	var GP = team.playedGames;
	var wins = team.wins;
	var draws = team.draws;
	var losses = team.losses;
	var goals = team.goals;
	var GA = team.goalsAgainst;
	var GD = team.goalDifference;
	var points = team.points;
	
	var team_url = team._links.team.href;
	var id = team_url.substring(38,team_url.length);

	var new_row = "<tr id=" + id + ">"
	new_row += "<td>" + name + "</td>"
	new_row += "<td>" + GP + "</td>"
	new_row += "<td>" + wins + "</td>"
	new_row += "<td>" + draws + "</td>"
	new_row += "<td>" + losses + "</td>"
	new_row += "<td>" + goals + "</td>"
	new_row += "<td>" + GA + "</td>"
	new_row += "<td>" + GD + "</td>"
	new_row += "<td>" + points + "</td></tr>"

	$('.container tbody').append(new_row);
}
