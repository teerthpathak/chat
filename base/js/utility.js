var Location = document.location.pathname; // Getting Path Name And Storing It In Variable 'Location'
var name = localStorage.getItem('name'); // Getting Item From Local Storage And Storing In Variable - name
var username = localStorage.getItem('username'); // Getting Item From Local Storage And Storing In Variable - username
var roomId = localStorage.getItem('roomId'); // Getting Item From Local Storage 'roomId' And Setting Data In Variable 'roomId'
var roomLocation = localStorage.getItem('Location'); // Getting Item From Local Storage 'Location' And Setting Data In Variable 'Location'

function doNoting() {} // This Function Will Do Noting This Is Just To Be Used In The Case Where Noting Should Be Done

function loadScript(fileLocation) // Function loadScript - To Load Script After The Document Is Loaded
{
    var script = document.createElement("script"); // Will Create Element 'script' And Storing In A Variable 'script'
    script.type = "application/javascript"; // Will And An Attribute 'type="application/javascript"'
    script.src = fileLocation; // Will And An Attribute 'src="fileLocation"'
    document.body.appendChild(script); // Will Add Data Of Variable 'script' Into 'body'
}

function setData() // Function Set Data - To Set Data In Element(s)
{
    var head; // Variable For Head
    var header; // Variable For Header
    var main; // Variable For Main
    var footer; // Variable For Footer
    
    head
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
    
    header
        =
            `
                <nav id="navbar" class="navbarHeightResponsive"> <!-- NAVBAR With Id 'navbar' Starts -->
                    <div id="left"> <!-- DIV With Id 'left' Starts -->
                        <ul> <!-- UL Starts -->
                            <li> <!-- LI Starts -->
                                <a href="/chat/"> <!-- A Tag To Navigate To '/chat/' Starts -->
                                    <img src="/chat/base/img/light.png" alt="FC"> <!-- Image Tag With SRC '/chat/base/img/light.png' And ALT 'FC' -->
                                </a> <!-- A Tag To Navigate To '/' Ends -->
                            </li> <!-- LI Ends -->
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

    main
        =
            `
                <div class="br"></div> <!-- DIV With Class 'br' -->
            `
        ;
    
    footer
        =
            `
                <img src="/chat/base/img/light.png" alt="FC"> <!-- Image Tag With SRC '/chat/base/img/light.png' And ALT 'FC' -->
                <p> <!-- P Starts -->
                    Developed By: <a href="https://github.com/teerthpathak/" target="_blank">Teerth Pathak</a> <!-- A Tag To Navigate To 'https://github.com/teerthpathak/' In A New Tab -->
                </p> <!-- P Ends -->
            `
        ;
    
    document.getElementById("title").innerText += ` - Chat`; // Adding Inner Text Of Element With Id 'title' To ` - Chat`
    document.getElementById("head").innerHTML += head; // Setting Inner HTML Head
    document.getElementById("header").innerHTML += header; // Setting Inner HTML Header
    document.getElementById("main").innerHTML += main; // Setting Inner HTML Footer
    document.getElementById("footer").innerHTML += footer; // Setting Inner HTML Footer
}
setData(); // Set Data Call To Set Variables Data Into The Element(s)

loadScript(`https://www.gstatic.com/firebasejs/7.6.2/firebase-app.js`); // loadScript Call To Initialize 'firebase-app.js'
loadScript(`https://www.gstatic.com/firebasejs/7.6.2/firebase-firestore.js`); // loadScript Call To Initialize 'firebase-firestore.js'
loadScript(`https://www.gstatic.com/firebasejs/7.24.0/firebase-auth.js`); // loadScript Call To Initialize 'firebase-auth.js'
loadScript(`https://www.gstatic.com/firebasejs/7.24.0/firebase-database.js`); // loadScript Call To Initialize 'firebase-database.js'
loadScript(`https://www.gstatic.com/firebasejs/live/3.1/firebase.js`); // loadScript Call To Initialize 'firebase.js'
loadScript(`/chat/base/js/index.js`); // loadScript Call To Initialize - `/chat/base/js/index.js`