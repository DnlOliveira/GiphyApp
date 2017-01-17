$(document).ready(function(){
// var topics = ["Villains", "Super Heroes"];

var app = {
	topics: ["John Snow", "Daenarys Targaryen", "Arya Stark", "Tyrion Lannister"],

	start: function(){
		$("#buttons").empty();
		$("#search").empty();

		for (var i = 0; i < this.topics.length; i++){
			var button = $("<button>");
			$(button).attr("id", "topic");
			$(button).text(this.topics[i]);
			$(button).val(this.topics[i]);
			$("#buttons").append(button);
			$("#buttons").append(" | ");

		}

		$("#search").html("Add Button<br>");

		var form = $("<input>");
		form.attr("id", "form");
		form.attr("type", "text");
		form.attr("name", "add");
		$("#search").append(form);

		var submit = $("<button>");
		submit.attr("id", "submit");
		submit.text("Add");
		$("#search").append(submit);

		

	},
	search: function(value){
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        value + "&api_key=dc6zaTOxFJmzC&limit=10";

    	$.ajax({
      		url: queryURL,
      		method: 'GET'
    	}).done(function(response) {
    		console.log(response);
    		var results = response.data;

    		for (var i = 0; i < results.length; i++) {
    			var gifDiv = $("<div class='item'>");

              // Storing the result item's rating
              	var rating = results[i].rating;

              // Creating a paragraph tag with the result item's rating
              	var p = $("<p>").text("Rating: " + rating);

              // Creating an image tag
              	var personImage = $("<img>");

              // Giving the image tag an src attribute of a proprty pulled off the
              // result item
              	personImage.attr("src", results[i].images.fixed_height.url);

              // Appending the paragraph and personImage we created to the "gifDiv" div we created
              	gifDiv.append(p);
              	gifDiv.append(personImage);

              // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
              	$("#display").prepend(gifDiv);
    		}


      		console.log(response);
    	});
	},

}; //app object

app.start();

$(document).on("click", "#topic", function(){
	var value = $(this).val();
	app.search(value);
	console.log(value);
});

$("#submit").on("click", function(){
	var value = $("#form").val();
	app.topics.push(value);
	app.start();
});

}); //document.ready









