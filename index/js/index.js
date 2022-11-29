function redirect() // Function Redirect - To Redirect If User Is Not Logged In
{
    let name = localStorage.getItem("name"); // Getting Item From Local Storage 'name' And Setting Data In Variable 'name'    
    let username = localStorage.getItem("username"); // Getting Item From Local Storage 'username' And Setting Data In Variable 'username'
    if (name == undefined || null && username == undefined || null) // If 'name' And 'username' Is Equal To 'undefined' Or 'null'
    {
        window.location = '/chat/login/'; // Navigate To '/chat/login/'
    }
    else {
        localStorage.removeItem('roomId'); // Will Remove Item `roomId` From Local Storage
        localStorage.removeItem('Location'); // Will Remove Item `Location` From Local Storage
    }
}
redirect(); // Function Redirect To Check After The Page Is Loaded

function openCreateChatRoomSettings() // Function Open Create Chat Room Settings - Will Open Create Chat Room Settings
{
    document.getElementById("createChatRoomDiv").style.display = 'flex'; // Will Set The Style Of Element With Id `createChatRoomDiv` To 'display: flex;'
    document.getElementById("openCreateChatRoomSettingsButton").style.display = 'none'; // Will Set The Style Of Element With Id `openCreateChatRoomSettingsButton` To 'display: none;'
}

function getData() // Function Get Data - WIll Get Data From The Database
{
    document.getElementById('output').innerHTML = ''; // Will Set Inner HTML Of The Element With Id 'output' To ''
    let username = localStorage.getItem("username"); // Getting Item From Local Storage 'username' And Setting Data In Variable 'username'
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

                var admin // Variable 'admin'
                    =
                        `
                            <div class="container"> <!-- DIV With Class 'container' Starts -->
                                <div class="top"> <!-- DIV With Class 'top' Starts -->
                                    <input type="text" class="input" id="change_name_${roomId}" value="${name}" style="display: none;"> <!-- INPUT With Type 'text', Class 'input', Id 'change_name_${roomId}', Value '${name}' And Style 'display: none;' -->
                                    <button class="btn dark" id="save_${roomId}" style="display: none;" onclick="save_edited_room_name('${roomId}')">Save Changes</button> <!-- BUTTON With Class 'btn dark', Id 'save_${roomId}', Style 'display: none;' And Onclick 'save_edited_room_name('${roomId}')' -->
                                    <p id="${roomId}_p" class='p' style="display: unset;">${name}</p> <!-- P With Id '${roomId}_p', Class 'p' And Style 'display: unset;' -->
                                </div> <!-- DIV With Class 'top' Ends -->
                                <div class="middle"> <!-- DIV With Class 'middle' Starts -->
                                    <button class="btn success" id="open_${roomId}" onclick="open_chat('${roomId}', '${Location}')">Open Chat</button> <!-- BUTTON With Class 'btn success', Id 'open_${roomId}', Style 'display: none;' And Onclick 'open_chat('${roomId}', '${Location}')' -->
                                    <label for="admin" style="display: none;" id="admin_label_${roomId}">Admin <input type="radio" name="role" id="admin_radio_${roomId}" value="admin"></label> <!-- Label With For 'admin', Style 'display: none;', Id 'admin_label_${roomId}' And INPUT With Type 'radio', Name 'role', Id 'admin_radio_${roomId}', Value 'admin' -->
                                    <label for="regular" style="display: none;" id="regular_label_${roomId}">Regular <input type="radio" name="role" id="regular_radio_${roomId}" value="regular"></label> <!-- Label With For 'regular', Style 'display: none;', Id 'regular_label_${roomId}' And INPUT With Type 'radio', Name 'role', Id 'regular_radio_${roomId}', Value 'regular' -->
                                    <input type="email" class="input" id='add_user_input_${roomId}' placeholder="Enter The Email" style="display: none;"> <!-- INPUT With Type 'email', Class 'input', Id 'add_user_input_${roomId}', Placeholder 'Enter The Email' And Style 'display: none;' -->
                                    <button class="btn primary" id="add_user_${roomId}" onclick="add_user('${Location}', '${roomId}')" style="display: none;">Add User</button> <!-- BUTTON With Class 'btn primary', Id 'add_user_${roomId}', Style 'display: none;' And Onclick 'add_user('${Location}', '${roomId}')' -->
                                </div> <!-- DIV With Class 'middle' Ends -->
                                <div class="bottom"> <!-- DIV With Class 'bottom' Starts -->
                                    <button class="btn primary" id="show_add_user_${roomId}" onclick="show_add_user_settings('${roomId}')">Add User</button> <!-- BUTTON With Class 'btn primary', Id 'show_add_user_${roomId}', And Onclick 'show_add_user_settings('${roomId}')' -->
                                    <button class="btn warning" onclick="show_edit_group_name_settings('${roomId}');">Edit Group Name</button> <!-- BUTTON With Class 'btn warning', And Onclick 'show_edit_group_name_settings('${roomId}');' -->
                                    <button class="btn danger" id="exit_${roomId}" onclick="exit_room('${Location}', '${roomId}', '${username}')">Exit Room</button> <!-- BUTTON With Class 'btn danger', Id 'exit_${roomId}' And Onclick 'exit_room('${Location}', '${roomId}', '${username}')' -->
                                </div> <!-- DIV With Class 'bottom' Ends -->
                            </div> <!-- DIV With Class 'container' Ends -->
                        `
                    ;
                var regular // Variable 'regular'
                    =
                       `
                            <div class="container"> <!-- DIV With Class 'container' Starts -->
                                <div class="top"> <!-- DIV With Class 'top' Starts -->
                                    <p id="${roomId}_p" class='p' style="display: unset;">${name}</p> <!-- P With Id '${roomId}_p', Class 'p' And Style 'display: unset;' -->
                                </div> <!-- DIV With Class 'top' Ends -->
                                <div class="middle"> <!-- DIV With Class 'middle' Starts -->
                                    <button class="btn success" id="open_${roomId}" onclick="open_chat('${roomId}', '${Location}')">Open Chat</button> <!-- BUTTON With Class 'btn success', Id 'open_${roomId}', Style 'display: none;' And Onclick 'open_chat('${roomId}', '${Location}')' -->
                                </div> <!-- DIV With Class 'middle' Ends -->
                                <div class="bottom"> <!-- DIV With Class 'bottom' Starts -->
                                    <button class="btn danger" id="exit_${roomId}" onclick="exit_room('${Location}', '${roomId}', '${username}')">Exit Room</button> <!-- BUTTON With Class 'btn danger', Id 'exit_${roomId}' And Onclick 'exit_room('${Location}', '${roomId}', '${username}')' -->
                                </div> <!-- DIV With Class 'bottom' Ends -->
                            </div> <!-- DIV With Class 'container' Ends -->
                       `
                    ;
                var superAdmin // Variable 'superAdmin'
                    =
                        `
                            <div class="container"> <!-- DIV With Class 'container' Starts -->
                                <div class="top"> <!-- DIV With Class 'top' Starts -->
                                    <input type="text" class="input" id="change_name_${roomId}" value="${name}" style="display: none;"> <!-- INPUT With Type 'text', Class 'input', Id 'change_name_${roomId}', Value '${name}' And Style 'display: none;' -->
                                    <button class="btn dark" id="save_${roomId}" style="display: none;" onclick="save_edited_room_name('${roomId}')">Save Changes</button> <!-- BUTTON With Class 'btn dark', Id 'save_${roomId}', Style 'display: none;' And Onclick 'save_edited_room_name('${roomId}')' -->
                                    <p id="${roomId}_p" class='p' style="display: unset;">${name}</p> <!-- P With Id '${roomId}_p', Class 'p' And Style 'display: unset;' -->
                                </div> <!-- DIV With Class 'top' Ends -->
                                <div class="middle"> <!-- DIV With Class 'middle' Starts -->
                                    <button class="btn success" id="open_${roomId}" onclick="open_chat('${roomId}', '${Location}')">Open Chat</button> <!-- BUTTON With Class 'btn success', Id 'open_${roomId}', Style 'display: none;' And Onclick 'open_chat('${roomId}', '${Location}')' -->
                                    <label for="admin" style="display: none;" id="admin_label_${roomId}">Admin <input type="radio" name="role" id="admin_radio_${roomId}" value="admin"></label> <!-- Label With For 'admin', Style 'display: none;', Id 'admin_label_${roomId}' And INPUT With Type 'radio', Name 'role', Id 'admin_radio_${roomId}', Value 'admin' -->
                                    <label for="regular" style="display: none;" id="regular_label_${roomId}">Regular <input type="radio" name="role" id="regular_radio_${roomId}" value="regular"></label> <!-- Label With For 'regular', Style 'display: none;', Id 'regular_label_${roomId}' And INPUT With Type 'radio', Name 'role', Id 'regular_radio_${roomId}', Value 'regular' -->
                                    <input type="email" class="input" id='add_user_input_${roomId}' placeholder="Enter The Email" style="display: none;"> <!-- INPUT With Type 'email', Class 'input', Id 'add_user_input_${roomId}', Placeholder 'Enter The Email' And Style 'display: none;' -->
                                    <button class="btn primary" id="add_user_${roomId}" onclick="add_user('${Location}', '${roomId}')" style="display: none;">Add User</button> <!-- BUTTON With Class 'btn primary', Id 'add_user_${roomId}', Style 'display: none;' And Onclick 'add_user('${Location}', '${roomId}')' -->
                                </div> <!-- DIV With Class 'middle' Ends -->
                                <div class="bottom"> <!-- DIV With Class 'bottom' Starts -->
                                    <button class="btn primary" id="show_add_user_${roomId}" onclick="show_add_user_settings('${roomId}')">Add User</button> <!-- BUTTON With Class 'btn primary', Id 'show_add_user_${roomId}', And Onclick 'show_add_user_settings('${roomId}')' -->
                                    <button class="btn warning" onclick="show_edit_group_name_settings('${roomId}');">Edit Group Name</button> <!-- BUTTON With Class 'btn warning', And Onclick 'show_edit_group_name_settings('${roomId}');' -->
                                    <button class="btn danger" id="delete_${roomId}" onclick="delete_room('${Location}', '${roomId}')">Delete Room</button> <!-- BUTTON With Class 'btn danger', Id 'delete_${roomId}' And Onclick 'delete_room('${Location}', '${roomId}')' -->
                                </div> <!-- DIV With Class 'bottom' Ends -->
                            </div> <!-- DIV With Class 'container' Ends -->
                        `
                    ;
                var superRegular // Variable 'superRegular'
                    =
                        `
                            <div class="container"> <!-- DIV With Class 'container' Starts -->
                                <div class="top"> <!-- DIV With Class 'top' Starts -->
                                    <p id="${roomId}_p" class='p' style="display: unset;">${name}</p> <!-- P With Id '${roomId}_p', Class 'p' And Style 'display: unset;' -->
                                </div> <!-- DIV With Class 'top' Ends -->
                                <div class="middle"> <!-- DIV With Class 'middle' Starts -->
                                    <button class="btn success" id="open_${roomId}" onclick="open_chat('${roomId}', '${Location}')">Open Chat</button> <!-- BUTTON With Class 'btn success', Id 'open_${roomId}', Style 'display: none;' And Onclick 'open_chat('${roomId}', '${Location}')' -->
                                </div> <!-- DIV With Class 'middle' Ends -->
                                <div class="bottom"> <!-- DIV With Class 'bottom' Starts -->
                                    <button class="btn danger" id="delete_${roomId}" onclick="delete_room('${Location}', '${roomId}')">Delete Room</button> <!-- BUTTON With Class 'btn danger', Id 'delete_${roomId}' And Onclick 'delete_room('${Location}', '${roomId}')' -->
                                </div> <!-- DIV With Class 'bottom' Ends -->
                            </div> <!-- DIV With Class 'container' Ends -->
                        `
                    ;

                function setData() // Function Set Data - Will Set Data Of Room
                {
                    var content; // Variable 'content' - To Store Data From Variable 'admin', Variable 'regular', Variable 'superAdmin', Variable 'superRegular'
                    if (role == 'admin' && Location != username) // If Data Of Variable 'role' Is Equal To `admin` And Data Of Variable 'Location' Is Not Equal To `${username}`
                    {
                        content = admin; // Will Get The Data From Variable 'admin' And Set It To Variable 'content'
                    }
                    else if (role == 'regular' && Location != username) // If Data Of Variable 'role' Is Equal To `regular` And Data Of Variable 'Location' Is Not Equal To `${username}`
                    {
                        content = regular; // Will Get The Data From Variable 'regular' And Set It To Variable 'content'
                    }
                    else if (role == 'admin' && Location == username) // If Data Of Variable 'role' Is Equal To `admin` And Data Of Variable 'Location' Is Equal To `${username}`
                    {
                        content = superAdmin; // Will Get The Data From Variable 'superAdmin' And Set It To Variable 'content'
                    }
                    else if (role == 'regular' && Location == username) // If Data Of Variable 'role' Is Equal To `regular` And Data Of Variable 'Location' Is Equal To `${username}`
                    {
                        content = superRegular; // Will Get The Data From Variable 'superRegular' And Set It To Variable 'content'
                    }
                    else // If Non Of These Conditions Matches 
                    {
                        doNoting(); // Function Do Noting Call
                    }
                    document.getElementById("output").innerHTML += content; // Will Get Data Of Variable 'content' And Set Inner HTML Of Element With Id 'output'
                }
                setData(); // Function Set Data Call
            });
        }
    });
}
getData(); // Function Get Data Call To Get The Data From The Database And Set It

function show_edit_group_name_settings(roomId) // Function Show Edit Group Name Settings - Will Show Edit Group Name Settings
{
    document.getElementById(`change_name_${roomId}`).style.display = 'unset'; // Will Set The Style Of Element With Id `change_name_${roomId}` To 'display: unset;'
    document.getElementById(`save_${roomId}`).style.display = 'unset'; // Will Set The Style Of Element With Id `save_${roomId}` To 'display: unset;'
    document.getElementById(`${roomId}_p`).style.display = 'none'; // Will Set The Style Of Element With Id `${roomId}_p` To 'display: none;'
}

function save_edited_room_name(roomId) // Function Save Edited Room Name - Will Save Edited Room Name
{
    var room_name_edited; // Variable 'room_name_edited' - To Store Data Of Edited Romm Name
    room_name_edited = document.getElementById(`change_name_${roomId}`).value; // Getting Data From Element With Id `change_name_${roomId}` And Setting Data In Variable 'room_name_edited'
    rooms.database().ref(`/${Location}`).child(`/${roomId}`).update( // Will Push Data Into Database - Location `/${Location}` And will Create A Key `/${roomId}`
        {
            name: room_name_edited // name - Child Of Variable '/${roomId}' And Will Set The Value Of Variable 'room_name_edited'
        }
    );
    room_name_edited = ''; // Setting Variable 'room_name_edited' Value To ''
    getData(); // Function Get Data Call To Get The Data From The Database And Reset It Because The Data Is Updated
    
}

function show_add_user_settings(roomId) // Function Show Add User Settings - Will Show Add User Settings
{
    document.getElementById(`add_user_input_${roomId}`).style.display = 'unset'; // Will Set The Style Of Element With Id `add_user_input_${roomId}` To 'display: unset;'
    document.getElementById(`add_user_${roomId}`).style.display = 'unset'; // Will Set The Style Of Element With Id `add_user_${roomId}` To 'display: unset;'
    document.getElementById(`admin_label_${roomId}`).style.display = 'unset'; // Will Set The Style Of Element With Id `admin_label_${roomId}` To 'display: unset;'
    document.getElementById(`admin_radio_${roomId}`).style.display = 'unset'; // Will Set The Style Of Element With Id `admin_radio_${roomId}` To 'display: unset;'
    document.getElementById(`regular_label_${roomId}`).style.display = 'unset'; // Will Set The Style Of Element With Id `regular_label_${roomId}` To 'display: unset;'
    document.getElementById(`regular_radio_${roomId}`).style.display = 'unset'; // Will Set The Style Of Element With Id `regular_radio_${roomId}` To 'display: unset;'
    document.getElementById(`show_add_user_${roomId}`).style.display = 'none'; // Will Set The Style Of Element With Id `show_add_user_${roomId}` To 'display: none;'
}

function add_user(Location, roomId) // Function Add User - Will Add The User Into The Room
{
    var getRole = document.getElementsByName('role'); // Will Get Elements By Name 'role' And Stroe It In A Variable 'getRole'
    for (i = 0; i < getRole.length; i++) // For-Loop For Running It For 'i' Number(s) Of Times
    {
        if (getRole[i].checked) // If Variable `getRole` 'i' Index Is Equal To 'checked'
        {
            role = getRole[i].value; // Will Get Value From Variable 'getRole' 'i' Index And Set It In The Variable 'role'

            new_user = document.getElementById(`add_user_input_${roomId}`).value; // Will Get Data From Element With Id `add_user_input_${roomId}` And Set It In The Variable 'new_user'
            new_user = new_user
                .replaceAll(".", "ā") // Will Replace All The '.' In Variable 'room_name' To 'ā' (If Any) And Store It In A Variable 'new_user'
                .replaceAll("#", "ḥ") // Will Replace All The '#' In Variable 'room_name' To 'ḥ' (If Any) And Store It In A Variable 'new_user'
                .replaceAll("$", "ḍ") // Will Replace All The '$' In Variable 'room_name' To 'ḍ' (If Any) And Store It In A Variable 'new_user'
                .replaceAll("[", "ś") // Will Replace All The '[' In Variable 'room_name' To 'ś' (If Any) And Store It In A Variable 'new_user'
                .replaceAll("]", "ē") // Will Replace All The ']' In Variable 'room_name' To 'ē' (If Any) And Store It In A Variable 'new_user'
                .replaceAll(" ", "æ"); // Will Replace All The ' ' In Variable 'room_name' To 'æ' (If Any) And Store It In A Variable 'new_user'

            rooms.database().ref(`${Location}/${roomId}/users`).child(`${new_user}`).update( // Will Push Data Into Database - Location `${Location}/${roomId}/users` And will Create A Key `${new_user}`
                {
                    role: role // role - Child Of Variable '${new_user}' And Will Set The Value Of Variable 'role'
                }
            );

            rooms.database().ref(`/${new_user}`).child(`${roomId}`).update( // Will Push Data Into Database - Location `/${new_user}` And will Create A Key `${roomId}`
                {
                    location: Location // location - Child Of Variable '${roomId}' And Will Set The Value Of Variable 'Location'
                }
            );
        }
    }
    getData(); // Function Get Data Call To Get The Data From The Database And Reset It Because The Data Is Updated
}

function exit_room(Location, roomId, username) // Function Exit Room - Will Remove The User From The Room
{
    rooms.database().ref(`/${Location}/${roomId}/users`).child(`${username}`).remove() // Will Delete Key '${username}' From Location `/${Location}/${roomId}/users`
    rooms.database().ref(`/${username}`).child(`${roomId}`).remove() // Will Delete Key '${roomId}' From Location `/${username}`
}

function delete_room(Location, roomId) // Functio Delete Room - Will Make The User To Delete The Room
{
    let username = localStorage.getItem("username"); // Getting Item From Local Storage 'username' And Setting Data In Variable 'username'
    rooms.database().ref(`/${Location}/${roomId}/users`).on("value", function (snapshot) // Will Set Location To `/${Location}/${roomId}` (Database)
    {
        var getData = snapshot.val(); // Will Get Data From `/${username}` And Will Set Data It In The Variable 'getData'
        var getKeysArray = Object.keys(getData).map((key) => [Number(key), getData[key]]); // Will Convert The Data Of Variable 'getData' Into An Array (Will Only Show Keys) And Will Store It In A Variable 'getKeysArray'
        var getArray = Object.entries(getData); // Will Convert The Data Of Variable 'getData' Into An Array (Will Show Keys And Values Both) And Will Store It In A Variable 'getArray'

        for (let i = 0; i < getKeysArray.length; i++) // For-Loop For Running It For 'i' Number(s) Of Times
        {
            getUsername = getArray[0]; // Will Get `data` From Variable `getArray` '0' Index And Will Store It In A Variable 'getUsername'
            username = getUsername[0]; // Will Get `data` From Variable `getUsername` '0' Index And Will Store It In A Variable 'username'

            rooms.database().ref(`/${username}`).child(`${roomId}`).remove(); // Will Delete Key '${roomId}' From Location `/${username}`
        }
    });
    rooms.database().ref(`/${Location}/${roomId}/users`).child(`${username}`).remove(); // Will Delete Key '${username}' From Location `/${Location}/${roomId}/users`
    getData(); // Function Get Data Call To Get The Data From The Database And Reset It Because The Data Is Updated
}

function open_chat(roomId, Location) // Function Open Chat - Will Open Chat For The Room
{
    localStorage.setItem("roomId", roomId); // Will Set Item 'roomId' From Variable 'roomId'
    localStorage.setItem("Location", Location); // Will Set Item 'Location' From Variable 'Location'
    window.location = '/chat/chat/'; // Navigate To '/chat/chat/'
}

function redirect() // Function Redirect - To Redirect If User Is Not Logged In
{
    let name = localStorage.getItem("name"); // Getting Item From Local Storage 'name' And Setting Data In Variable 'name'
    let username = localStorage.getItem("username"); // Getting Item From Local Storage 'username' And Setting Data In Variable 'username'
    if (name == undefined || null && username == undefined || null) // If 'name' And 'username' Is Equal To 'undefined' Or 'null'
    {
        window.location = '/chat/login/'; // Navigate To '/chat/login/'
    }
}
redirect(); // Function Redirect To Check After The Page Is Loaded

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