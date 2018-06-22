


//  This code will run as soon as the page loads.
window.onload = function () {

    //  Variable that will hold our setInterval that runs our timer
    var intervalId = setInterval(countDown, 1000);

    // time remaining is seconds
    var timeRemain = 90;
    $("#time").text(timeConvert(timeRemain)); // show time on page load


    var selectedAnswer = $("obsidian").val();


    // when the submit button was clicked
    $("#submit").on("click", function () {



        // logs the selected value to the first question
        console.log($("input:radio[name=obsidian]:checked").val());

        // logs the selected value to the second question
        console.log( $("input:radio[name=quartz]:checked").val() )


       stopTime();

        //todo: lock out quiz from changing answers
        gradeQuiz();

        $("submit").hide(); // hide submit button



    });


    function gradeQuiz() {
        var resultsMessage = ""

        var correct = 0;


        if($("input:radio[name=obsidian]:checked").val() != "Igneous"){
            resultsMessage +="Obsidian is an igneous rock! ";
            
        }
        else{correct++;}

        if($("input:radio[name=quartz]:checked").val() != "Sedimentary"){
            resultsMessage +="Quartz is an Sedimentary rock! ";
           
        }
        else{correct++;}

        if($("input:radio[name=basalt]:checked").val() != "Igneous"){
            resultsMessage +="basalt is an igneous rock! ";
           
        }else{correct++;}

        if($("input:radio[name=marble]:checked").val() != "Metamorphic"){
            resultsMessage +="marble is an Metamorphic rock! ";
            
        }else{correct++;}

        if($("input:radio[name=sandstone]:checked").val() != "Sedimentary"){
            resultsMessage +="sandstone is an Sedimentary rock! ";
            
        }else{correct++;}

        if($("input:radio[name=schist]:checked").val() != "Metamorphic"){
            resultsMessage +="schist is an Metamorphic rock! ";
            
        }else{correct++;}

        resultsMessage += "You got "+correct+"/6 correct! "

        if(correct == 6){
            resultsMessage += "Congradulations. You got them all right!"
        }



        $("#results").append(resultsMessage);

    }





    // code that makes the countdown work
    function countDown() {

        if (timeRemain > 1) { // count down if there is more time.
            timeRemain -= 1;
            console.log("Time: " + timeRemain);
        }
        else { // when the time runs out...
            
            stopTime(); // stop the timer

            //todo: lock out quiz from changing answers
            gradeQuiz(); // show results

            $("submit").hide(); // hide submit button
        }

        //   show the converted time in the "time" div.
        $("#time").text(timeConvert(timeRemain));
    }

    // stop timer
    function stopTime(){
        timeRemain -= 1;
            clearInterval(intervalId); // stop timer
            console.log("#### Time's Up: " + timeRemain); // log time up
            $("#countdown").hide(); // hide the timer

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