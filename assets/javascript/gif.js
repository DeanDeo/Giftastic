$(document).ready(function(){
    
    var topics = ["Michael Jordan", "Scottie Pippen", "Kris Bryant", "Patrick Kane", "Sammy Sosa",];

    // displaytopicshow function re-renders the HTML to display the appropriate content
    function displaytopics() {

      var athlete = $(this).attr("data-name");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + athlete + "&api_key=QsnYOFNnFA4ridZIG59Cvnkds1zeJjQb&limit=10";

      // AJAX
      $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response){
       

        var results = response.data;

        // Retrieves the Rating Data
        console.log(response);

        // Loops the athlete for limit 10
        for(var i = 0; i < results.length; i++) {

          // Creates a div to hold the athlete
          var athleteDiv = $("<div>");


          // Creates an element to have the rating displayed
          var rating = results[i].rating;
          var p = $("<h2>").text("Rating: " + rating);

          // The Images can still or animate to call the class "athleteImage" for click.
          var athleteImage = $("<img>");
          athleteImage.attr("src", results[i].images.fixed_height_still.url);

          // Displays the rating
          athleteDiv.prepend(p);

          // Displays the athlete Image
          athleteDiv.prepend(athleteImage);
          $("#athlete-view").prepend(athleteDiv);
        }

         //if else statement to pause or animate gifs
        $(".athleteImage").on("click", function() {
          var state = $(this).attr("data-state");
          console.log(state);

          if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }
        });
      });        
    }

    // Function for displaying athlete data
    function renderButtons() {

      // Deletes the athletes prior to adding new athletes
      // (this is necessary otherwise you will have repeat buttons)
      $("#buttons-view").empty();

      for(var i = 0; i < topics.length; i++) {

        // Then dynamicaly generates buttons for each athlete in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var athleteAdd = $("<button>");

        // Adds a class of athlete to our button
        athleteAdd.addClass("athlete");

        // Added a data-attribute
        athleteAdd.attr("data-name", topics[i]);

        // Provided the initial button text
        athleteAdd.text(topics[i]);

        // Added the button to the buttons-view div
        $("#buttons-view").append(athleteAdd);
      }
    }

    // This function handles events where the add athlete button is clicked
    $("#add-athlete").on("click", function(event){
      event.preventDefault();

      // This line of code will grab the input from the textbox
      var athlete = $("#athlete-input").val().trim();

      // The athlete is then added to our array
      topics.push(athlete);

      // Calling renderButtons which handles the processing of our athlete array
      renderButtons();
    });

    // Adding click event listeners to all elements with a class of "athlete"
    $(document).on("click", ".athlete", displaytopics);

    // Calling the renderButtons function to display the intial buttons
    renderButtons();

});