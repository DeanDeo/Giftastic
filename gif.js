var athletes = ["Michael Jordan", "Scottie Pippen", "Patrick Kane", "Larry Bird", "Kobe Bryant", "Kris Bryant"];

function DisplayAthleteInfo(){}

    $("body").on("click", ".athlete", function(){
    var athlete = $(this).attr("data-name");
    var queryURL= "https://api.giphy.com/v1/gifs/search?q=" +
    person + "&api_key=QsnYOFNnFA4ridZIG59Cvnkds1zeJjQb&limit=10";


    $("displayAthleteInfo").empty();

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        
        var results= response.data

        for (var i= 0; i < results.length; i++){

            var pictureDiv = $("<div-container>:");
            
        }

