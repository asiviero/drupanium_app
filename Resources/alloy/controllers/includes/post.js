function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "includes/post";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.post_window = Ti.UI.createWindow({
        id: "post_window",
        title: "Login"
    });
    $.__views.post_window && $.addTopLevelView($.__views.post_window);
    $.__views.__alloyId3 = Ti.UI.createView({
        backgroundColor: "#666666",
        top: 0,
        id: "__alloyId3"
    });
    $.__views.post_window.add($.__views.__alloyId3);
    $.__views.nodeTitleLabel = Ti.UI.createLabel({
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        left: "10dp",
        top: "10dp",
        width: "300dp",
        height: "auto",
        color: "#FFFFFF",
        id: "nodeTitleLabel",
        text: "Title"
    });
    $.__views.__alloyId3.add($.__views.nodeTitleLabel);
    $.__views.nodeTitleTextField = Ti.UI.createTextField({
        height: "35dp",
        top: "30dp",
        left: "10dp",
        width: "300dp",
        font: {
            fontSize: "16dp"
        },
        borderWidth: "2dp",
        borderColor: "#BBBBBB",
        borderRadius: "5dp",
        backgroundColor: "#FFFFFF",
        id: "nodeTitleTextField"
    });
    $.__views.__alloyId3.add($.__views.nodeTitleTextField);
    $.__views.nodeBodyLabel = Ti.UI.createLabel({
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        left: "10dp",
        top: "75dp",
        width: "300dp",
        height: "auto",
        color: "#FFFFFF",
        id: "nodeBodyLabel",
        text: "Body"
    });
    $.__views.__alloyId3.add($.__views.nodeBodyLabel);
    $.__views.nodeBodyTextarea = Ti.UI.createTextArea({
        editable: true,
        value: "",
        height: "150dp",
        width: "300dp",
        top: "100dp",
        font: {
            fontSize: "16dp",
            fontWeight: "normal"
        },
        color: "#888888",
        textAlign: "left",
        borderWidth: "2dp",
        borderColor: "#BBBBBB",
        borderRadius: "5dp",
        suppressReturn: true,
        id: "nodeBodyTextarea"
    });
    $.__views.__alloyId3.add($.__views.nodeBodyTextarea);
    $.__views.saveButton = Ti.UI.createButton({
        height: "40dp",
        width: "200dp",
        top: "320dp",
        title: "Save",
        id: "saveButton"
    });
    $.__views.__alloyId3.add($.__views.saveButton);
    exports.destroy = function() {};
    _.extend($, $.__views);
    win = $.post_window;
    var leftButton = Ti.UI.createButton({
        title: "Cancel",
        style: Titanium.UI.iPhone.SystemButtonStyle.DONE
    });
    leftButton.addEventListener("click", function() {
        win.close();
    });
    win.setLeftNavButton(leftButton);
    if (Titanium.App.Properties.getInt("userUid")) {
        var user = {
            uid: Titanium.App.Properties.getInt("userUid"),
            sessid: Titanium.App.Properties.getString("userSessionId"),
            session_name: Titanium.App.Properties.getString("userSessionName"),
            name: Titanium.App.Properties.getString("userName")
        };
        $.saveButton.addEventListener("click", function() {
            var node = {
                type: "article",
                title: $.nodeTitleTextField.value,
                body: {
                    und: [ {
                        value: $.nodeBodyTextarea.value,
                        format: "full_html"
                    } ]
                },
                uid: user.uid
            };
            var url = REST_PATH + "node";
            var xhr_node = Ti.Network.createHTTPClient();
            xhr_node.open("POST", url);
            xhr_node.setRequestHeader("Content-Type", "application/json");
            xhr_node.setRequestHeader("cookie", Ti.App.Properties.getString("userSessionName") + "=" + Ti.App.Properties.getString("userSessionId") + ";");
            xhr_node.setRequestHeader("X-CSRF-Token", Ti.App.Properties.getString("CSRF-Token"));
            xhr_node.send(JSON.stringify(node));
            xhr_node.onload = function() {
                var userStatusCode = xhr_node.status;
                if (200 == userStatusCode) {
                    var userResponse = xhr_node.responseText;
                    var parsedResponse = JSON.parse(userResponse);
                    alert("Content created with id " + parsedResponse.nid);
                    win.close();
                }
            };
        });
    } else alert("You need to login first");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;