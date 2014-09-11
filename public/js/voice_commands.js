
function analyze(sentence) {
  var strings = sentence.split(" ");
  if (sentenceHas(strings, "create") && sentenceHas(strings, "new") && sentenceHas(strings, "contact")) {
  	voiceOpenCreateContact();
  } else if (sentenceHas(strings, "submit") && sentenceHas(strings, "contact")) {
  	voiceSubmitCreateContact();
  } else if (sentenceHas(strings, "create") && sentenceHas(strings, "new") && sentenceHas(strings, "text")) {
  	voiceOpenCreateText();
  } else if (sentenceHas(strings, "submit") && sentenceHas(strings, "text")) {
  	voiceSubmitCreateText();
  } else {
  	console.log("voice command not recognized")
  }

}

function sentenceHas(array, string) {
  return (array.indexOf(string) > -1);
}

function voiceOpenCreateContact() {
  var request = $.ajax({url: $(".create-contact").attr("href"), 
  						  type: "GET"})
  	request.done(function(serverData) {
  	  console.log("success");
  	  cleanup();
  	  $(".contacts").append(serverData);
  	})
  	request.fail(function() {
  	  console.log("fail");
  	})
}

function voiceSubmitCreateContact() {
  var formData = $(".contact-field").serialize();
  console.log(formData);
  var request = $.ajax({url: $(".contact-field").attr("action"), 
  						  type: "POST",
  						  data: formData})
  	request.done(function(serverData) {
  	  console.log("success");
  	  cleanup(); 
      location.reload();
  	})
  	request.fail(function() {
  	  console.log("fail");
  	})
}

function voiceOpenCreateText() {
  var request = $.ajax({url: $(".text-contact").attr("href"), 
                type: "GET"})
    request.done(function(serverData) {
      console.log("success");
      console.log(serverData)
      cleanup();
      $(".texting").append(serverData);
    })
    request.fail(function() {
      console.log("fail");
    })
}

function voiceSubmitCreateText() {
  var formData = $(".text-contact-field").serialize();
    var request = $.ajax({url: $(".text-contact-field").attr("action"), 
                type: "POST",
                data: formData})
    request.done(function(serverData) {
      console.log("success");
      // console.log(serverData)
      location.reload();
    })
    request.fail(function() {
      console.log("fail");
    })
}

