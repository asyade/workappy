function init_jauge()
{
	window.setTimeout(()=>{
    var skillBar = $('.inner');
    var skillVal = skillBar.attr("data-progress");
    $(skillBar).animate({
        height: 300
    }, 1300);
   	}, 200);
}