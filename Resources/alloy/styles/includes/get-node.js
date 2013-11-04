module.exports = [ {
    isClass: true,
    priority: 10000.0001,
    key: "container",
    style: {
        backgroundColor: "white"
    }
}, {
    isId: true,
    priority: 100000.001,
    key: "get_node_view",
    style: {
        contentWidth: "auto",
        contentHeight: "auto",
        showVerticalScrollIndicator: true,
        showHorizontalScrollIndicator: true,
        top: 0
    }
}, {
    isId: true,
    priority: 100000.0011,
    key: "get_node_node_title",
    style: {
        color: "#000",
        textAlign: "left",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        top: 10,
        height: 18,
        left: 10,
        right: 10
    }
}, {
    isId: true,
    priority: 100000.0012,
    key: "get_node_node_body",
    style: {
        color: "#000",
        textAlign: "left",
        font: {
            fontSize: 14,
            fontWeight: "normal"
        },
        top: 30,
        height: "auto",
        left: 10,
        right: 10
    }
}, {
    isId: true,
    priority: 100000.0013,
    key: "get_node_flag_button",
    style: {
        height: 40,
        width: 200,
        top: 1e3
    }
}, {
    isId: true,
    priority: 100000.0014,
    key: "get_node_error_message",
    style: {
        color: "#000",
        textAlign: "left",
        font: {
            fontSize: 24,
            fontWeight: "bold"
        },
        top: 25,
        left: 15,
        height: 18
    }
} ];