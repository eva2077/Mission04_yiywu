////document.getElementById("buttonSend").addEventListener("click", function () {
////    alert(document.getElementById("quiz").value);
////})

$("#buttonSend").click(function (e) {
    //prevent function from running until we can make sure the requirements in the first if statement is followed
    e.preventDefault();
    //If user has not input any values in field alert them and make them input files
    if (isNaN(parseInt($("#assignments").val())) || isNaN(parseInt($("#groupProject").val())) || isNaN(parseInt($("#quiz").val())) || isNaN(parseInt($("#midtermExam").val())) || isNaN(parseInt($("#finalExam").val())) || isNaN(parseInt($("#intex").val()))) {
        alert("Please fill in all the fields");
        return;
    }
    //Calculate grade 
    let totalPercentage =
        (parseInt($("#assignments").val())) +
        (parseInt($("#groupProject").val())) +
        (parseInt($("#quiz").val())) +
        (parseInt($("#midtermExam").val())) +
        (parseInt($("#finalExam").val())) +
        (parseInt($("#intex").val()));
    //Determines what letter grade the user has 
    if (totalPercentage >= 94) {
        $("#result").html("<p>" + totalPercentage + "%" + " A " + "</p>");
    }
    else if (totalPercentage >= 90) {
        $("#result").html("<p>" + totalPercentage + "%" +  " A- "+ "</p>" );
    }
    else if (totalPercentage >= 87) {
        $("#result").html("<p>" + totalPercentage + "%" +  " B+ "+ "</p>" );
    }
    else if (totalPercentage >= 84) {
        $("#result").html("<p>" + totalPercentage + "%" +  " B " + "</p>" );
    }
    else if (totalPercentage >= 80) {
        $("#result").html("<p>" + totalPercentage + "%" +  " B- " + "</p>" );
    }
    else if (totalPercentage >= 77) {
        $("#result").html("<p>" + totalPercentage + "%" +  " C+ " + "</p>" );
    }
    else if (totalPercentage >= 74) {
        $("#result").html("<p>" + totalPercentage + "%" +  " C " + "</p>");
    }
    else if (totalPercentage >= 70) {
        $("#result").html("<p>" + totalPercentage + "%" +  " C- " + "</p>" );
    }
    else if (totalPercentage >= 67) {
        $("#result").html("<p>" + totalPercentage + "%" +  " D+ " + "</p>");
    }
    else if (totalPercentage >= 64) {
        $("#result").html("<p>" + totalPercentage + "%" +  " D " + "</p>" );
    }
    else if (totalPercentage >= 60) {
        $("#result").html("<p>" + totalPercentage + "%" +  " D- " + "</p>" );
    }
    else {
        $("#result").html("<p>" + totalPercentage + "%" +  " E " + "</p>" );
    }
  
   
    /*alert(totalPercentage);*/
})

