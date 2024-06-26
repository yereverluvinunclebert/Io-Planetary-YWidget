
//======================================================================================
// Function to move the main_window onto the main screen
//======================================================================================
function mainScreen() {
    // if the widget is off screen then move into the viewable window
    if (mainWindow.hOffset < 0) {
        mainWindow.hOffset = 10;
    }
    if (mainWindow.vOffset < 32) {
        mainWindow.vOffset = 32; // avoid Mac toolbar
    }
}
//=====================
//End function
//=====================
//===============================
// function to resize all layers
//===============================
function resize() {
    var Scale = Number(preferences.maxWidthPref.value) / 100;
    log("Resizing: preferences.maxWidthPref.value: " + preferences.maxWidthPref.value);
    log("Scale: " + Scale);
    mainWindow.width = mainWindowwidthDefault * Scale;
    mainWindow.height = mainWindowheightDefault * Scale;
    image.hoffset = imagehoffsetDefault * Scale;
    image.voffset = imagevoffsetDefault * Scale;
    image.width = imagewidthDefault * Scale;
    image.height = imageheightDefault * Scale;

}
//=====================
//End function
//=====================

//=========================================================================
// this function assigns translations to preference descriptions and titles
//=========================================================================
function setmenu() {
    mainWindow.onContextMenu = function() {
        var items = [], mItem, sItem;
        
        mItem = new MenuItem();
        mItem.title = "Online Help";
        mItem.onSelect = function() {
            widgethelp();
        };
        items.push(mItem);
        
        mItem = new MenuItem();
        mItem.title = "Donate a Coffee with Ko-Fi";
        mItem.onSelect = function() {
            donate();
        };
        items.push(mItem);        
        
        mItem = new MenuItem();
        mItem.title = "";
        mItem.onSelect = function() {
            nullfunction();
        };
        items.push(mItem);        
 
        mItem = new MenuItem();
        mItem.title = "Display Licence Agreement...";
        mItem.onSelect = function() {
            displayLicence();
        };
        items.push(mItem);    
    
        
        mItem = new MenuItem();
        mItem.title = "See More Steampunk Widgets";
        mItem.onSelect = function() {
            otherwidgets();
        };
        items.push(mItem);  
                    
        mItem = new MenuItem();
        mItem.title = "Download Latest Version";
        mItem.onSelect = function() {
            update();
        };
        items.push(mItem); 
        
                
        mItem = new MenuItem();
        mItem.title = "Contact Support";
        mItem.onSelect = function() {
            contact();
        };
        items.push(mItem); 
 
  
        mItem = new MenuItem();
        mItem.title = "";
        mItem.onSelect = function() {
            nullfunction();
        };
        items.push(mItem);
         
        mItem = new MenuItem();
        mItem.title = "Reveal Widget in Windows Explorer";
        mItem.onSelect = function() {
            findWidget();
        };
         items.push(mItem);
 
        mItem = new MenuItem();
        mItem.title = "";
        mItem.onSelect = function() {
            nullfunction();
        };
        items.push(mItem);
 
        mItem = new MenuItem();
        mItem.title = "Reload Widget (F5)";
        mItem.onSelect = function () {
            reloadWidget();
        };
        items.push(mItem);
          
        
        
        if (preferences.imageEditPref.value != "" && debugFlg === "1") {
                mItem = new MenuItem();
                mItem.title = "Edit Widget using " + preferences.imageEditPref.value ;
                mItem.onSelect = function () {
                    editWidget();
                };
                items.push(mItem);
        }        

        mainWindow.contextMenuItems = items;
    };
}
//=====================
//End function
//=====================


//===========================================
// this function opens the online help file
//===========================================
function widgethelp() {
    var answer = alert("This button opens a browser window and connects to the help page for this widget. Do you wish to proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://lightquick.co.uk/instructions-for-the-planetary-widgets.html?Itemid=264");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function opens other widgets URL
//===========================================
function otherwidgets() {
    var answer = alert("This button opens a browser window and connects to the Steampunk widgets page on my site. Do you wish to proceed", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://lightquick.co.uk/steampunk-widgets.html?Itemid=264");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function opens the URL for paypal
//===========================================
function donate() {
    var answer = alert("Help support the creation of more widgets like this, send us a coffee! This button opens a browser window and connects to the Kofi donate page for this widget). Will you be kind and proceed?", "Open Browser Window", "No Thanks");

    if (answer === 1) {
                openURL("https://www.ko-fi.com/yereverluvinunclebert");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function opens my Amazon URL wishlist
//===========================================
function amazon() {
    var answer = alert("Help support the creation of more widgets like this. Buy me a small item on my Amazon wishlist! This button opens a browser window and connects to my Amazon wish list page). Will you be kind and proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://www.amazon.co.uk/gp/registry/registry.html?ie=UTF8&id=A3OBFB6ZN4F7&type=wishlist");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function opens the rocketdock URL
//===========================================
function rocketdock() {

    var answer = alert("Log in and vote for the widget on Rocketdock. This button opens a browser window and connects to the Rocketdock page where you can give the widget a 5 star rating... Will you be kind and proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://rocketdock.com/addon/icons/45428");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function opens the download URL
//===========================================
function update() {
    var answer = alert("Download latest version of the widget - this button opens a browser window and connects to the widget download page where you can check and download the latest zipped .WIDGET file). Proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://lightquick.co.uk/jdownloads/british-penny-red-stamp-widget.html?Itemid=264");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function opens the browser at the contact URL
//===========================================
function contact() {
    var answer = alert("Visiting the support page - this button opens a browser window and connects to our contact us page where you can send us a support query or just have a chat). Proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://lightquick.co.uk/contact.html?Itemid=3");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function allows a spacer in the menu
//===========================================
function nullfunction() {}
//=====================
//End function
//=====================

//==============================================================
// this function reloads the widget when preferences are changed
//==============================================================
function changePrefs() {
    log("preferences Changed");
    savePreferences();				/// <<<<<<<<<<<<<
    sleep(1000);
    reloadWidget();
}
//=====================
//End function
//=====================
//==============================================================
// this function reloads the widget when preferences are changed
//==============================================================
function settooltip() {
    if ( preferences.widgetTooltip.value != "" )
    {
               image.tooltip = preferences.widgetTooltip.value;
    } else {
        if ( preferences.imageCmdPref.value == "" ) {
           image.tooltip = "Double click on me to assign a double-click function to this widget";
        } else {
           image.tooltip = "Current command is - " + preferences.imageCmdPref.value;
        }
    }
}
//=====================
//End function
//=====================

//===========================================
// this function edits the widget
//===========================================
function editWidget() {
    //var answer = alert("Editing the widget. Proceed?", "Open Editor", "No Thanks");
    //if (answer === 1) {
        //uses the contents of imageEditPref to initiate your default editor
        performCommand("menu");
    //}

}
//=====================
//End function
//=====================


//=====================
// function to carry out a command
//=====================
function performCommand(method) {
    var answer;
    
    if (method === "menu") {
        runCommandInBg(preferences.imageEditPref.value, "runningTask");
    } else {
        print("method "+method);
        if (system.event.altKey) { // filesystem.open() call
            if (preferences.openFilePref.value === "") {
                answer = alert("This widget has not been assigned an alt+double-click function. You need to open the preferences and select a file to be opened. Do you wish to proceed?", "Open Preferences", "No Thanks");
                if (answer === 1) {
                    showWidgetPreferences();
                }
                return;
            }
            filesystem.open(preferences.openFilePref.value);
        } else { 
            if (preferences.imageCmdPref.value === "") {
                answer = alert("This widget has not been assigned a double-click function. You need to open the preferences and enter a run command for this widget. Do you wish to proceed?", "Open Preferences", "No Thanks");
                if (answer === 1) {
                    showWidgetPreferences();
                }
                return;
            }
                runCommandInBg(preferences.imageCmdPref.value, "runningTask");
        }
    }
}
//=====================
//End function
//=====================





//===========================================
// this function causes explorer to be opened and the file selected
//===========================================
function findWidget() {

 // temporary development version of the widget
    var widgetFullPath = convertPathToPlatform(system.userWidgetsFolder + "/" + widgetName);
    var alertString = "The widget folder is: \n";
    if (filesystem.itemExists(widgetFullPath)) {
        alertString += system.userWidgetsFolder + " \n\n";
        alertString += "The widget name is: \n";
        alertString += widgetName + ".\n ";

        alert(alertString, "Open the widget's folder?", "No Thanks");

        filesystem.reveal(widgetFullPath);
    } else {
        widgetFullPath = resolvePath(".");   
        filesystem.reveal(widgetFullPath);
        print("widgetFullPath " + widgetFullPath);
    }
}
//=====================
//End function
//=====================