/**
 * Remember that in the debug process we can always use:
 * Ti.API.info(foo);
 * to log something to the console
 */

// Include our config file
Ti.include('../config.js');

// Define the variable win to contain the current window
var win = Ti.UI.currentWindow;

// Create the label for the node title
var usernameLabel = Titanium.UI.createLabel({
	text:'Username',
	font:{fontSize:14, fontWeight: "bold"},
	left:10,
	top:10,
	width:300,
	height:'auto'
});

// Add the label to the window
win.add(usernameLabel);

// Create the textfield to hold the node title
var usernameTextfield = Titanium.UI.createTextField({
	height:35,
	top:30,
	left:10,
	width:300,
	font:{fontSize:16},
	borderWidth:2,
	borderColor:'#bbb',
	borderRadius:5,
	autocapitalization:Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
});

// Add the textfield to the window
win.add(usernameTextfield);

//Create the label for the node title
var passwordLabel = Titanium.UI.createLabel({
	text:'Password',
	font:{fontSize:14, fontWeight: "bold"},
	left:10,
	top:75,
	width:300,
	height:'auto'
});

// Add the label to the window
win.add(passwordLabel);

//Create the textfield to hold the node title
var passwordTextfield = Titanium.UI.createTextField({
	height:35,
	top:100,
	left:10,
	width:300,
	font:{fontSize:16},
	borderWidth:2,
	borderColor:'#bbb',
	borderRadius:5,
	autocapitalization:Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
	passwordMask:true,
});

// Add the textarea to the window
win.add(passwordTextfield);

// Add the login button
var loginButton = Titanium.UI.createButton({
	title:'Login',
	height:40,
	width:200,
	top:170
});

// Add the button to the window
win.add(loginButton);

//Add the event listener for when the button is created
loginButton.addEventListener('click', function() {
	
	var user = {
		username: usernameTextfield.value,
		password: passwordTextfield.value,
	}
	
	// Define the url which contains the full url
	// in this case, we'll connecting to http://example.com/api/rest/node/1.json
	var url = SITE_PATH + 'user/login';

	// Create a conection inside the variable connection
	var connection = Titanium.Network.createHTTPClient();
	
	connection.setRequestHeader('Content-Type','application/json; charset=utf-8');
	
	// Open the connection
	connection.open("POST",url);

	// Send the connection
	connection.send(user);
	
	// When the connection loads we do:
	connection.onload = function() {
		// Save the status of the connection in a variable
		// this will be used to see if we have a connection (200) or not
		var statusCode = connection.status;
		// Check if we have a connection
		if(statusCode == 200) {
			alert("Login successful");
			
			var response = connection.responseText;
			
			// Parse (build data structure) the JSON response into an object (data)
			var data = JSON.parse(response);
			
			// alert(data);
			
			// Set a global variable
			Ti.App.userSessionId = data.sessid;
			Ti.App.userSessionName = data.session_name;
		}
		else {
			alert("There was an error");
		}
	}
});

//Add the logout button
var logoutButton = Titanium.UI.createButton({
	title:'Logout',
	height:40,
	width:200,
	top:220
});

// Add the button to the window
win.add(logoutButton);

//Add the event listener for when the button is created
logoutButton.addEventListener('click', function() {
	
	// Define the url which contains the full url
	// in this case, we'll connecting to http://example.com/api/rest/node/1.json
	var url = SITE_PATH + 'user/logout';

	// Create a conection inside the variable connection
	var connection = Titanium.Network.createHTTPClient();
	
	connection.setRequestHeader('Content-Type','application/json; charset=utf-8');
	
	// Open the connection
	connection.open("POST",url);

	// Send the connection
	connection.send();
	
	// When the connection loads we do:
	connection.onload = function() {
		// Save the status of the connection in a variable
		// this will be used to see if we have a connection (200) or not
		var statusCode = connection.status;
		// Check if we have a connection
		if(statusCode == 200) {
			alert("Session terminated");
		}
		else {
			alert("There was an error");
		}
	}
});
