function redirect() // Function Redirect - To Check 'roomId' And 'Location'
{
    roomId = localStorage.getItem('roomId'); // Getting Item From Local Storage 'roomId' And Setting Data In Variable 'roomId'
    Location = localStorage.getItem('Location'); // Getting Item From Local Storage 'Location' And Setting Data In Variable 'Location'
    if(roomId == undefined || null && Location == undefined || null) // If 'roomId' And 'Location' Is Equal To 'undefined' Or 'null'
    {
        window.location = '/chat/'; // Navigate To '/chat/'
    }
}
redirect(); // Function Redirect Call

Location = localStorage.getItem("Location"); // Getting Item From Local Storage 'Location' And Setting Data In Variable 'Location'
roomId = localStorage.getItem("roomId"); // Getting Item From Local Storage 'roomId' And Setting Data In Variable 'roomId'
username = localStorage.getItem("username"); // Getting Item From Local Storage 'username' And Setting Data In Variable 'username'

function getData() // Function Get Data
{
    document.getElementById("container").innerHTML = ""; // Will Set Inner HTML Of Element With Id 'container' To ''
    chats.database().ref(`/${Location}/${roomId}`).on("value", function (snapshot) // Will Set Location To `/${Location}/${roomId}` (Database)
    {
        var getData = snapshot.val(); // Will Get Data From `/${Location}/${roomId}` And Will Set Data It In The Variable 'getData'
        var getKeysArray = Object.keys(getData).map((key) => [Number(key), getData[key]]); // Will Convert The Data Of Variable 'getData' Into An Array (Will Only Show Keys) And Will Store It In A Variable 'getKeysArray'
        var getArray = Object.entries(getData); // Will Convert The Data Of Variable 'getData' Into An Array (Will Show Keys And Values Both) And Will Store It In A Variable 'getArray'

        for (let i = 0; i < getKeysArray.length; i++) // For-Loop For Running It For 'i' Number(s) Of Times
        {
            getChatId = getArray[i]; // Will Get `chatId` From Variable `getArray` 'i' Index And Will Store It In A Variable 'getChatId'
            chatId = getChatId[0]; // Will Get `chatId` From Variable 'getChatId' '0' Index And Will Store It In A Variable 'chatId'

            data = getKeysArray[i]; // Will Get `data` From Variable 'getKeysArray' 'i' Index And Will Store It In A Variable 'data'
            main = data[1]; // Will Get Data From Variable 'data' '1' Index And Will Store It In A Variable 'main'

            date = main['date']; // Will Get Data From Variable 'main' 'date' Index And Will Store It In A Variable 'date'
            message = main['message']; // Will Get Data From Variable 'main' 'message' Index And Will Store It In A Variable 'message'
            name = main['name']; // Will Get Data From Variable 'main' 'name' Index And Will Store It In A Variable 'name'
            time = main['time']; // Will Get Data From Variable 'main' 'time' Index And Will Store It In A Variable 'time'
            sendersUsername = main['username']; // Will Get Data From Variable 'main' 'username' Index And Will Store It In A Variable 'sendersUsername'

            var content; // Variable 'content'
            if (sendersUsername == username) // If Variable 'sendersUsername' Data Is Equal To Variable 'username' Data
            {
                content 
                    =
                        `
                            <div class="right"> <!-- DIV With Class 'right' Starts -->
                                <p class="p">${message}</p> <!-- P With Class 'p' -->
                                <small class="small" id="small_${username}">${name} | ${date} | ${time} <button class='sub-btn danger' onclick="delete_message('${chatId}')">&times;</button></small> <!-- SMALL With Class 'small', Id 'small_${username}' And BUTTON Class 'sub-btn danger' And Onclick 'delete_message('${chatId}')' -->
                            </div> <!-- DIV With Class 'right' Ends -->
                        `
                    ;
            }
            else if(sendersUsername != username) // If Variable 'sendersUsername' Data Is Not Equal To Variable 'username' Data
            {
                content
                    =
                        `
                            <div class="left"> <!-- DIV With Class 'left' Starts -->
                                <p class="p">${message}</p> <!-- P With Class 'p' -->
                                <small class="small" id="small_${username}">${name} | ${date} | ${time}</small> <!-- SMALL With Class 'small' And Id 'small_${username}' -->
                            </div> <!-- DIV With Class 'left' Ends -->
                        `
                    ;
            }
            else {
                doNoting(); // Function Do Noting Call
            }
            document.getElementById("container").innerHTML += content; // Will Add The Data Of Variable 'content' Into Element With Id 'container'
        }
    });
}
getData(); // Function Get Data Call To Get The Data From The Database And Set It

function send() // Function Send - To Send The Data To The Database
{
    let name = localStorage.getItem("name"); // Getting Item From Local Storage 'name' And Setting Data In Variable 'name'
    message = document.getElementById("message_input").value; // Getting Data From Element With Id 'message_input' And Setting Data In Variable 'message'
    getDate = new Date(); // Will Get Date And Store It In A Variable 'getDate'

    date = getDate.getDate(); // Will Get Date And Store It In A Variable 'date'
    month = getDate.getMonth() + 1; // Will Get Month And Store It In A Variable 'month' (Month Will Be Added By 1 Because It Is Between '0-11' Not Between '1-12')
    year = getDate.getFullYear(); // Will Get Full Year And Store It In A Variable 'year'

    fullDate = date + '-' + month + '-' + year; // Variable 'fullDate' Will Add Variable 'date', Variable 'month' And Variable 'year' Separated By '-'
    time = getDate.toLocaleTimeString(); // Variable 'time' Will Get Time In 12 Hour Format

    chatId = username + fullDate + time; // Variable 'chatId' Will Add Variable 'username', Variable 'fullDate' And Variable 'time'
    chatId.toString; // Converting Variable 'chatId' To String
    chatId = chatId.replaceAll(" ", "ṇ") // Will Replace All The ' ' In Variable 'chatId' To 'ṇ' (If Any) And Store It In A Variable 'chatId'

    chats.database().ref(`/${Location}/${roomId}`).child(chatId).update( // Will Push Data Into Database - Location `/${Location}/${roomId}` And will Create A Key `${chatId}`
        {
            date: fullDate, // date - Child Of Variable 'chatId' And Will Set The Value Of Variable 'fullDate'
            message: message, // message - Child Of Variable 'chatId' And Will Set The Value Of Variable 'message'
            name: name, // name - Child Of Variable 'chatId' And Will Set The Value Of Variable 'name'
            time: time, // time - Child Of Variable 'chatId' And Will Set The Value Of Variable 'time'
            username: username //  username - Child Of Variable 'chatId' And Will Set The Value Of Variable 'username'
        }
    );
    getData(); // Function Get Data Call To Get The Data From The Database And Reset It Because The Data Is Updated
    message = document.getElementById("message_input").value = ''; // Setting Element With Id 'message_input' Value To ''
}

function delete_message(chatId) // Function Delete Message - Will Delete A Message Send By The User
{
    chats.database().ref(`/${Location}/${roomId}`).child(`${chatId}`).remove() // Will Delete The Key `${chatId}` From The Location `/${Location}/${roomId}`
    getData(); // Function Get Data Call To Get The Data From The Database And Reset It Because The Data Is Updated
}