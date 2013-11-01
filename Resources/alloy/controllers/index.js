function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.tabgroup_index = Ti.UI.createTabGroup({
        id: "tabgroup_index"
    });
    $.__views.__alloyId1 = Alloy.createController("home", {
        id: "__alloyId1"
    });
    $.__views.tabgroup_index.addTab($.__views.__alloyId1.getViewEx({
        recurse: true
    }));
    $.__views.tabgroup_index && $.addTopLevelView($.__views.tabgroup_index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.tabgroup_index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;