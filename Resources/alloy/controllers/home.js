function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.home = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    $.__views.tableviewrow_login = Ti.UI.createTableViewRow({
        id: "tableviewrow_login",
        test: "includes/login.js",
        title: "Login"
    });
    var __alloyId0 = [];
    __alloyId0.push($.__views.tableviewrow_login);
    $.__views.tableview_index = Ti.UI.createTableView({
        data: __alloyId0,
        id: "tableview_index"
    });
    $.__views.home.add($.__views.tableview_index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;