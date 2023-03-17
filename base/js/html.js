var head
    =
        `
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="Keywords" content="Chat, Fly Chat, Chating Websites">
            <meta name="description" content="This App Let's You To Chat All Around The World">
            <meta name="robots" content="INDEX, FOLLOW">
            <link rel="shortcut icon" href="/chat/base/img/favicon.ico" type="image/x-icon">
            <link rel="stylesheet" href="/chat/base/css/index.css">
            <link rel="stylesheet" href="/chat/base/css/utility.css">
            <link rel="stylesheet" id="stylesheet">
        `
    ;
    
var header
    =
        `
            <nav id="navbar" class="navbarHeightResponsive">
                <div id="left">
                    <ul>
                        <li>
                            <h1>
                                <a href="/chat/">Chat</a>
                            </h1>
                        </li>
                    </ul>
                </div>
                <div id="center" class="opacity-0Responsive display-noneResponsive">
                    <h2 id="welcome"></h2>
                </div>
                <div id="right" class="opacity-0Responsive display-noneResponsive">
                    <div id="redirectToDeleteYourAccountPage">
                        <button class="btn danger" onclick="redirect('!=', 'username', 'deleteyouraccount')">Delete Your Account</button>
                    </div>
                    <div id="logout">
                        <button class="btn danger" onclick="logout()">Logout</button>
                    </div>
                </div>
                <div id="burger">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </nav>
            <div class="hr"></div>
        `
    ;

var main
    =
        `
            <div class="br"></div>
        `
    ;

var footer
    =
        `
            <p>Developed By: <a href="https://github.com/teerthpathak/" target="_blank">Teerth Pathak</a></p>
        `
    ;

var room
    =
        `
            <div class="container sideChat" onclick="sideChat('{roomId}', '{roomLocation}')">
                <p class='p'>{name}</p>
            </div>
            <div class="container chatPage" onclick="chatPage('{roomId}', '{roomLocation}')">
                <p class='p'>{name}</p>
            </div>
        `
    ;

var user
    =
        `
            <tr>
                <td>{name}</td>
                <td>{role}</td>
                <td>{email}</td>
            </tr>
        `
    ;
  
var chat
    =
        `
            <div class="{align}">
                <p class="p">{message}</p>
                <small class="small" id="small_{chatId}">{name} | {date} | {time} <button class='sub-btn danger' id="{chatId}_delete_message_button" onclick="delete_message('{chatId}')">&times;</button></small>
            </div>
        `
    ;