// Create a user variable to hold some information about the user
var user = {
  uid: Titanium.App.Properties.getInt("userUid"),
  sessid: Titanium.App.Properties.getString("userSessionId"),
  session_name: Titanium.App.Properties.getString("userSessionName"),
  name: Titanium.App.Properties.getString("userName"),
};

// Create a new variable to map the current window
var win = Ti.UI.currentWindow;

// Check if the user is logged in
if(user.sessid) {

  // Define the URL, the full path would be http://example.com/api/rest/user/USERID.json
  var url = REST_PATH + 'user/' + user.uid + '.json';
  Ti.API.info(url);
  // Create a new connection in the variable xhr
  var xhr = Titanium.Network.createHTTPClient();

  // When the connection loads do:
  xhr.onload = function() {
    // Use the status Code in the variable statusCode
    var statusCode = xhr.status;
    
    Ti.API.info("Status is: " + statusCode);
    
    // Check for the status code = 200
    if(statusCode == 200) {
      // Create a new variable to contain the response
      var response = xhr.responseText;
      Ti.API.info(response);
      // Create a new variable to process the JSON output and create an object inside data
      var data = JSON.parse(response);
      
      // Set the ImageView image property to the one informed by the site
      var imgurl;
      if(data.picture !== null) {
        imgurl = SITE_PATH + 'sites/default/files/pictures/' + data.picture.filename;
      }
      else {
        imgurl = '';
      }
      $.userPicture.setImage(imgurl);
      
      // Setting the label texts
      $.userName.setText(data.name);
      $.userFullName.setText(data.field_fullname);
      $.userCountry.setText(data.field_country);
      $.userAbout.setText(data.field_aboutme);
      
      // Show scrollable view
      $.user_scrollview.show();
    }
  };

  //Open the connection using GET
  xhr.open("GET", url);

  // Send the connection, since we're using GET we don't pass anything as argument
  xhr.send();
}
else {
  alert("You need to log in first");
  
  // Hide the scrollable view
  $.user_scrollview.hide();  
}


