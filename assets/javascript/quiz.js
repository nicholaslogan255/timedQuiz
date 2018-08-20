


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
        console.log($("input:radio[name=quartz]:checked").val())


        stopTime();

        //todo: lock out quiz from changing answers
        gradeQuiz();

        $("submit").hide(); // hide submit button



    });


    function gradeQuiz() {
        var resultsMessage = ""

        var correct = 0;

        // q1
        if ($("input:radio[name=obsidian]:checked").val() != "Igneous") {
            let incorrect = "<p><span class = 'incorrect'>Incorrect.</span>Obsidian is an Igneous rock!</p>";
            $("#results").append(incorrect);
        }
        else {

            let correct = "<p><span class = 'correct'>Correct!</span> Obsidian is an Igneous rock!</p>";
            $("#results").append(correct);

            correct++;
        }

        // q2
        if ($("input:radio[name=quartz]:checked").val() != "Sedimentary") {
            let incorrect = "<p><span class = 'incorrect'>Incorrect.</span> Quartz is an Sedimentary rock!</p>";
            $("#results").append(incorrect);
        }
        else {
            let correct = "<p><span class = 'correct'>Correct!</span> Quartz is an Sedimentary rock!</p>";
            $("#results").append(correct);

            correct++;
        }


        // q3
        if ($("input:radio[name=basalt]:checked").val() != "Igneous") {
            let incorrect = "<p><span class = 'incorrect'>Incorrect.</span> Basalt is an Igneous rock!</p>";
            $("#results").append(incorrect);

        } else {
            let correct = "<p><span class = 'correct'>Correct!</span> Basalt is an Igneous rock!</p>";
            $("#results").append(correct);
            correct++;
        }


        // q4
        if ($("input:radio[name=marble]:checked").val() != "Metamorphic") {
            let incorrect = "<p><span class = 'incorrect'>Incorrect.</span> Marble is an Metamorphic rock!</p>";
            $("#results").append(incorrect);

        } else {
            let correct = "<p><span class = 'correct'>Correct!</span> Marble is an Metamorphic rock!</p>";
            $("#results").append(correct);
            correct++;
        }

        // q5
        if ($("input:radio[name=sandstone]:checked").val() != "Sedimentary") {
            let incorrect = "<p><span class = 'incorrect'>Incorrect.</span> Sandstone is an Sedimentary rock!</p>";
            $("#results").append(incorrect);

        } else {
            let correct = "<p><span class = 'correct'>Correct!</span> Sandstone is an Sedimentary rock!</p>";
            $("#results").append(correct);
            correct++;
        }

        // q6
        if ($("input:radio[name=schist]:checked").val() != "Metamorphic") {
            let incorrect = "<p><span class = 'incorrect'>Incorrect.</span> Schist is an Metamorphic rock!</p>";
            $("#results").append(incorrect);

        } else {
            let correct = "<p><span class = 'correct'>Correct!</span> Schist is an Metamorphic rock!</p>";
            $("#results").append(correct);
            correct++;
        }

        resultsMessage += "You got " + correct + "/6 correct! "

        if (correct == 6) {
            resultsMessage += "Congratulations. You got them all right!"
        }
        else { resultsMessage += "Looks like you need to study up on your rocks." }

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


        }

        //   show the converted time in the "time" div.
        $("#time").text(timeConvert(timeRemain));
    }

    // stop timer and prevent questions from being changed
    function stopTime() {
        timeRemain -= 1;
        clearInterval(intervalId); // stop timer
        console.log("#### Time's Up: " + timeRemain); // log that time up

        $("#submit").hide(); // hide submit button
        $("#countdown").hide(); // hide the timer
        $("#quizForm").hide();



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