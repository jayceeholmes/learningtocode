console.log('background');

chrome.commands.onCommand.addListener(function(command) {
  console.log('onCommand event received for message: ', command);

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var tab = tabs[0];
    console.log('active tab',tab);
    if (!tab) {
      return;
    }

    chrome.tabs.sendMessage(tab.id, command, function(response) {
      console.log('background tab received message:',command);
    });
  });
});
