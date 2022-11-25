import React from "react";

function Popup() {
    let config = {
        heading: "This site uses cookies",
        savePref: false, //Deactivated for JSFiddle
        savePrefDefault: false,
        informationText:
            "This should give the user a general idea of what cookies are and why you use them.",
        tableHeads: ["Name", "Description"],
        checkboxes: [
            {
                title: "Necessary",
                required: true,
                checked: true,
                name: "necessary",
                description: "A short description.",
                services: [["Service name.", "Service description."]]
            },
            {
                title: "Marketing",
                required: false,
                checked: false,
                name: "marketing",
                description: "We use marketing cookies.",
                services: [["Marketing service name.", "Service description."]]
            }
        ],
        buttons: [
            {
                title: "Only necessary",
                onclick: () => {
                    check("necessary");
                    uncheck("marketing");
                }
            },
            {
                title: "All",
                green: true,
                onclick: () => {
                    check("necessary", "marketing");
                }
            }
        ]
    };

    return (
        <div>
            <CookiePopup config={config} />
        </div>
    );
}

export default Popup;
