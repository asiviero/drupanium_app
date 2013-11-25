function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "includes/create-account";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.create_account_window = Ti.UI.createWindow({
        id: "create_account_window"
    });
    $.__views.create_account_window && $.addTopLevelView($.__views.create_account_window);
    $.__views.create_account_scrollview = Ti.UI.createScrollView({
        backgroundColor: "white",
        id: "create_account_scrollview"
    });
    $.__views.create_account_window.add($.__views.create_account_scrollview);
    $.__views.usernameLabel = Ti.UI.createLabel({
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        left: "10dp",
        top: "10dp",
        width: "300dp",
        height: "auto",
        text: "Username",
        id: "usernameLabel"
    });
    $.__views.create_account_scrollview.add($.__views.usernameLabel);
    $.__views.usernameTextfield = Ti.UI.createTextField({
        height: "35dp",
        top: "30dp",
        left: "10dp",
        width: "300dp",
        font: {
            fontSize: "16dp"
        },
        borderWidth: "2dp",
        borderColor: "#BBBBBB",
        borderRadius: "5",
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        id: "usernameTextfield"
    });
    $.__views.create_account_scrollview.add($.__views.usernameTextfield);
    $.__views.emailLabel = Ti.UI.createLabel({
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        left: "10dp",
        top: "70dp",
        width: "300dp",
        height: "auto",
        text: "Email",
        id: "emailLabel"
    });
    $.__views.create_account_scrollview.add($.__views.emailLabel);
    $.__views.emailTextfield = Ti.UI.createTextField({
        height: "35dp",
        top: "90dp",
        left: "10dp",
        width: "300dp",
        font: {
            fontSize: "16dp"
        },
        borderWidth: "2dp",
        borderColor: "#BBBBBB",
        borderRadius: "5",
        autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
        id: "emailTextfield"
    });
    $.__views.create_account_scrollview.add($.__views.emailTextfield);
    $.__views.passwordLabel = Ti.UI.createLabel({
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        left: "10dp",
        top: "130dp",
        width: "300dp",
        height: "auto",
        text: "Password",
        id: "passwordLabel"
    });
    $.__views.create_account_scrollview.add($.__views.passwordLabel);
    $.__views.passwordTextfield = Ti.UI.createTextField({
        height: "35dp",
        top: "150dp",
        left: "10dp",
        width: "300dp",
        font: {
            fontSize: "16dp"
        },
        borderWidth: "2dp",
        borderColor: "#BBBBBB",
        borderRadius: 5,
        autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
        passwordMask: true,
        id: "passwordTextfield"
    });
    $.__views.create_account_scrollview.add($.__views.passwordTextfield);
    $.__views.nameLabel = Ti.UI.createLabel({
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        left: "10dp",
        top: "190dp",
        width: "300dp",
        height: "auto",
        text: "Full Name",
        id: "nameLabel"
    });
    $.__views.create_account_scrollview.add($.__views.nameLabel);
    $.__views.nameTextfield = Ti.UI.createTextField({
        height: "35dp",
        top: "210dp",
        left: "10dp",
        width: "300dp",
        font: {
            fontSize: "16dp"
        },
        borderWidth: "2dp",
        borderColor: "#BBBBBB",
        borderRadius: 5,
        autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
        id: "nameTextfield"
    });
    $.__views.create_account_scrollview.add($.__views.nameTextfield);
    $.__views.createAccountButton = Ti.UI.createButton({
        title: "Create account",
        height: "40dp",
        width: "200dp",
        top: "320dp",
        id: "createAccountButton"
    });
    $.__views.create_account_scrollview.add($.__views.createAccountButton);
    exports.destroy = function() {};
    _.extend($, $.__views);
    if (Titanium.App.Properties.getInt("userUid")) alert("You're logged in, please logout first"); else {
        $.createAccountButton.addEventListener("click", function() {
            var newUser = {
                account: {
                    name: $.usernameTextfield.value,
                    pass: $.passwordTextfield.value,
                    mail: $.emailTextfield.value,
                    field_fullname: {
                        und: [ {
                            value: $.nameTextfield.value
                        } ]
                    },
                    status: "1"
                }
            };
            Ti.API.info(JSON.stringify(newUser));
            var url = REST_PATH + "user.json";
            Ti.API.info(url);
            var xhr = Ti.Network.createHTTPClient({
                onload: function() {
                    alert("Account created");
                    Titanium.App.Properties.setInt("userUid", res.uid);
                    Titanium.App.Properties.setString("userName", newUser.name);
                    ({
                        uid: Titanium.App.Properties.getInt("userUid")
                    });
                }
            });
            xhr.open("POST", url);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify(newUser));
        });
        $.create_account_window.open();
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;