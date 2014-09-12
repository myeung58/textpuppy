function analyze(sentence) {
  var strings = sentence.split(" ");
  if (sentenceHas(strings, "create") && sentenceHas(strings, "new") && sentenceHas(strings, "contact")) {
    // if field does not exist, open field; if it does, use jquery focus
    voiceOpenCreateContact();
  } else if (sentenceHas(strings, "submit") && sentenceHas(strings, "contact")) {
    voiceSubmitCreateContact();
  } else if (sentenceHas(strings, "create") && sentenceHas(strings, "new") && sentenceHas(strings, "text")) {
    voiceOpenCreateText();
  } else if (sentenceHas(strings, "submit") && sentenceHas(strings, "text")) {
    voiceSubmitCreateText();
  } else if (sentenceHas(strings, "contact") && sentenceHas(strings, "name")) {
    strings.shift();
    strings.shift();
    voiceInsertContactName(strings);
  } else if (sentenceHas(strings, "contact") && sentenceHas(strings, "number")) {
    strings.shift();
    strings.shift();
    voiceInsertContactNumber(strings);
  } else if (sentenceHas(strings, "text") && sentenceHas(strings, "people")) {
    strings.shift();
    strings.shift();
    voiceInsertTextContact(strings);
  } else if (sentenceHas(strings, "text") && sentenceHas(strings, "content")) {
    strings.shift();
    strings.shift();
    voiceInsertTextContent(strings);
  } else {
    alert("I don't know what you are talking about. Try again.")
  }

}

/**
 * ##sentenceHas
 * `func` bla bla bla
 * @param  {[type]} array  [description]
 * @param  {[type]} string [description]
 * @return {[type]}        [description]
 */
function sentenceHas(array, string) {
  // sdfjsdjf
  return (array.indexOf(string) > -1);
}

function voiceOpenCreateContact() {
  var request = $.ajax({
    url: $(".create-contact").attr("href"),
    type: "GET"
  })
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
  var request = $.ajax({
    url: $(".contact-field").attr("action"),
    type: "POST",
    data: formData
  })
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
  var request = $.ajax({
    url: $(".text-contact").attr("href"),
    type: "GET"
  })
  request.done(function(serverData) {
    console.log("success");
    cleanup();
    $(".texting").append(serverData);
  })
  request.fail(function() {
    console.log("fail");
  })
}

function voiceSubmitCreateText() {
  var formData = $(".text-contact-field").serialize();
  var request = $.ajax({
    url: $(".text-contact-field").attr("action"),
    type: "POST",
    data: formData
  })
  request.done(function(serverData) {
    console.log("success");
    // console.log(serverData)
    location.reload();
  })
  request.fail(function() {
    console.log("fail");
  })
}

function voiceInsertContactName(strings) {
  var contactName = "";
  for (var i = 0; i < strings.length; i++) {
    contactName += strings[i];
  }
  $(".input-field1").first().val(contactName);
}

function voiceInsertContactNumber(strings) {
  var contactNumber = "";
  for (var i = 0; i < strings.length; i++) {
    contactNumber += strings[i];
  }
  $(".input-field2").val(contactNumber);
}

function voiceInsertTextContact(strings) {
  var textContacts = "";
  for (var i = 0; i < strings.length; i++) {
    textContacts += (strings[i] + ",");
  }
  $(".input-field3").val(textContacts.substring(0, textContacts.length - 1));
}

function voiceInsertTextContent(strings) {
  var textContent = "";
  for (var i = 0; i < strings.length; i++) {
    textContent += (strings[i] + " ");
  }
  $(".input-field4").val(textContent.substring(0, textContent.length - 1));




  
}