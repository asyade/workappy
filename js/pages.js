var BASE_URI = "http://localhost:8080/"
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
	    	bubble.addEventListener('click', step2handle, false);
	    if (p == "step2")
	    {
	    	var reset = document.querySelector('#btn-reset');
	    	calc_diff();
	    	print_res();
	  	    init_jauge();
	  	    reset.addEventListener('click', ()=>{
		  	    window.location.href = BASE_URI;
	  	    });
	    }
	    	$("#page-container").fadeIn(1000);
	})
	.fail(function() {
	    console.log("Post error !");
	});
}

function	step2handle(ev)
{
	bubble.removeEventListener('click', step2handle);
	gotop("step2");
}