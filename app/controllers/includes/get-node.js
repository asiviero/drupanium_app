/**
 * Get a simple node
 * in this example, it fetches the node with nid 1
 */


// Define the variable win to contain the current window
var win = $.get_node_window;

win.addEventListener('open',function(e) {
	// Hide all labels and buttons
	$.get_node_node_title.hide();
	$.get_node_node_body.hide();
	$.get_node_flag_button.hide();
	$.get_node_error_message.hide();
});

if(Titanium.App.Properties.getInt("userUid")) {
	// Create a user variable to hold some information about the user
	var user = {
		uid: Titanium.App.Properties.getInt("userUid"),
	};
}

// Define the url which contains the full url
// in this case, we'll connecting to http://example.com/api/rest/node/1.json
var url = REST_PATH + 'node/1' + '.json';

// Create a connection inside the variable xhr
var xhr = Titanium.Network.createHTTPClient();

// Open the xhr
xhr.open("GET",url);

// Send the xhr
xhr.send();

// When the xhr loads we do:
xhr.onload = function() {
	// Save the status of the xhr in a variable
	// this will be used to see if we have a xhr (200) or not
	var statusCode = xhr.status;
	
	// Check if we have a xhr
	if(statusCode == 200) {
		// Save the responseText from the xhr in the response variable
		var response = xhr.responseText;
		
		// Parse (build data structure) the JSON response into an object (data)
		var data = JSON.parse(response);
		
		// Set text for node title
		$.get_node_node_title.setText(data.title);
		$.get_node_node_title.show();
		
		// Set text for node body
		$.get_node_node_body.setText(data.body.und[0].value);
		$.get_node_node_body.show();
		
		if(user !== undefined && user.uid) {
			// Display flag button
			$.get_node_flag_button.show();
		} else {
			$.get_node_flag_button.hide();
		}
		
		// Add the event listener for when the button is created
		$.get_node_flag_button.addEventListener('click', function() {
			
			// Define the url which contains the full url
			// in this case, we'll connecting to http://example.com/api/rest/flag/flag.json
			var url = REST_PATH + 'flag/flag.json';
			
			var flag = {
				"flag_name": "bookmarks",
				"content_id": "1",
				"action": "flag",
				"uid": user.uid
			};

			// Create a conection inside the variable xhr
			var xhr = Titanium.Network.createHTTPClient();
			
			
			// Open the xhr
			xhr.open("POST",url);

			xhr.setRequestHeader('Content-Type','application/json');
			xhr.setRequestHeader('cookie', Ti.App.Properties.getString('userSessionName') + '=' + Ti.App.Properties.getString('userSessionId')+';');
			xhr.setRequestHeader('X-CSRF-Token', Ti.App.Properties.getString('CSRF-Token'));
			
			// Send the xhr
			xhr.send(JSON.stringify(flag));
			
			// When the xhr loads we do:
			xhr.onload = function() {
				// Save the status of the xhr in a variable
				// this will be used to see if we have a xhr (200) or not
				var statusCode = xhr.status;
				
				// Check if we have a xhr
				if(statusCode == 200) {
					alert("Flagged");
				}
				else {
					alert("There was an error");
				}
			};
		});

	}
	else {
		
		// Display error message
		$.get_node_error_message.show();
	}
};

