$(document).ready(function() {
  var recognizer = null;
  // recognize();
  document.addEventListener("keyup", listener, false);
});

function recognize() {
  //speechRecognization interface is the heart of recognization API
  window.speechRecognition = window.speechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.webkitSpeechRecognition;

  if (window.speechRecognition == undefined) {
    console.log("Speech Recogniztion API Not Supported");
  } else {
    recognizer = new speechRecognition();
    recognizer.continuous = true;
    recognizer.lang = "en-US";
    recognizer.interimResults = false;

    recognizer.onstart = function() {
      console.log("Recogniztion started");
    }

    recognizer.onresult = function(event) {  
      //event.resultIndex returns the index of first word spoken in the currently stoped sentence.
      //event.results.length is the total number of words spoken in this session.
      console.log(event.results.length)
      for(var count = event.resultIndex; count < event.results.length; count++) {
      //event.results[count][number], here 2D represents the most probable work for the spoken word.
      //event.result[count][number].transscript returns word string of the most probable word of the select word index.  
        console.log(event.results[count][0].transcript);
        analyze(event.results[count][0].transcript);
        // restart();
      }
    }

    recognizer.onend = function() {
      recognizer = null;
      console.log("Recogniztion stopped");
    }

    recognizer.start();
  }
}

function stop() {
  if (recognizer != null) {
    recognizer.stop();
  }
}

function restart() {
  if (recognizer != null) {
    stop();
    recognize();

  }
}

function listener(key) {
  // F1 and F2
  if (key.keyCode === 112) {
    recognize();
  } else if (key.keyCode === 113) {
    stop();
  }
}






