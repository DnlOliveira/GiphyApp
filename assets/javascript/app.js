$(document).ready(function(){
// var topics = ["Villains", "Super Heroes"];

var app = {
	topics: ["Villains", "Super Heroes"],

	start: function(){
		$("#buttons").empty();
		$("#search").empty();

		for (var i = 0; i < this.topics.length; i++){
			var button = $("<button>");
			$(button).attr("id", "topic");
			$(button).text(this.topics[i]);
			$(button).val(this.topics[i]);
			$("#buttons").append(button);
		}

		$("#search").html("Add Button<br>");

		var form = $("<input>");
		form.attr("id", "form");
		form.attr("type", "text");
		form.attr("name", "add");
		$("#search").append(form);

		var submit = $("<button>");
		submit.attr("id", "submit");
		submit.text("Submit");
		$("#search").append(submit);

	},
	search: function(){
		var queryURL = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

    	$.ajax({
      		url: queryURL,
      		method: 'GET'
    	}).done(function(response) {
      		console.log(response);
    	});
	},

}; //app object

app.start();

$(document).on("click", "#topic", function(){
	var value = $(this).val();
	console.log(value);
});

$("#submit").on("click", function(){
	var value = $("#form").val();
	app.topics.push(value);
	app.start();
});

}); //document.ready









