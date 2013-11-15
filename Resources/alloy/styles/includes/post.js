module.exports = [ {
    isApi: true,
    priority: 1000.0024,
    key: "Window",
    style: {}
}, {
    isClass: true,
    priority: 10000.0001,
    key: "container",
    style: {
        backgroundColor: "white"
    }
}, {
    isClass: true,
    priority: 10000.0025,
    key: "container",
    style: {
        top: 0,
        backgroundColor: "#666666"
    }
}, {
    isId: true,
    priority: 100000.0026,
    key: "nodeTitleLabel",
    style: {
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        left: "10dp",
        top: "10dp",
        width: "300dp",
        height: "auto",
        color: "#FFFFFF"
    }
}, {
    isId: true,
    priority: 100000.0027,
    key: "nodeTitleTextField",
    style: {
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
        backgroundColor: "#FFFFFF"
    }
}, {
    isId: true,
    priority: 100000.0028,
    key: "nodeBodyLabel",
    style: {
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        left: "10dp",
        top: "75dp",
        width: "300dp",
        height: "auto",
        color: "#FFFFFF"
    }
}, {
    isId: true,
    priority: 100000.0029,
    key: "nodeBodyTextarea",
    style: {
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
        suppressReturn: true
    }
}, {
    isId: true,
    priority: 100000.003,
    key: "saveButton",
    style: {
        height: "40dp",
        width: "200dp",
        top: "320dp"
    }
} ];