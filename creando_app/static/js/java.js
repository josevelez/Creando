function here() {
        alert('hello')
          }



 function displayNextImage() {
              x = (x === images.length - 1) ? 0 : x + 1;
               document.body.style.backgroundImage = images[x];
           /*   document.body.style.backgroundColor = "lime"; */
        /* alert(document.getElementById("wrapper").style.backgroundImage) */
                document.getElementById("img").src='../static/images/fondo4.png';

          }

          function displayPreviousImage() {
              x = (x <= 0) ? images.length - 1 : x - 1;
              document.body.style.backgroundImage = images[x];
          }

          function startTimer() {
            //  setInterval(displayNextImage, 3000);
            $("#img").fadeOut();

   $("#img").fadeOut(300, function(){
      $(this).attr('src','../static/images/fondo5.png').bind('onreadystatechange load', function(){
         if (this.complete) $(this).fadeIn(3000);
      });
      });

          }

          var images = [], x = -1;
          images[0] = "url('../static/images/fondo4.png')";
          images[1] = "url('../static/images/fondo5.png')";
          images[2] = "url('../static/images/fondo6.png')";


	/*
		Purpose: 		funtion to center a div inside another div using JQuery
		Reference:		http://stackoverflow.com/questions/10077417/jquery-positioning-and-animation
   */




jQuery(function(){

   // Fade In
   $("#img").fadeIn();

   // Fade Out
   $("#myImage").fadeOut();

});



jQuery.fn.center = function (parent) {
    if (parent) {
        parent = this.parent();
    } else {
        parent = window;

    }
    this.css({
            "position": "absolute",
            "top": ((($(parent).height() - this.outerHeight()) / 2) + $(parent).scrollTop() + "px"),
            "left": ((($(parent).width() - this.outerWidth()) / 2) + $(parent).scrollLeft() + "px")
    });
    return this;
};


