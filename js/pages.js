var BASE_URI = "http://localhost:8080/"

function	gotop(p)
{
	var bubble = document.querySelector('#page-container');
	var page = BASE_URI;
	if (p === 'step2')
		page = "hello.html";
	else if (p === "step1")
		page = "message.html"

	var params = {
	};
	$.ajax({
	    url: page,
	    type: "POST",
	})
	.done(function(data) {
	    $("#page-container").html(data);
	    if (p == "step1")
	    {
	    	bubble.addEventListener('click', function(ev){
		      	gotop("step2");
		  }, false);
	    }
	    if (p == "step2")
	    {
	    	calc_diff();
	    	print_res();
	  	    init_jauge();
	    }
	})
	.fail(function() {
	    console.log("Post error !");
	});
}
