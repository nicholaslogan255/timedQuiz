


//  This code will run as soon as the page loads.
window.onload = function () {

    //  Variable that will hold our setInterval that runs our timer
    var intervalId = setInterval(countDown, 1000);

    // time remaining is seconds
    var timeRemain = 90;
    $("#time").text(timeConvert(timeRemain)); // show time



    function countDown() {

        if(timeRemain > 1){
            timeRemain -= 1;
            console.log("Time: "+timeRemain);
        }
        else{
            timeRemain -= 1;
             clearInterval(intervalId);
             console.log("#### Time's Up: "+timeRemain);
        }
    
        //  Get the current time, pass that into the timeConverter function,
        //   show the converted time in the "time" div.
        $("#time").text(timeConvert(timeRemain));
      }




    function timeConvert(inTime) {

        //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
        var minutes = Math.floor(inTime / 60);
        var seconds = inTime - (minutes * 60);
    
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
    
        if (minutes === 0) {
          minutes = "00";
        }
    
        else if (minutes < 10) {
          minutes = "0" + minutes;
        }
    
        return minutes + ":" + seconds;
      }

}