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


          $("#img").fadeOut(2000, function(){
                $(this).attr('src',images[randomIndex]).bind('onreadystatechange load', function(){
                 if (this.complete) $(this).fadeIn(2000);});
                 });
          var w = Math.round(window.innerWidth / 40);
          var h = Math.round(window.innerHeight / 40);
           for (var x = 1; x <= w; x++) {
                for (var y = 1; y <= h; y++) {
                    var unit = $("<div class='unit' >"+ x +","+ y +"</div>");
                    unit.appendTo('#container2');
                   
          
                  
                }
           }
         //  alert(document.getElementById('#container2').style.width);
          document.getElementById("#container2").style.width = h + "px";

            
          
          }

          var images = [], x = -1;
          images[0] = '../static/images/fondo_1.jpg';
          images[1] = '../static/images/fondo5.png';
          images[2] = '../static/images/fondo6.png';
        /*  images[0] = "url('../static/images/fondo4.png')";
          images[1] = "url('../static/images/fondo5.png')";
          images[2] = "url('../static/images/fondo6.png')";*/
          var randomIndex = Math.floor(Math.random() * images.length);


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


