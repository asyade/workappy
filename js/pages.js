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
<<<<<<< HEAD
	    {
	    	print_bubble();
	    	bubble.addEventListener('click', step2handle, false);
	    }
=======
		{
			print_bubble();
	    	bubble.addEventListener('click', step2handle, false);
		}
>>>>>>> a66febeaee4c8f9e5a2572ecd64d5cc0f4b0c1a1
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

$(".btn-rounded").on("click", (ev)=>{
	$(".btn-rounded").addClass("spin");
});


function	step2handle(ev)
{
	bubble.removeEventListener('click', step2handle);
	gotop("step2");
}
