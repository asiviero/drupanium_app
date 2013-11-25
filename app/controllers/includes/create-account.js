if (Titanium.App.Properties.getInt("userUid")) {
  alert("You're logged in, please logout first");
} else {

  // Add an event listener to the create account button
  $.createAccountButton.addEventListener('click', function() {
    // Define an object, this object takes all the
    // input from the user and is sent to Drupal
    var newUser = {
      "account" : {
        "name" : $.usernameTextfield.value,
        "pass" : $.passwordTextfield.value,
        "mail" : $.emailTextfield.value,
        "field_fullname" : {
          "und" : [{
            "value" : $.nameTextfield.value
          }]
        },
        "status" : '1',
      }
    };
    Ti.API.info(JSON.stringify(newUser));

    // Define the URL to register this user
    var url = REST_PATH + "user.json";
    Ti.API.info(url);
    var xhr = Ti.Network.createHTTPClient({
      onload : function() {
        // res will be an object including the uid and the uri to the new user
        // Alert the user the new account has been created
        alert("Account created");

        // Services only respond with a uid and a uri, but to Drupal eyes, the user is logged in
        // although we don't have a session id the user is logged in.
        // Services probably should return the session id since is set once the user created the account
        // This probably has something to do with the fact that you can create an account but it must
        // be approved sometimes.
        // The other way to do this would be to logout and then login the user now having a session
        Titanium.App.Properties.setInt("userUid", res.uid);
        Titanium.App.Properties.setString("userName", newUser.name);
        var user = {
          uid : Titanium.App.Properties.getInt("userUid"),
        };
      }
    });

    xhr.open("POST", url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(newUser));
  });

  $.create_account_window.open();
}
