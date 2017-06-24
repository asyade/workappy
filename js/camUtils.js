var stats;

function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
}



function	scale_video(video, res)
{
    var height = $(window).height();
    $(video).css('height', height);

    var videoWidth = $(video).width(),
        windowWidth = $(window).width(),
    marginLeftAdjust =   (windowWidth - videoWidth) / 2;

    $(video).css({
        'height': height, 
        'marginLeft' : marginLeftAdjust
    });
    $(res).css({
        'marginLeft' : marginLeftAdjust,
    });
	$(res).css({
    	'width' : ($(video).css("width")),
    });
    $(res).css({
    	'marginLeft' : marginLeftAdjust,
    	'margin-top' : ($(window).height() / 2) - ($(res).height() / 2)
    });
}

$(window).resize(function(){
	scale_video("#video", "#img-result");
});

$(window).load(function(){
	$( "#img-result" ).slideToggle();
});

function	request_api(d)
{
    var params = {
    };
    $.ajax({
        url: "https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize?" + $.param(params),
        beforeSend: function(xhrObj){
            xhrObj.setRequestHeader("Content-Type","application/octet-stream");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","21b9bd9785ef4bf396783ac499ecfb9c");
        },
        type: "POST",
        processData: false,
		contentType: false,
        data: dataURLtoBlob(d)

    })
    .done(function(data) {
    	if (typeof(data[0]) != "undefined" && typeof(data[1]) == "undefined")
    	{
            stats = data[0];
        	gotop("step1");
    	}
        else
        {
			$("#img-result").slideToggle();
			$("#take-btn").fadeIn();
        }
        ready = true;
    })
    .fail(function() {
        console.log("Api error !");
    });
}

