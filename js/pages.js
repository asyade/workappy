var BASE_URI = "vps416438.ovh.net/"
var bubble = document.querySelector('#page-container');

function	gotop(p)
{
	var page = BASE_URI;
	if (p === 'step2')
		page = "hello.html";
	else if (p === "step1")
		page = "message.html"

	var params = {
	};
	$("#page-container").fadeOut(15);
	$.ajax({
	    url: page,
	    type: "POST",
	})
	.done(function(data) {
	    $("#page-container").html(data);
	    if (p == "step1")
	    {
	    	print_bubble();
	    	bubble.addEventListener('click', step2handle, false);
	    }
	    if (p == "step2")
	    {
	    	var reset = document.querySelector('#btn-reset');
	    	calc_diff();
	    	print_res();
	  	    init_jauge();
	  	    reset.addEventListener('click', ()=>{
		  	    document.location.href=$(BASE_URI);
	  	    });
	    }
	    	$("#page-container").fadeIn(1000);
	})
	.fail(function() {
	    console.log("Post error !");
	});
}

$(".btn-rounded").on("click", (ev)=>{
	$(".btn-rounded").addClass("spin");
});


function	step2handle(ev)
{
	bubble.removeEventListener('click', step2handle);
	gotop("step2");
}
