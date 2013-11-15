function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "includes/get-node";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.get_node_window = Ti.UI.createWindow({
        id: "get_node_window",
        title: "Get Node"
    });
    $.__views.get_node_window && $.addTopLevelView($.__views.get_node_window);
    $.__views.get_node_view = Ti.UI.createScrollView({
        backgroundColor: "white",
        contentWidth: "auto",
        contentHeight: "auto",
        showVerticalScrollIndicator: true,
        showHorizontalScrollIndicator: true,
        top: 0,
        id: "get_node_view"
    });
    $.__views.get_node_window.add($.__views.get_node_view);
    $.__views.get_node_node_title = Ti.UI.createLabel({
        color: "#000",
        textAlign: "left",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        top: 10,
        height: 18,
        left: 10,
        right: 10,
        id: "get_node_node_title"
    });
    $.__views.get_node_view.add($.__views.get_node_node_title);
    $.__views.get_node_node_body = Ti.UI.createLabel({
        color: "#000",
        textAlign: "left",
        font: {
            fontSize: 14,
            fontWeight: "normal"
        },
        top: 30,
        height: "auto",
        left: 10,
        right: 10,
        id: "get_node_node_body"
    });
    $.__views.get_node_view.add($.__views.get_node_node_body);
    $.__views.get_node_flag_button = Ti.UI.createButton({
        height: 40,
        width: 200,
        top: 1e3,
        id: "get_node_flag_button",
        title: "Bookmark this"
    });
    $.__views.get_node_view.add($.__views.get_node_flag_button);
    $.__views.get_node_error_message = Ti.UI.createLabel({
        color: "#000",
        textAlign: "left",
        font: {
            fontSize: 24,
            fontWeight: "bold"
        },
        top: 25,
        left: 15,
        height: 18,
        text: "Please check your internet xhr.",
        id: "get_node_error_message"
    });
    $.__views.get_node_view.add($.__views.get_node_error_message);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var win = $.get_node_window;
    win.addEventListener("open", function() {
        $.get_node_node_title.hide();
        $.get_node_node_body.hide();
        $.get_node_flag_button.hide();
        $.get_node_error_message.hide();
    });
    if (Titanium.App.Properties.getInt("userUid")) var user = {
        uid: Titanium.App.Properties.getInt("userUid")
    };
    var url = REST_PATH + "node/1" + ".json";
    var xhr = Titanium.Network.createHTTPClient();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function() {
        var statusCode = xhr.status;
        if (200 == statusCode) {
            var response = xhr.responseText;
            var data = JSON.parse(response);
            $.get_node_node_title.setText(data.title);
            $.get_node_node_title.show();
            $.get_node_node_body.setText(data.body.und[0].value);
            $.get_node_node_body.show();
            void 0 !== user && user.uid ? $.get_node_flag_button.show() : $.get_node_flag_button.hide();
            $.get_node_flag_button.addEventListener("click", function() {
                var url = REST_PATH + "flag/flag.json";
                var flag = {
                    flag_name: "bookmarks",
                    content_id: "1",
                    action: "flag",
                    uid: user.uid
                };
                var xhr = Titanium.Network.createHTTPClient();
                xhr.open("POST", url);
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.setRequestHeader("cookie", Ti.App.Properties.getString("userSessionName") + "=" + Ti.App.Properties.getString("userSessionId") + ";");
                xhr.setRequestHeader("X-CSRF-Token", Ti.App.Properties.getString("CSRF-Token"));
                xhr.send(JSON.stringify(flag));
                xhr.onload = function() {
                    var statusCode = xhr.status;
                    200 == statusCode ? alert("Flagged") : alert("There was an error");
                };
            });
        } else $.get_node_error_message.show();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;