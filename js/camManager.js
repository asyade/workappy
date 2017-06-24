var ready = false;

(function() {

  var streaming = false,
      video        = document.querySelector('#video'),
      cover        = document.querySelector('#cover'),
      canvas       = document.querySelector('#img-result'),
      photo        = document.querySelector('#photo'),
      startbutton  = document.querySelector('#take-btn'),
      width = $( window ).width(),
      height = $( window ).height()

  navigator.getMedia = ( navigator.mozGetUserMedia ||
                        navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mediaDevices.getUserMedia ||
                       navigator.msGetUserMedia);
  navigator.getMedia(
    {
      video: true,
      audio: false
    },
    function(stream) {
      if (navigator.mozGetUserMedia) {
        video.srcObject = stream;
      }
      else {
        var vendorURL = window.URL || window.webkitURL;
        video.src = vendorURL.createObjectURL(stream);
      }
      video.play();
    },
    function(err) {
      console.log(err);
    }
  );

  video.addEventListener('canplay', function(ev){
    if (!streaming) {
      height = video.videoHeight / (video.videoWidth/width);
      video.setAttribute('width', width);
      video.setAttribute('height', height);
      canvas.setAttribute('width', width);
      canvas.setAttribute('height', height);
      scale_video("#video", "#img-result");
      streaming = true;
      window.setTimeout(()=>{ready = true;}, 1000);
    }
  }, false);



  function takepicture() {
    canvas.width = width;
    canvas.height = height;
    canvas.getContext('2d').drawImage(video, 0, 0, width, height);
    var data = canvas.toDataURL('image/png');
    request_api(data);
  }

  startbutton.addEventListener('click', function(ev){
      if (ready === true){
        ready = false;
        $("#img-result").slideToggle();
        $("#take-btn").fadeOut();
        takepicture();
       ev.preventDefault();
      }
  }, false);

 
})();
