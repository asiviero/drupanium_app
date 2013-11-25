function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.home_window = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "home_window"
    });
    $.__views.tableviewrow_login = Ti.UI.createTableViewRow({
        id: "tableviewrow_login",
        test: "includes/login",
        title: "Login"
    });
    var __alloyId0 = [];
    __alloyId0.push($.__views.tableviewrow_login);
    $.__views.tableviewrow_get_node = Ti.UI.createTableViewRow({
        id: "tableviewrow_get_node",
        test: "includes/get-node",
        title: "Get Node"
    });
    __alloyId0.push($.__views.tableviewrow_get_node);
    $.__views.tableviewrow_create_content = Ti.UI.createTableViewRow({
        id: "tableviewrow_create_content",
        test: "includes/post",
        title: "Create Content"
    });
    __alloyId0.push($.__views.tableviewrow_create_content);
    $.__views.tableviewrow_create_account = Ti.UI.createTableViewRow({
        id: "tableviewrow_create_account",
        test: "includes/create-account",
        title: "Create Account"
    });
    __alloyId0.push($.__views.tableviewrow_create_account);
    $.__views.tableviewrow_view_all_content = Ti.UI.createTableViewRow({
        id: "tableviewrow_view_all_content",
        test: "includes/view-all-content.js",
        title: "View All Content"
    });
    __alloyId0.push($.__views.tableviewrow_view_all_content);
    $.__views.tableviewrow_favorites = Ti.UI.createTableViewRow({
        id: "tableviewrow_favorites",
        test: "includes/favorites.js",
        title: "Favorites"
    });
    __alloyId0.push($.__views.tableviewrow_favorites);
    $.__views.tableview_index = Ti.UI.createTableView({
        data: __alloyId0,
        id: "tableview_index"
    });
    $.__views.home_window.add($.__views.tableview_index);
    $.__views.hometab = Ti.UI.createTab({
        window: $.__views.home_window,
        id: "hometab",
        title: "Home"
    });
    $.__views.hometab && $.addTopLevelView($.__views.hometab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.tableview_index.addEventListener("click", function(e) {
        if (e.rowData.test) {
            controller = Alloy.createController(e.rowData.test);
            $.hometab.open(controller.getView());
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;