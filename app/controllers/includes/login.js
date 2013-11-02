var win = $.login_window;

// Add the event listener for when the button is clicked
$.login_button_login.addEventListener('click', function() {

	usernameTextfield = $.login_textfield_username;
	passwordTextfield = $.login_textfield_password;

	// Ti.API.info(usernameTextfield.value);
	// Ti.API.info(passwordTextfield.value);
	// Create an object to hold the data entered in the form
	var user = {
		"name" : usernameTextfield.value,
		"pass" : passwordTextfield.value,
	};

	// Define the url which contains the full url
	// in this case, we'll connecting to http://example.com/api/rest/user/login
	var url = REST_PATH + 'user/login';

	// Ti.API.info(url);
	// Create a connection
	var xhr = Titanium.Network.createHTTPClient();

	// Open the connection using POST
	xhr.open("POST", url);

	xhr.setRequestHeader('Content-Type', 'application/json');
	//Ti.API.info(JSON.stringify(user));
	// Send the connection and the user object as argument
	xhr.send(JSON.stringify(user));

	// When the connection loads we do:
	xhr.onload = function() {
		// Ti.API.info("Response");
		// Save the status of the connection in a variable
		// this will be used to see if we have a connection (200) or not
		var statusCode = xhr.status;

		// Check if we have a valid status
		if (statusCode == 200) {

			// Create a variable response to hold the response
			var response = xhr.responseText;

			// Parse (build data structure) the JSON response into an object (data)
			var data = JSON.parse(response);

			// Set a global variable
			Titanium.App.Properties.setInt("userUid", Number(data.user.uid));
			Titanium.App.Properties.setString("userSessionId", data.sessid);
			Titanium.App.Properties.setString("userSessionName", data.session_name);

			// Create another connection to get the user
			var xhr2 = Titanium.Network.createHTTPClient();

			var getUser = REST_PATH + 'user/' + data.user.uid + '.json';

			xhr2.open("GET", getUser);
			xhr2.send();

			xhr2.onload = function() {
				var userStatusCode = xhr2.status;

				if (userStatusCode == 200) {
					var userResponse = xhr2.responseText;
					var user = JSON.parse(userResponse);

					alert("Welcome " + user.name);

					// Set the user.userName to the logged in user name
					Titanium.App.Properties.setString("userName", user.name);

					// Close the window

					// Fetch CSRF Token
					var xhr_csrf = Ti.Network.createHTTPClient();
					var get_token = REST_PATH + 'user/token.json';

					xhr_csrf.open("POST", get_token);
					xhr_csrf.clearCookies(get_token);// THE FIX.

					//xhr_csrf.setRequestHeader('Content-Type', 'application/json');
					xhr_csrf.setRequestHeader('cookie', data.session_name + '=' + data.sessid + ";");
					xhr_csrf.onload = function() {
						var userStatusCode = xhr_csrf.status;
						if (userStatusCode == 200) {
							var userResponse = xhr_csrf.responseText;
							var token = JSON.parse(userResponse);

							// Set CSRF-Token
							Titanium.App.Properties.setString("CSRF-Token", token.token);
							win.close();
						}
					};
					xhr_csrf.send();

				}
			};

		} else {
			alert("There was an error");
		}
	};

});

// Add the event listener for when the button is created
$.login_button_logout.addEventListener('click', function() {

	// Define the url which contains the full url
	// in this case, we'll connecting to http://example.com/api/rest/user/logout
	var logoutUrl = REST_PATH + 'user/logout';

	// Create a connection
	var xhr3 = Titanium.Network.createHTTPClient();

			// Open the connection
			xhr3.open("POST", logoutUrl);

			xhr3.setRequestHeader('Content-Type', 'application/json');
			xhr3.setRequestHeader('cookie', Ti.App.Properties.getString('userSessionName') + '=' + Ti.App.Properties.getString('userSessionId')+';');
			xhr3.setRequestHeader('X-CSRF-Token', Ti.App.Properties.getString('CSRF-Token'));
			// Send the connection
			xhr3.send();

			// When the connection loads we do:
			xhr3.onload = function() {
				// Save the status of the connection in a variable
				// this will be used to see if we have a connection (200) or not
				var statusCodeLogout = xhr3.status;
				// Check if we have a connection
				if (statusCodeLogout == 200) {
					Titanium.App.Properties.removeProperty("userUid");
					Titanium.App.Properties.removeProperty("userSessionId");
					Titanium.App.Properties.removeProperty("userSessionName");
					Titanium.App.Properties.removeProperty("userName");
					Titanium.App.Properties.removeProperty("CSRF-Token");

					alert("Logged out!");
				} else {
					alert("You're not currently logged in");
					// We remvoe all the properties since the user is requesting to logout
					// is probably not logged in but the properties are set
					Titanium.App.Properties.removeProperty("userUid");
					Titanium.App.Properties.removeProperty("userSessionId");
					Titanium.App.Properties.removeProperty("userSessionName");
					Titanium.App.Properties.removeProperty("userName");
					Titanium.App.Properties.removeProperty("CSRF-Token");
				}
			};
			xhr3.onerror = function() {
				var statusCodeLogout = xhr3.status;
				// Check if we have a connection
				if (statusCodeLogout == 406) {
					Titanium.App.Properties.removeProperty("userUid");
					Titanium.App.Properties.removeProperty("userSessionId");
					Titanium.App.Properties.removeProperty("userSessionName");
					Titanium.App.Properties.removeProperty("userName");
					Titanium.App.Properties.removeProperty("CSRF-Token");
					alert("Goodbye");
				}
			};

		
	

});

