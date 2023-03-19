var Location = document.location.pathname;
var name = localStorage.getItem('name');
var username = localStorage.getItem('username');
var roomId = localStorage.getItem('roomId');
var roomLocation = localStorage.getItem('Location');

function doNoting() {}

function loadScript(fileLocation)
{
    var script = document.createElement("script");
    script.type = "application/javascript";
    script.src = fileLocation;
    document.body.appendChild(script);
}

function redirect(law, dataCheck, url)
{
    if((law == '!=') && (dataCheck != undefined || null))
    {
        window.location = `/chat/${url}`;
    }
    else if((law == '==') && (dataCheck == undefined || null))
    {
        window.location = `/chat/${url}`;
    }
    else
    {
        doNoting();
    }
}

function value_(id)
{
    return document.getElementById(id).value;
}

function manageLabel(id, text, color_, display_)
{
    document.getElementById(id).innerText = text;
    document.getElementById(id).style.color = color_;
    document.getElementById(id).style.display = display_;
}

function manageLocalStorageData(action, itemKey, itemValue)
{
    if (action == 'get')
    {
        localStorage.getItem(itemKey);
    }
    else if (action == 'set')
    {
        localStorage.setItem(itemKey, itemValue);
    }
    else if (action == 'remove')
    {
        localStorage.removeItem(itemKey);
    }
    else
    {
        doNoting();
    }
}

loadScript(`https://www.gstatic.com/firebasejs/7.6.2/firebase-app.js`);
loadScript(`https://www.gstatic.com/firebasejs/7.6.2/firebase-firestore.js`);
loadScript(`https://www.gstatic.com/firebasejs/7.24.0/firebase-auth.js`);
loadScript(`https://www.gstatic.com/firebasejs/7.24.0/firebase-database.js`);
loadScript(`https://www.gstatic.com/firebasejs/live/3.1/firebase.js`);
loadScript(`/chat/base/js/html.js`);

setTimeout(() =>
    {
        document.getElementById("title").innerText += ` - Chat`;
        document.getElementById("head").innerHTML += head;
        document.getElementById("header").innerHTML += header;
        document.getElementById("main").innerHTML += main;
        document.getElementById("footer").innerHTML += footer;
        loadScript(`/chat/base/js/index.js`);
    },
100);