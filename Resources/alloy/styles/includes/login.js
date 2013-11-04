module.exports = [ {
    isClass: true,
    priority: 10000.0001,
    key: "container",
    style: {
        backgroundColor: "white"
    }
}, {
    isClass: true,
    priority: 10000.0016,
    key: "container",
    style: {
        contentWidth: "auto",
        contentHeight: "auto",
        showVerticalScrollIndicator: true,
        showHorizontalScrollIndicator: true,
        top: "0"
    }
}, {
    isId: true,
    priority: 100000.0017,
    key: "login_label_username",
    style: {
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        left: 10,
        top: 10,
        width: 300,
        height: "auto"
    }
}, {
    isId: true,
    priority: 100000.0018,
    key: "login_textfield_username",
    style: {
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
        autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE
    }
}, {
    isId: true,
    priority: 100000.0019,
    key: "login_label_password",
    style: {
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        left: 10,
        top: 75,
        width: 300,
        height: "auto"
    }
}, {
    isId: true,
    priority: 100000.002,
    key: "login_textfield_password",
    style: {
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
        passwordMask: true
    }
}, {
    isId: true,
    priority: 100000.0021,
    key: "login_button_login",
    style: {
        height: 40,
        width: 200,
        top: 170
    }
}, {
    isId: true,
    priority: 100000.0022,
    key: "login_button_logout",
    style: {
        height: 40,
        width: 200,
        top: 220
    }
} ];