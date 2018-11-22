 var topics = ["Larry Bird", "Michael Jordan", "Khalil Mack", "Patrick Kane"];


      function displayathleteInfo() {

        var athlete = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        athlete + "&api_key=dc6zaTOxFJmzC&limit=10";


        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {

           var athleteDiv = $("<div class='athlete'>");
           var rating = response.Rated;
           var pOne = $("<p>").text("Rating: " + rating);

          athleteDiv.append(pOne);


          $("#topics-view").prepend(athleteDiv);
        });

      }

      function renderButtons() {

        $("#buttons-view").empty();

        for (var i = 0; i < topics.length; i++) {


          var a = $("<button>");
          a.addClass("athlete-btn");
          a.attr("data-name", topics[i]);
          a.text(topics[i]);
          $("#buttons-view").append(a);
        }
      }


      $("#add-athlete").on("click", function(event) {
        event.preventDefault();
        var athlete = $("#athlete-input").val().trim();

        topics.push(athlete);

        renderButtons();
      });

      $(document).on("click", ".athlete-btn", displayathleteInfo);

      renderButtons();