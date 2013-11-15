/**
 * This file is used to create a simple node
 */

win = $.post_window;
var leftButton = Ti.UI.createButton({
  title: 'Cancel',
  style:Titanium.UI.iPhone.SystemButtonStyle.DONE
});

// Create a new event listener for the leftButton
leftButton.addEventListener("click", function() {
  // Just close this window
  win.close();
});
win.setLeftNavButton(leftButton);

if(Titanium.App.Properties.getInt("userUid")) {
  // Create a user variable to hold some information about the user
  var user = {
    uid: Titanium.App.Properties.getInt("userUid"),
    sessid: Titanium.App.Properties.getString("userSessionId"),
    session_name: Titanium.App.Properties.getString("userSessionName"),
    name: Titanium.App.Properties.getString("userName"),
  };

// Add the event listener for when the button is created
  $.saveButton.addEventListener("click", function() {
    
    // Create a new node object
    var node = {
      //'node':{
      "type":"article",
      "title": $.nodeTitleTextField.value,       
      "body": {
        "und": [
          { "value": $.nodeBodyTextarea.value, 
            "format": "full_html"
          }
        ]
      },
      "uid": user.uid
      //}
    };
    
    // Define the url 
    var url = REST_PATH + 'node';
    var xhr_node = Ti.Network.createHTTPClient();
    xhr_node.open("POST", url);
    
    xhr_node.setRequestHeader('Content-Type', 'application/json');
    xhr_node.setRequestHeader('cookie', Ti.App.Properties.getString('userSessionName') + '=' + Ti.App.Properties.getString('userSessionId')+';');
    xhr_node.setRequestHeader('X-CSRF-Token', Ti.App.Properties.getString('CSRF-Token'));
    
    xhr_node.send(JSON.stringify(node));
    
    // When the connection loads we do:
    xhr_node.onload = function() {
      var userStatusCode = xhr_node.status;
      if (userStatusCode == 200) {
        var userResponse = xhr_node.responseText;
        var parsedResponse = JSON.parse(userResponse);
        alert("Content created with id " + parsedResponse.nid);
        win.close();
      }
    };

  });
}  
else {
  alert("You need to login first");
}