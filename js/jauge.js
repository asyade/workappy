
function init_jauge()
{
	var start = 40;
	calc_diff();
	if (stats.scores.phappiness >= 90)
		start = 95;
	else if (stats.scores.phappiness >= 60)
		start = 80;
	else if (stats.scores.psurprise >= 60)
		start = 70;
	else if (stats.scores.pneutral >= 80)
		start = 50;
	else if (stats.scores.pdisgust >= 50)
		start = 40;
	window.setTimeout(()=>{
		var hh = $('.outer').height() / 100;
	    var skillBar = $('.inner');
	    var skillVal = skillBar.attr("data-progress");
	    $(skillBar).animate({
	        height: (start * hh)
	    }, 1600);
   	}, 200);
}
