function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.index = A$(Ti.UI.createTabGroup({
        id: "index"
    }), "TabGroup", null);
    $.__views.__alloyId2 = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Home",
        id: "__alloyId2"
    }), "Window", null);
    $.__views.__alloyId3 = A$(Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "I am the Home Window",
        id: "__alloyId3"
    }), "Label", $.__views.__alloyId2);
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.__alloyId1 = A$(Ti.UI.createTab({
        window: $.__views.__alloyId2,
        title: "Home",
        icon: "global_icons/53-house.png",
        id: "__alloyId1"
    }), "Tab", null);
    $.__views.index.addTab($.__views.__alloyId1);
    $.__views.__alloyId5 = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "User",
        id: "__alloyId5"
    }), "Window", null);
    $.__views.__alloyId6 = A$(Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "I am the User Window",
        id: "__alloyId6"
    }), "Label", $.__views.__alloyId5);
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.__alloyId4 = A$(Ti.UI.createTab({
        window: $.__views.__alloyId5,
        title: "User",
        icon: "global_icons/111-user.png",
        id: "__alloyId4"
    }), "Tab", null);
    $.__views.index.addTab($.__views.__alloyId4);
    $.__views.__alloyId8 = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Search",
        id: "__alloyId8"
    }), "Window", null);
    $.__views.__alloyId9 = A$(Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "I am the Search Window",
        id: "__alloyId9"
    }), "Label", $.__views.__alloyId8);
    $.__views.__alloyId8.add($.__views.__alloyId9);
    $.__views.__alloyId7 = A$(Ti.UI.createTab({
        window: $.__views.__alloyId8,
        title: "Search",
        icon: "global_icons/06-magnify.png",
        id: "__alloyId7"
    }), "Tab", null);
    $.__views.index.addTab($.__views.__alloyId7);
    $.__views.__alloyId11 = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Map",
        id: "__alloyId11"
    }), "Window", null);
    $.__views.__alloyId12 = A$(Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "I am the Map Window",
        id: "__alloyId12"
    }), "Label", $.__views.__alloyId11);
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.__alloyId10 = A$(Ti.UI.createTab({
        window: $.__views.__alloyId11,
        title: "Map",
        icon: "global_icons/07-map-marker.png",
        id: "__alloyId10"
    }), "Tab", null);
    $.__views.index.addTab($.__views.__alloyId10);
    $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;