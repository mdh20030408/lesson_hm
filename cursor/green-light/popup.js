// This file is currently empty, but you can add functionality here in the future if needed.
document.addEventListener('DOMContentLoaded', function() {
  var changeColorButton = document.getElementById('changeColor');
  
  changeColorButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "green";'}
      );
    });
  });
});

console.log("Hello World Extension loaded!");
