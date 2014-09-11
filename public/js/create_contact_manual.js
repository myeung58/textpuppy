$(document).ready(function() {
  $(".contacts").on("click", ".create-contact", function(event) {
  	event.preventDefault();
  	var request = $.ajax({url: $(this).attr("href"), 
  						  type: "GET"})
  	request.done(function(serverData) {
  	  console.log("success");
  	  cleanup();
  	  $(".contacts").append(serverData);
  	})
  	request.fail(function() {
  	  console.log("fail");
  	})
  })

  $(".contact-field").on("click", ".submit-contact", function(event) {
  	// event.preventDefault();
  	var formData = $(".contact-field").serialize();
  	var request = $.ajax({url: $(".contact-field").attr("action"), 
  						  type: "POST",
  						  data: formData})
  	request.done(function(serverData) {
  	  console.log("success");
      // cleanup();
  	})
  	request.fail(function() {
  	  console.log("fail");
  	})
  })
})

function cleanup() {
  $(".added-contact-message").remove();
  $(".contact-field").remove();
}

