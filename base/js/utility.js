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

function redirect(law, dataCheck, url) // Function Redirect - To Redirect To Required Page
{
    if((law == '!=') && (dataCheck != undefined || null)) // If Variable 'law' Data Is Equal To '!=' And Variable 'dataCheck' Data Is Not Equal To 'Undefined Or Null'
    {
        window.location = `/chat/${url}`; // Will Navigating To `/chat/${url}`
    }
    else if((law == '==') && (dataCheck == undefined || null)) // If Variable 'law' Data Is Equal To '==' And Variable 'dataCheck' Data Is Equal To 'Undefined Or Null'
    {
        window.location = `/chat/${url}`; // Will Navigating To `/chat/${url}`
    }
    else // Else
    {
        doNoting(); // Function Do Noting Call
    }
}

function setData() // Function Set Data - To Set Data In Element(s)
{
    setTimeout(() => // Will Wait For 700 Microseconds Before Execution 
        {
            document.getElementById("title").innerText += ` - Chat`; // Adding Inner Text Of Element With Id 'title' To ` - Chat`
            document.getElementById("head").innerHTML += head; // Setting Inner HTML Head
            document.getElementById("header").innerHTML += header; // Setting Inner HTML Header
            document.getElementById("main").innerHTML += main; // Setting Inner HTML Main
            document.getElementById("footer").innerHTML += footer; // Setting Inner HTML Footer
            loadScript(`/chat/base/js/index.js`); // loadScript Call To Initialize - `/chat/base/js/index.js`
        },
    700);
}

loadScript(`https://www.gstatic.com/firebasejs/7.6.2/firebase-app.js`); // loadScript Call To Initialize 'firebase-app.js'
loadScript(`https://www.gstatic.com/firebasejs/7.6.2/firebase-firestore.js`); // loadScript Call To Initialize 'firebase-firestore.js'
loadScript(`https://www.gstatic.com/firebasejs/7.24.0/firebase-auth.js`); // loadScript Call To Initialize 'firebase-auth.js'
loadScript(`https://www.gstatic.com/firebasejs/7.24.0/firebase-database.js`); // loadScript Call To Initialize 'firebase-database.js'
loadScript(`https://www.gstatic.com/firebasejs/live/3.1/firebase.js`); // loadScript Call To Initialize 'firebase.js'
loadScript(`/chat/base/js/html.js`); // loadScript Call To Initialize - `/chat/base/js/html.js`
setData(); // Set Data Call To Set Variables Data Into The Element(s)