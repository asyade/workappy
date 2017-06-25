var j_colors = [ "#9fff00", "#ffd000", "#ff5100", "#7200ff", "#055192", "#8e7cb3", "#ffd000", '#9fff00']

function init_jauge()
{
	var hh = $('.outer').height();
	 i = 0;
	var max = {'col' : "", 'val' : 0}
	max.val = stats.scores.panger + stats.scores.pdisgust + stats.scores.pfear;
	max.val *= (hh);
	window.setTimeout(()=>{
    var skillBar = $('.inner');
    var skillVal = skillBar.attr("data-progress");
    $(skillBar).animate({
        height: max.val * 10
    }, 1600);
   	}, 200);
}