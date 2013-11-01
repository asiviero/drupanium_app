function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.login = Ti.UI.createScrollView({
        contentWidth: "auto",
        contentHeight: "auto",
        showVerticalScrollIndicator: true,
        showHorizontalScrollIndicator: true,
        top: "0",
        id: "login"
    });
    $.__views.login && $.addTopLevelView($.__views.login);
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
    $.__views.login.add($.__views.login_label_username);
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
    $.__views.login.add($.__views.login_textfield_username);
    $.__views.login_label_password = Ti.UI.createLabel({
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
        text: "Password",
        id: "login_label_password"
    });
    $.__views.login.add($.__views.login_label_password);
    $.__views.login_button_login = Ti.UI.createButton({
        height: 40,
        width: 200,
        top: 170,
        title: "Login",
        id: "login_button_login"
    });
    $.__views.login.add($.__views.login_button_login);
    $.__views.login_button_logout = Ti.UI.createButton({
        height: 40,
        width: 200,
        top: 220,
        title: "Logout",
        id: "login_button_logout"
    });
    $.__views.login.add($.__views.login_button_logout);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;