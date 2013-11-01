function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "includes/login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.login_window = Ti.UI.createWindow({
        id: "login_window",
        title: "Login"
    });
    $.__views.login_window && $.addTopLevelView($.__views.login_window);
    $.__views.__alloyId2 = Ti.UI.createScrollView({
        backgroundColor: "white",
        contentWidth: "auto",
        contentHeight: "auto",
        showVerticalScrollIndicator: true,
        showHorizontalScrollIndicator: true,
        top: "0",
        id: "__alloyId2"
    });
    $.__views.login_window.add($.__views.__alloyId2);
    $.__views.login_label_username = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        left: 10,
        top: 10,
        width: 300,
        height: "auto",
        text: "Username",
        id: "login_label_username"
    });
    $.__views.__alloyId2.add($.__views.login_label_username);
    $.__views.login_textfield_username = Ti.UI.createTextField({
        height: 35,
        top: 30,
        left: 10,
        width: 300,
        font: {
            fontSize: 16
        },
        borderWidth: 2,
        borderColor: "#bbb",
        borderRadius: 5,
        autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
        id: "login_textfield_username"
    });
    $.__views.__alloyId2.add($.__views.login_textfield_username);
    $.__views.login_label_password = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        left: 10,
        top: 75,
        width: 300,
        height: "auto",
        text: "Password",
        id: "login_label_password"
    });
    $.__views.__alloyId2.add($.__views.login_label_password);
    $.__views.login_textfield_password = Ti.UI.createTextField({
        height: 35,
        top: 100,
        left: 10,
        width: 300,
        font: {
            fontSize: 16
        },
        borderWidth: 2,
        borderColor: "#bbb",
        borderRadius: 5,
        autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
        passwordMask: true,
        id: "login_textfield_password"
    });
    $.__views.__alloyId2.add($.__views.login_textfield_password);
    $.__views.login_button_login = Ti.UI.createButton({
        height: 40,
        width: 200,
        top: 170,
        title: "Login",
        id: "login_button_login"
    });
    $.__views.__alloyId2.add($.__views.login_button_login);
    $.__views.login_button_logout = Ti.UI.createButton({
        height: 40,
        width: 200,
        top: 220,
        title: "Logout",
        id: "login_button_logout"
    });
    $.__views.__alloyId2.add($.__views.login_button_logout);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var win = $.login_window;
    $.login_button_login.addEventListener("click", function() {
        usernameTextfield = $.login_textfield_username;
        passwordTextfield = $.login_textfield_password;
        var user = {
            username: usernameTextfield.value,
            password: passwordTextfield.value
        };
        var url = REST_PATH + "user/login";
        var xhr = Titanium.Network.createHTTPClient();
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.open("POST", url);
        xhr.send(JSON.stringify(user));
        xhr.onload = function() {
            var statusCode = xhr.status;
            if (200 == statusCode) {
                var response = xhr.responseText;
                var data = JSON.parse(response);
                Titanium.App.Properties.setInt("userUid", Number(data.user.uid));
                Titanium.App.Properties.setString("userSessionId", data.sessid);
                Titanium.App.Properties.setString("userSessionName", data.sesion_name);
                var xhr2 = Titanium.Network.createHTTPClient();
                var getUser = REST_PATH + "user/" + data.user.uid + ".json";
                xhr2.open("GET", getUser);
                xhr2.send();
                xhr2.onload = function() {
                    var userStatusCode = xhr2.status;
                    if (200 == userStatusCode) {
                        var userResponse = xhr2.responseText;
                        var user = JSON.parse(userResponse);
                        alert("Welcome " + user.name);
                        Titanium.App.Properties.setString("userName", user.name);
                        win.close();
                    }
                };
            } else alert("There was an error");
        };
    });
    $.login_button_logout.addEventListener("click", function() {
        var logoutUrl = REST_PATH + "user/logout";
        var xhr3 = Titanium.Network.createHTTPClient();
        xhr3.setRequestHeader("Content-Type", "application/json");
        xhr3.open("POST", logoutUrl);
        xhr3.send();
        xhr3.onload = function() {
            var statusCodeLogout = xhr3.status;
            if (200 == statusCodeLogout) {
                Titanium.App.Properties.removeProperty("userUid");
                Titanium.App.Properties.removeProperty("userSessionId");
                Titanium.App.Properties.removeProperty("userSessionName");
                Titanium.App.Properties.removeProperty("userName");
                alert("Goodbye");
            } else {
                alert("You're not currently logged in");
                Titanium.App.Properties.removeProperty("userUid");
                Titanium.App.Properties.removeProperty("userSessionId");
                Titanium.App.Properties.removeProperty("userSessionName");
                Titanium.App.Properties.removeProperty("userName");
            }
        };
        xhr3.onerror = function() {
            var statusCodeLogout = xhr3.status;
            if (406 == statusCodeLogout) {
                Titanium.App.Properties.removeProperty("userUid");
                Titanium.App.Properties.removeProperty("userSessionId");
                Titanium.App.Properties.removeProperty("userSessionName");
                Titanium.App.Properties.removeProperty("userName");
                alert("Goodbye");
            }
        };
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;