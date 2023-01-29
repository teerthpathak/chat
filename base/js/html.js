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
            <link rel="stylesheet" id="stylesheet"> <!-- LINK stylesheet -->
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

var room // Variable 'room'
    =
        `
            <div class="container sideChat" onclick="sideChat('{roomId}', '{roomLocation}')"> <!-- DIV With Class 'container, sideChat' And Onclick "sideChat('{roomId}', '{roomLocation}')" Starts -->
                <p class='p'>{name}</p> <!-- P With Class 'p' -->
            </div> <!-- DIV With Class 'container, sideChat' And Onclick "sideChat('{roomId}', '{roomLocation}')" Ends -->
            <div class="container chatPage" onclick="chatPage('{roomId}', '{roomLocation}')"> <!-- DIV With Class 'container, chatPage' And Onclick "chatPage('{roomId}', '{roomLocation}')" Starts -->
                <p class='p'>{name}</p> <!-- P With Class 'p' -->
            </div> <!-- DIV With Class 'container, chatPage' And Onclick "chatPage('{roomId}', '{roomLocation}')" Ends -->
        `
    ;

var user // Variable 'user'
    =
        `
            <tr>
                <td>{name}</td>
                <td>{role}</td>
                <td>{email}</td>
            </tr>
        `
    ;
  
var chat // Variable 'chat'
    =
        `
            <div class="{align}"> <!-- DIV With Class 'right' Starts -->
                <p class="p">{message}</p> <!-- P With Class 'p' -->
                <small class="small" id="small_{chatId}">{name} | {date} | {time} <button class='sub-btn danger' id="{chatId}_delete_message_button" onclick="delete_message('{chatId}')">&times;</button></small> <!-- SMALL With Class 'small', Id 'small_{username}' And BUTTON Class 'sub-btn danger' And Onclick 'delete_message('{chatId}')' -->
            </div> <!-- DIV With Class 'right' Ends -->
        `
    ;