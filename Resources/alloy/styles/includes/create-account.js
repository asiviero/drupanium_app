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
    key: "usernameLabel",
    style: {
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        left: "10dp",
        top: "10dp",
        width: "300dp",
        height: "auto"
    }
}, {
    isId: true,
    priority: 100000.0011,
    key: "usernameTextfield",
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
        borderRadius: "5",
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE
    }
}, {
    isId: true,
    priority: 100000.0012,
    key: "emailLabel",
    style: {
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        left: "10dp",
        top: "70dp",
        width: "300dp",
        height: "auto"
    }
}, {
    isId: true,
    priority: 100000.0013,
    key: "emailTextfield",
    style: {
        height: "35dp",
        top: "90dp",
        left: "10dp",
        width: "300dp",
        font: {
            fontSize: "16dp"
        },
        borderWidth: "2dp",
        borderColor: "#BBBBBB",
        borderRadius: "5",
        autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE
    }
}, {
    isId: true,
    priority: 100000.0014,
    key: "passwordLabel",
    style: {
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        left: "10dp",
        top: "130dp",
        width: "300dp",
        height: "auto"
    }
}, {
    isId: true,
    priority: 100000.0015,
    key: "passwordTextfield",
    style: {
        height: "35dp",
        top: "150dp",
        left: "10dp",
        width: "300dp",
        font: {
            fontSize: "16dp"
        },
        borderWidth: "2dp",
        borderColor: "#BBBBBB",
        borderRadius: 5,
        autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
        passwordMask: true
    }
}, {
    isId: true,
    priority: 100000.0016,
    key: "nameLabel",
    style: {
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        left: "10dp",
        top: "190dp",
        width: "300dp",
        height: "auto"
    }
}, {
    isId: true,
    priority: 100000.0017,
    key: "nameTextfield",
    style: {
        height: "35dp",
        top: "210dp",
        left: "10dp",
        width: "300dp",
        font: {
            fontSize: "16dp"
        },
        borderWidth: "2dp",
        borderColor: "#BBBBBB",
        borderRadius: 5,
        autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE
    }
}, {
    isId: true,
    priority: 100000.0018,
    key: "createAccountButton",
    style: {
        title: "Create account",
        height: "40dp",
        width: "200dp",
        top: "320dp"
    }
} ];