$(document).ready(function() {
  $(".texting").on("click", ".text-contact", function(event) {
    event.preventDefault();
    var request = $.ajax({
      url: $(this).attr("href"),
      type: "GET"
    })
    request.done(function(serverData) {
      console.log("success");
      console.log(serverData)
      cleanup();
      $(".texting").append(serverData);
    })
    request.fail(function() {
      console.log("fail");
    })
  })

  $(".text-contact-field").on("click", ".send-texts", function(event) {
    var formData = $(".text-contact-field").serialize();
    var request = $.ajax({
      url: $(".text-contact-field").attr("action"),
      type: "POST",
      data: formData
    })
    request.done(function(serverData) {
      console.log("success");
      // console.log(serverData)
    })
    request.fail(function() {
      console.log("fail");
    })
  })
})