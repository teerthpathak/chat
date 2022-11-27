function setData() // Function Set Data - To Set Data
{
    var stylesheet = `<link rel="stylesheet" href="${Location}index/css/index.css"> <!-- LINK stylesheet -->`; // Variable For stylesheet
    document.getElementById('head').innerHTML += stylesheet; // Getting Data From Variable 'stylesheet' And Adding It In Element With Id 'head'
    setTimeout(() => // Will Wait For 500 Microseconds Before Execution
        {
            loadScript(`/chat/index/js/index.js`); // loadScript Call To Initialize - `/chat/index/js/index.js`
        },
    500);
}
setData(); // Function Set Data Call