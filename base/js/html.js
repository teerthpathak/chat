var head // Variable 'head'
    =
        `
            <meta charset="UTF-8"> <!-- META charset -->
            <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- META http-equiv -->
            <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- META viewport -->
            <meta name="Keywords" content="Chat, Fly Chat, Chating Websites"> <!-- META Keywords -->
            <meta name="description" content="This App Let's You To Chat All Around The World"> <!-- META description -->
            <meta name="robots" content="INDEX, FOLLOW"> <!-- META robots -->
            <link rel="shortcut icon" href="/chat/base/img/favicon.ico" type="image/x-icon"> <!-- LINK shortcut icon -->
            <link rel="stylesheet" href="/chat/base/css/index.css"> <!-- LINK stylesheet -->
            <link rel="stylesheet" href="/chat/base/css/utility.css"> <!-- LINK stylesheet -->
            <link rel="stylesheet" href="${Location}css/index.css"> <!-- LINK stylesheet -->
        `
    ;
    
var header // Variable 'header'
    =
        `
            <nav id="navbar" class="navbarHeightResponsive"> <!-- NAVBAR With Id 'navbar' Starts -->
                <div id="left"> <!-- DIV With Id 'left' Starts -->
                    <ul> <!-- UL Starts -->
                        <li> <!-- LI Starts -->
                            <h1> <!-- H1 Starts -->
                                <a href="/chat/">Chat</a> <!-- A Tag To Navigate To '/chat/' -->
                            </h1> <!-- H1 Ends -->
                        </li> <!-- LI Ends -->
                    </ul> <!-- UL Ends -->
                </div> <!-- DIV With Id 'right' Starts -->
                <div id="center" class="opacity-0Responsive display-noneResponsive"> <!-- DIV With Id 'center' And Class 'opacity-0Responsive display-noneResponsive' Starts -->
                    <h2 id="welcome"></h2> <!-- H2 With Id 'welcome' -->
                </div> <!-- DIV With Id 'center' And Class 'opacity-0Responsive display-noneResponsive' Ends -->
                <div id="right" class="opacity-0Responsive display-noneResponsive"> <!-- DIV With Id 'right' And Class 'opacity-0Responsive display-noneResponsive' Starts -->
                    <div id="redirectToDeleteYourAccountPage"> <!-- DIV With Id 'redirectToDeleteYourAccountPage' Starts -->
                        <button class="btn danger" onclick="redirect('!=', username, 'deleteyouraccount')">Delete Your Account</button> <!-- BUTTON With Class 'btn, danger' And When Clicked 'redirect('!=', username, 'deleteyouraccount')' -->
                    </div> <!-- DIV With Id 'redirectToDeleteYourAccountPage' Ends -->
                    <div id="logout"> <!-- DIV With Id 'logout' Starts -->
                        <button class="btn danger" onclick="logout()">Logout</button> <!-- BUTTON With Class 'btn, danger' And When Clicked 'logout()' -->
                    </div> <!-- DIV With Id 'logout' Ends -->
                </div> <!-- DIV With Id 'right' And Class 'opacity-0Responsive display-noneResponsive' Ends -->
                <div id="burger"> <!-- DIV With Id 'burger' Starts -->
                    <div class="line"></div> <!-- DIV With Class 'line' -->
                    <div class="line"></div> <!-- DIV With Class 'line' -->
                    <div class="line"></div> <!-- DIV With Class 'l ine' -->
                </div> <!-- DIV With Id 'burger' Ends -->
            </nav> <!-- NAVBAR With Id 'navbar' Ends -->
            <div class="hr"></div> <!-- DIV With Class 'hr' -->
        `
    ;

var main // Variable 'main'
    =
        `
            <div class="br"></div> <!-- DIV With Class 'br' -->
        `
    ;

var footer // Variable 'footer'
    =
        `
            <p> <!-- P Starts -->
                Developed By: <a href="https://github.com/teerthpathak/" target="_blank">Teerth Pathak</a> <!-- A Tag To Navigate To 'https://github.com/teerthpathak/' In A New Tab -->
            </p> <!-- P Ends -->
        `
    ;

var indexStylesheet // Variable 'indexStylesheet'
    =
        `
            <link rel="stylesheet" href="/chat/index/css/index.css"> <!-- LINK stylesheet -->
        `
    ;

var admin // Variable 'admin'
    =
        `
            <div class="container" id="container_{roomId}"> <!-- DIV With Class 'container' And Id 'container_{roomId}' Starts -->
                <div class="top" id="top_{roomId}"> <!-- DIV With Class 'top' And Id 'top_{roomId}' Starts -->
                    <input type="text" class="input" id="change_name_{roomId}" value="{name}" style="display: none;"> <!-- INPUT With Type 'text', Class 'input', Id 'change_name_{roomId}', Value '{name}' And Style 'display: none;' -->
                    <button class="btn dark" id="save_{roomId}" style="display: none;" onclick="save_edited_room_name('{roomId}')">Save Changes</button> <!-- BUTTON With Class 'btn dark', Id 'save_{roomId}', Style 'display: none;' And Onclick 'save_edited_room_name('{roomId}')' -->
                    <p id="{roomId}_p" class='p' style="display: unset;">{name}</p> <!-- P With Id '{roomId}_p', Class 'p' And Style 'display: unset;' -->
                </div> <!-- DIV With Class 'top' And Id 'top_{roomId}' Ends -->
                <div class="middle" id="middle_{roomId}"> <!-- DIV With Class 'middle' And Id 'middle_{roomId}' Starts -->
                    <button class="btn success" id="open_{roomId}" onclick="open_chat('{roomId}', '{Location}')">Open Chat</button> <!-- BUTTON With Class 'btn success', Id 'open_{roomId}', Style 'display: none;' And Onclick 'open_chat('{roomId}', '{Location}')' -->
                    <label for="admin" style="display: none;" id="admin_label_{roomId}">Admin <input type="radio" name="role" id="admin_radio_{roomId}" value="admin"></label> <!-- Label With For 'admin', Style 'display: none;', Id 'admin_label_{roomId}' And INPUT With Type 'radio', Name 'role', Id 'admin_radio_{roomId}', Value 'admin' -->
                    <label for="regular" style="display: none;" id="regular_label_{roomId}">Regular <input type="radio" name="role" id="regular_radio_{roomId}" value="regular"></label> <!-- Label With For 'regular', Style 'display: none;', Id 'regular_label_{roomId}' And INPUT With Type 'radio', Name 'role', Id 'regular_radio_{roomId}', Value 'regular' -->
                    <input type="email" class="input" id='add_user_input_{roomId}' placeholder="Enter The Email" style="display: none;"> <!-- INPUT With Type 'email', Class 'input', Id 'add_user_input_{roomId}', Placeholder 'Enter The Email' And Style 'display: none;' -->
                    <button class="btn primary" id="add_user_{roomId}" onclick="add_user('{Location}', '{roomId}')" style="display: none;">Add User</button> <!-- BUTTON With Class 'btn primary', Id 'add_user_{roomId}', Style 'display: none;' And Onclick 'add_user('{Location}', '{roomId}')' -->
                </div> <!-- DIV With Class 'middle' And Id 'middle_{roomId}' Ends -->
                <div class="bottom" id="bottom_{roomId}"> <!-- DIV With Class 'bottom' And Id 'bottom_{roomId}' Starts -->
                    <button class="btn primary" id="show_add_user_{roomId}" onclick="show_add_user_settings('{roomId}')">Add User</button> <!-- BUTTON With Class 'btn primary', Id 'show_add_user_{roomId}', And Onclick 'show_add_user_settings('{roomId}')' -->
                    <button class="btn warning" id="show_edit_group_name_settings_{roomId}" onclick="show_edit_group_name_settings('{roomId}');">Edit Group Name</button> <!-- BUTTON With Class 'btn warning', Id 'show_edit_group_name_settings_{roomId}' And Onclick 'show_edit_group_name_settings('{roomId}');' -->
                    <button class="btn danger" id="exit_{roomId}" onclick="exit_room('{Location}', '{roomId}', '{username}')">Exit Room</button> <!-- BUTTON With Class 'btn danger', Id 'exit_{roomId}' And Onclick 'exit_room('{Location}', '{roomId}', '{username}')' -->
                </div> <!-- DIV With Class 'bottom' And Id 'bottom_{roomId}' Ends -->
            </div> <!-- DIV With Class 'container' And Id 'container_{roomId}' Ends -->
        `
    ;

var regular // Variable 'regular'
    =
       `
            <div class="container" id="container_{roomId}"> <!-- DIV With Class 'container' And Id 'container_{roomId}' Starts -->
                <div class="top" id="top_{roomId}"> <!-- DIV With Class 'top' And Id 'top_{roomId}' Starts -->
                    <p id="{roomId}_p" class='p' style="display: unset;">{name}</p> <!-- P With Id '{roomId}_p', Class 'p' And Style 'display: unset;' -->
                </div> <!-- DIV With Class 'top' And Id 'top_{roomId}' Ends -->
                <div class="middle" id="middle_{roomId}"> <!-- DIV With Class 'middle' And Id 'middle_{roomId}' Starts -->
                    <button class="btn success" id="open_{roomId}" onclick="open_chat('{roomId}', '{Location}')">Open Chat</button> <!-- BUTTON With Class 'btn success', Id 'open_{roomId}', Style 'display: none;' And Onclick 'open_chat('{roomId}', '{Location}')' -->
                </div> <!-- DIV With Class 'middle' And Id 'middle_{roomId}' Ends -->
                <div class="bottom" id="bottom_{roomId}"> <!-- DIV With Class 'bottom' And Id 'bottom_{roomId}' Starts -->
                    <button class="btn danger" id="exit_{roomId}" onclick="exit_room('{Location}', '{roomId}', '{username}')">Exit Room</button> <!-- BUTTON With Class 'btn danger', Id 'exit_{roomId}' And Onclick 'exit_room('{Location}', '{roomId}', '{username}')' -->
                </div> <!-- DIV With Class 'bottom' And Id 'bottom_{roomId}' Ends -->
            </div> <!-- DIV With Class 'container' And Id 'container_{roomId}' Ends -->
       `
    ;

var superAdmin // Variable 'superAdmin'
    =
        `
            <div class="container" id="container_{roomId}"> <!-- DIV With Class 'container' And Id 'container_{roomId}' Starts -->
                <div class="top" id="top_{roomId}"> <!-- DIV With Class 'top' And Id 'top_{roomId}' Starts -->
                    <input type="text" class="input" id="change_name_{roomId}" value="{name}" style="display: none;"> <!-- INPUT With Type 'text', Class 'input', Id 'change_name_{roomId}', Value '{name}' And Style 'display: none;' -->
                    <button class="btn dark" id="save_{roomId}" style="display: none;" onclick="save_edited_room_name('{roomId}')">Save Changes</button> <!-- BUTTON With Class 'btn dark', Id 'save_{roomId}', Style 'display: none;' And Onclick 'save_edited_room_name('{roomId}')' -->
                    <p id="{roomId}_p" class='p' style="display: unset;">{name}</p> <!-- P With Id '{roomId}_p', Class 'p' And Style 'display: unset;' -->
                </div> <!-- DIV With Class 'top' And Id 'top_{roomId}' Ends -->
                <div class="middle" id="middle_{roomId}"> <!-- DIV With Class 'middle' And Id 'middle_{roomId}' Starts -->
                    <button class="btn success" id="open_{roomId}" onclick="open_chat('{roomId}', '{Location}')">Open Chat</button> <!-- BUTTON With Class 'btn success', Id 'open_{roomId}', Style 'display: none;' And Onclick 'open_chat('{roomId}', '{Location}')' -->
                    <label for="admin" style="display: none;" id="admin_label_{roomId}">Admin <input type="radio" name="role" id="admin_radio_{roomId}" value="admin"></label> <!-- Label With For 'admin', Style 'display: none;', Id 'admin_label_{roomId}' And INPUT With Type 'radio', Name 'role', Id 'admin_radio_{roomId}', Value 'admin' -->
                    <label for="regular" style="display: none;" id="regular_label_{roomId}">Regular <input type="radio" name="role" id="regular_radio_{roomId}" value="regular"></label> <!-- Label With For 'regular', Style 'display: none;', Id 'regular_label_{roomId}' And INPUT With Type 'radio', Name 'role', Id 'regular_radio_{roomId}', Value 'regular' -->
                    <input type="email" class="input" id='add_user_input_{roomId}' placeholder="Enter The Email" style="display: none;"> <!-- INPUT With Type 'email', Class 'input', Id 'add_user_input_{roomId}', Placeholder 'Enter The Email' And Style 'display: none;' -->
                    <button class="btn primary" id="add_user_{roomId}" onclick="add_user('{Location}', '{roomId}')" style="display: none;">Add User</button> <!-- BUTTON With Class 'btn primary', Id 'add_user_{roomId}', Style 'display: none;' And Onclick 'add_user('{Location}', '{roomId}')' -->
                </div> <!-- DIV With Class 'middle' And Id 'middle_{roomId}' Ends -->
                <div class="bottom" id="bottom_{roomId}"> <!-- DIV With Class 'bottom' And Id 'bottom_{roomId}' Starts -->
                    <button class="btn primary" id="show_add_user_{roomId}" onclick="show_add_user_settings('{roomId}')">Add User</button> <!-- BUTTON With Class 'btn primary', Id 'show_add_user_{roomId}', And Onclick 'show_add_user_settings('{roomId}')' -->
                    <button class="btn warning" id="show_edit_group_name_settings_{roomId}" onclick="show_edit_group_name_settings('{roomId}');">Edit Group Name</button> <!-- BUTTON With Class 'btn warning', Id 'show_edit_group_name_settings_{roomId}' And Onclick 'show_edit_group_name_settings('{roomId}');' -->
                    <button class="btn danger" id="delete_{roomId}" onclick="delete_room('{Location}', '{roomId}')">Delete Room</button> <!-- BUTTON With Class 'btn danger', Id 'delete_{roomId}' And Onclick 'delete_room('{Location}', '{roomId}')' -->
                </div> <!-- DIV With Class 'bottom' And Id 'bottom_{roomId}' Ends -->
            </div> <!-- DIV With Class 'container' And Id 'container_{roomId}' Ends -->
        `
    ;

var superRegular // Variable 'superRegular'
    =
        `
            <div class="container" id="container_{roomId}"> <!-- DIV With Class 'container' And Id 'container_{roomId}' Starts -->
                <div class="top" id="top_{roomId}"> <!-- DIV With Class 'top' And Id 'top_{roomId}' Starts -->
                    <p id="{roomId}_p" class='p' style="display: unset;">{name}</p> <!-- P With Id '{roomId}_p', Class 'p' And Style 'display: unset;' -->
                </div> <!-- DIV With Class 'top' And Id 'top_{roomId}' Ends -->
                <div class="middle" id="middle_{roomId}"> <!-- DIV With Class 'middle' And Id 'middle_{roomId}' Starts -->
                    <button class="btn success" id="open_{roomId}" onclick="open_chat('{roomId}', '{Location}')">Open Chat</button> <!-- BUTTON With Class 'btn success', Id 'open_{roomId}', Style 'display: none;' And Onclick 'open_chat('{roomId}', '{Location}')' -->
                </div> <!-- DIV With Class 'middle' And Id 'middle_{roomId}' Ends -->
                <div class="bottom" id="bottom_{roomId}"> <!-- DIV With Class 'bottom' And Id 'bottom_{roomId}' Starts -->
                    <button class="btn danger" id="delete_{roomId}" onclick="delete_room('{Location}', '{roomId}')">Delete Room</button> <!-- BUTTON With Class 'btn danger', Id 'delete_{roomId}' And Onclick 'delete_room('{Location}', '{roomId}')' -->
                </div> <!-- DIV With Class 'bottom' And Id 'bottom_{roomId}' Ends -->
            </div> <!-- DIV With Class 'container' And Id 'container_{roomId}' Ends -->
        `
    ;
  
var chatRight // Variable 'chatRight'
    =
        `
            <div class="right"> <!-- DIV With Class 'right' Starts -->
                <p class="p">{message}</p> <!-- P With Class 'p' -->
                <small class="small" id="small_{chatId}">{name} | {date} | {time} <button class='sub-btn danger' onclick="delete_message('{chatId}')">&times;</button></small> <!-- SMALL With Class 'small', Id 'small_{username}' And BUTTON Class 'sub-btn danger' And Onclick 'delete_message('{chatId}')' -->
            </div> <!-- DIV With Class 'right' Ends -->
        `
    ;

var chatLeft // Variable 'chatLeft'
    =
        `
            <div class="left"> <!-- DIV With Class 'left' Starts -->
                <p class="p">{message}</p> <!-- P With Class 'p' -->
                <small class="small" id="small_{chatId}">{name} | {date} | {time}</small> <!-- SMALL With Class 'small' And Id 'small_{username}' -->
            </div> <!-- DIV With Class 'left' Ends -->
        `
    ;