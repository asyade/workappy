function	gotop(p)
{
	var page = "";
	if (p === 'step2')
	{
		page = "http://localhost:8080/hello.php"
	}

	var params = {
	};
	$.ajax({
	    url: page,
	    type: "POST",
	})
	.done(function(data) {
	    $("#page-container").html(data);
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