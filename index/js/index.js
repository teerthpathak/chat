redirect('==', username, 'login'); // Function Redirect Call

function getData() // Function Get Data - WIll Get Data From The Database
{
    document.getElementById('output').innerHTML = ''; // Will Set Inner HTML Of The Element With Id 'output' To ''
    rooms.database().ref(`/${username}`).on("value", function (snapshot) // Will Set Location To `/${username}` (Database)
    {
        var getData = snapshot.val(); // Will Get Data From `/${username}` And Will Set Data It In The Variable 'getData'
        var getArray = Object.entries(getData); // Will Convert The Data Of Variable 'getData' Into An Array (Will Show Keys And Values Both) And Will Store It In A Variable 'getArray'
        var getKeysArray = Object.keys(getData).map((key) => [Number(key), getData[key]]); // Will Convert The Data Of Variable 'getData' Into An Array (Will Only Show Keys) And Will Store It In A Variable 'getKeysArray'
        var getValues = Object.values(getData); // Will Convert The Data Of Variable 'getData' Into An Array (Will Only Show Values) And Will Store It In A Variable 'getValues'

        for (let i = 0; i < getKeysArray.length; i++) // For-Loop For Running It For 'i' Number(s) Of Times
        {
            values = getValues[i]; // Will Get `data` From Variable `getValues` 'i' Index And Will Store It In A Variable 'values'

            getRoomId = getArray[i]; // Will Get `data` From Variable `getArray` 'i' Index And Will Store It In A Variable 'getRoomId'
            roomId = getRoomId[0]; // Will Get `data` From Variable `getRoomId` '0' Index And Will Store It In A Variable 'roomId'

            getLocation = values; // Will Get `data` From Variable `values` And Will Store It In A Variable 'getLocation'
            Location = getLocation['location']; // Will Get `Location` From Variable `getLocation` 'location' Index And Will Store It In A Variable 'Location'

            rooms.database().ref(`/${Location}/${roomId}`).on("value", function (snapshot) // Will Set Location To `/${Location}/${roomId}` (Database)
            {
                getData = snapshot.val(); // Will Get Data From `/${Location}/${roomId}` And Will Set Data It In The Variable 'getData'

                getUsers = getData['users']; // Will Get `data` From Variable `getData` 'users' Index And Will Store It In A Variable 'getUsers'
                user = getUsers[`${username}`]; // Will Get `data` From Variable `getUsers` `${username}` Index And Will Store It In A Variable 'user'

                Location = getData['location']; // Will Get `data` From Variable `getData` 'location' Index And Will Store It In A Variable 'Location'
                name = getData['name']; // Will Get `data` From Variable `getData` 'name' Index And Will Store It In A Variable 'name'
                role = user['role']; // Will Get `data` From Variable `user` 'role' Index And Will Store It In A Variable 'role'
                
                document.getElementById("output").innerHTML += room.replaceAll('{roomId}', roomId) // Will Replace All The '{roomId}' In Variable 'superAdmin' To Variable 'roomId' (If Any) And Store It In A Variable 'content'
                                                                   .replaceAll('{roomLocation}', Location) // Will Replace All The '{Location}' In Variable 'superAdmin' To Variable 'Location' (If Any) And Store It In A Variable 'content'
                                                                   .replaceAll('{name}', name); // Will Replace All The '{name}' In Variable 'superAdmin' To Variable 'name' (If Any) And Store It In A Variable 'content'
            });
        }
    });
}
getData(); // Function Get Data Call To Get The Data From The Database And Set It

function setChat(roomId, Location) // Function Set Chat - Will Set Chat For The Room
{
    localStorage.setItem("roomId", roomId); // Will Set Item 'roomId' From Variable 'roomId'
    localStorage.setItem("Location", Location); // Will Set Item 'Location' From Variable 'Location'
}

function openCreateChatRoomSettings() // Function Open Create Chat Room Settings - Will Open Create Chat Room Settings
{
    document.getElementById('createChatRoomDiv').style.display = 'flex'; // Will Set The Style Of Element With Id 'createChatRoomDiv' To 'display: flex;'
    document.getElementById('openCreateChatRoomSettingsButton').style.display = 'none'; // Will Set The Style Of Element With Id 'openCreateChatRoomSettingsButton' To 'display: none;'
}

function createChatRoom() // Function Create Chat Room - Will Create Chat Room When Executed
{
    username = localStorage.getItem("username"); // Getting Item From Local Storage 'username' And Setting Data In Variable 'username'
    room_name = document.getElementById("room_name").value; // Getting Data From Element With Id 'room_name' And Setting Data In Variable 'room_name'

    room_name.toString; // Converting Variable 'room_name' To String
    roomId = room_name
        .replaceAll(".", "ā")
        .replaceAll("#", "ḥ")
        .replaceAll("$", "ḍ")
        .replaceAll("[", "ś")
        .replaceAll("]", "ē")
        .replaceAll(" ", "æ");

    rooms.database().ref(`/`).child(`${username}/${roomId}`).update( // Will Push Data Into Database - Location `/` And will Create A Key `${username}/${roomId}`
        {
            name: room_name, // name - Child Of Variable `${username}/${roomId}` And Will Set The Value Of Variable 'room_name'
            location: username // location - Child Of Variable `${username}/${roomId}` And Will Set The Value Of Variable 'username'
        }
    );

    rooms.database().ref(`/${username}/${roomId}`).child(`users/${username}`).update( // Will Push Data Into Database - Location `/${username}/${roomId}` And will Create A Key `users/${username}`
        {
            role: 'admin' // role - Child Of Variable `${username}` And Will Set The Value 'admin'
        }
    );

    document.getElementById("message").innerText = `Creating Chat Room Please Wait...`; // Will Set Inner Text Of Element With Id 'message' To `Creating Chat Room Please Wait...`
    document.getElementById("message").style.color = 'rgb(0, 210, 0)'; // Will Set The Style Of Element With Id 'message' To 'color: rgb(0, 210, 0);'
    document.getElementById("message").style.display = `unset`; // Will Set The Style Of Element With Id 'message' To 'display: unset;'

    setTimeout(() => // Will Wait For 5000 Microseconds Before Execution 
        {
            document.getElementById("message").innerText = `Chat Room Created Successfully`; // Will Set Inner Text Of Element With Id 'message' To `Chat Room Created Successfully`
            getData(); // Function Get Data Call To Get The Data From The Database And Reset It Because The Data Is Updated
            document.getElementById("openCreateChatRoomSettingsButton").style.display = 'unset'; // Will Set The Style Of Element With Id `openCreateChatRoomSettingsButton` To 'display: unset;'
            document.getElementById("createChatRoomDiv").style.display = 'none'; // Will Set The Style Of Element With Id `createChatRoomDiv` To 'display: none;'
            document.getElementById("room_name").value = ''; // Setting Value Of Element With 'room_name' To ''
            document.getElementById("message").innerText = ''; // Will Set Inner Text Of Element With Id 'message' To ''
        }, 
    5000);
}

function sideChat(rommId, roomLocation) // Function Side Chat - To Open Chat In Side
{
    setChat(rommId, roomLocation); // Function Set Chat Call
    document.getElementById("iframe").src = '/chat/chat/';
    document.getElementById("openInPage").style.display = "grid";
    setTimeout(() => // Will Wait For 2000 Microseconds Before Execution 
        {
            localStorage.setItem("page", '/chat/'); // Will Set Item 'page' To '/chat/'
            document.getElementById('iframe').style.display = 'unset'; // Will Set The Style Of Element With Id `iframe` To 'display: unset;'
        },
    2000);
}

function chatPage(rommId, roomLocation) // Function Chat Page - To Open Chat In Page
{
    setChat(rommId, roomLocation); // Function Set Chat Call
    redirect('!=', roomId, 'chat'); // Function Redirect Call
}