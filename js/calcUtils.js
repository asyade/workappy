function calc_diff()
{
	var s = stats.scores;
	var divid = s.anger + s.contempt + s.disgust + s.fear + s.happiness + s.neutral + s.sadness + s.surprise;
	var i = 0;

	var p = 100;
	s.panger = parseInt((s.anger * p) / divid);
	s.pcontempt = parseInt((s.contempt * p) / divid);
	s.pdisgust = parseInt((s.disgust * p) / divid);
	s.pfear = parseInt((s.fear * p) / divid);
	s.phappiness = parseInt((s.happiness * p) / divid);
	s.pneutral = parseInt((s.neutral * p) / divid);
	s.psadness = parseInt((s.sadness * p) / divid);
	s.psurprise = parseInt((s.surprise * p) / divid);
	divid = s.panger + s.pcontempt + s.pdisgust + s.pfear + s.phappiness + s.pneutral + s.psadness + s.psurprise;
}


function print_res()
{
	$("#p1").text(stats.scores.panger.toString());
	$("#p2").text(stats.scores.pcontempt.toString());
	$("#p3").text(stats.scores.pdisgust.toString());
	$("#p4").text(stats.scores.pfear.toString());
	$("#p5").text(stats.scores.phappiness.toString());
	$("#p6").text(stats.scores.pneutral.toString());
	$("#p7").text(stats.scores.psadness.toString());
	$("#p8").text(stats.scores.psurprise.toString());
}