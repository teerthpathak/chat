redirect('==', roomId, '');
setTimeout(() => {
    var page = localStorage.getItem("page");
    if(page == "/chat/"){   
        var header = document.getElementById("header");
        var roomUtility = document.getElementById("roomUtility");
        var user = document.getElementById("users");
        var footer = document.getElementById("footer");
        header.remove();
        roomUtility.remove();
        user.remove();
        footer.remove();
    }
    else{
        doNoting();
    }
}, 3000);

function getData() // Function Get Data
{  
    document.getElementById("container").innerHTML = ""; // Will Set Inner HTML Of Element With Id 'container' To ''
    chats.database().ref(`/${roomLocation}/${roomId}`).on("value", function (snapshot) // Will Set Location To `/${roomLocation}/${roomId}` (Database)
    {
        var getData = snapshot.val(); // Will Get Data From `/${roomLocation}/${roomId}` And Will Set Data It In The Variable 'getData'
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
            
            if (sendersUsername == username) // If Variable 'sendersUsername' Data Is Equal To Variable 'username' Data
            {
                document.getElementById("container").innerHTML += chat.replaceAll('{align}', 'right') // Will Replace All The '{message}' In Variable 'chatLeft' To Variable 'message' (If Any) And Store It In A Variable 'content'
                                                                      .replaceAll('{message}', message) // Will Replace All The '{message}' In Variable 'chatLeft' To Variable 'message' (If Any) And Store It In A Variable 'content'
                                                                      .replaceAll('{date}', date) // Will Replace All The '{date}' In Variable 'chatLeft' To Variable 'date' (If Any) And Store It In A Variable 'content'
                                                                      .replaceAll('{time}', time) // Will Replace All The '{time}' In Variable 'chatLeft' To Variable 'time' (If Any) And Store It In A Variable 'content'
                                                                      .replaceAll('{chatId}', chatId) // Will Replace All The '{chatId}' In Variable 'chatLeft' To Variable 'chatId' (If Any) And Store It In A Variable 'content'
                                                                      .replaceAll('{name}', name) // Will Replace All The '{name}' In Variable 'chatLeft' To Variable 'name' (If Any) And Store It In A Variable 'content'
                                                                      .replaceAll('{username}', username); // Will Replace All The '{username}' In Variable 'chatLeft' To Variable 'username' (If Any) And Store It In A Variable 'content'; // Will Add The Data Of Variable 'content' Into Element With Id 'container'
            }
            /**/else if(sendersUsername != username) // If Variable 'sendersUsername' Data Is Not Equal To Variable 'username' Data
            {
                document.getElementById("container").innerHTML += chat.replaceAll('{align}', 'left') // Will Replace All The '{message}' In Variable 'chatLeft' To Variable 'message' (If Any) And Store It In A Variable 'content'
                                                                      .replaceAll('{message}', message) // Will Replace All The '{message}' In Variable 'chatLeft' To Variable 'message' (If Any) And Store It In A Variable 'content'
                                                                      .replaceAll('{date}', date) // Will Replace All The '{date}' In Variable 'chatLeft' To Variable 'date' (If Any) And Store It In A Variable 'content'
                                                                      .replaceAll('{time}', time) // Will Replace All The '{time}' In Variable 'chatLeft' To Variable 'time' (If Any) And Store It In A Variable 'content'
                                                                      .replaceAll('{chatId}', chatId) // Will Replace All The '{chatId}' In Variable 'chatLeft' To Variable 'chatId' (If Any) And Store It In A Variable 'content'
                                                                      .replaceAll('{name}', name) // Will Replace All The '{name}' In Variable 'chatLeft' To Variable 'name' (If Any) And Store It In A Variable 'content'
                                                                      .replaceAll('{username}', username); // Will Replace All The '{username}' In Variable 'chatLeft' To Variable 'username' (If Any) And Store It In A Variable 'content'; // Will Add The Data Of Variable 'content' Into Element With Id 'container'

                document.getElementById(`${chatId}_delete_message_button`).style.display = "none";
            }
            else {
                doNoting(); // Function Do Noting Call
            }
        }
    });

    rooms.database().ref(`/${roomLocation}/${roomId}`).on("value", function (snapshot) // Will Set Location To `/${roomLocation}/${roomId}` (Database)
    {
        var getData = snapshot.val(); // Will Get Data From `/${roomLocation}/${roomId}` And Will Set Data It In The Variable 'getData'
        document.querySelector("#change_name").value = getData['name'];
        document.querySelector("#room_name").innerText = getData['name'];

        var getArray = Object.entries(getData['users']); // Will Convert The Data Of Variable 'getData' Into An Array (Will Show Keys And Values Both) And Will Store It In A Variable 'getArray'
        var getKeysArray = Object.keys(getData).map((key) => [Number(key), getData[key]]); // Will Convert The Data Of Variable 'getData' Into An Array (Will Only Show Keys) And Will Store It In A Variable 'getKeysArray'
        for (let i = 0; i < getKeysArray.length - 1; i++)
        {
            var getData = snapshot.val(); // Will Get Data From `/${roomLocation}/${roomId}` And Will Set Data It In The Variable 'getData'
            main = getArray[i];
            users.database().ref(`/${main[0]}`).on("value", function (snapshot) // Will Set Location To `/${roomLocation}/${roomId}` (Database)
            {
                var getData = snapshot.val(); // Will Get Data From `/${roomLocation}/${roomId}` And Will Set Data It In The Variable 'getData'
                main = getArray[i];
            
                getRole = main[1];
                role = getRole['role'].replaceAll("admin", "Admin")
                                      .replaceAll("regular", "Regular");
                
                name = getData['name'];
                email = getData['email'];

                document.getElementById("tbody").innerHTML += user.replaceAll("{name}", name)
                                                                  .replaceAll("{role}", role)
                                                                  .replaceAll("{email}", email);
            });
        }

        AllUsers = snapshot.val()['users'];

        getRole = AllUsers[username];
        role = getRole['role'].replaceAll("admin", "Admin")
                              .replaceAll("regular", "Regular");

        if((role == 'Admin') && (roomLocation != username))
        {
            document.getElementById("delete_room").style.display = "none";
        }
        else if((role == 'Regular') && (roomLocation != username))
        {
            document.getElementById("delete_room").style.display = "none";
            document.getElementById("show_edit_group_name_settings").style.display = "none";
            document.getElementById("show_add_user_settings").style.display = "none";
        }
        else if((role == 'Admin') && (roomLocation == username))
        {
            document.getElementById("exit_room").style.display = "none";
        }
        else if((role == 'Regular') && (roomLocation == username))
        {
            document.getElementById("exit_room").style.display = "none";
            document.getElementById("show_edit_group_name_settings").style.display = "none";
            document.getElementById("show_add_user_settings").style.display = "none";
        }
        else
        {
            doNoting();
        }
    });
}
getData(); // Function Get Data Call To Get The Data From The Database And Set It

function send() // Function Send - To Send The Data To The Database
{
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

    chats.database().ref(`/${roomLocation}/${roomId}`).child(chatId).update( // Will Push Data Into Database - Location `/${roomLocation}/${roomId}` And will Create A Key `${chatId}`
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

function show_edit_group_name_settings() // Function Show Edit Group Name Settings - Will Show Edit Group Name Settings
{
    document.getElementById('edit_group_name').style.display = 'unset'; // Will Set The Style Of Element With Id `change_name_${roomId}` To 'display: unset;'
    document.getElementById('show_edit_group_name_settings').style.display = 'none'; // Will Set The Style Of Element With Id `${roomId}_p` To 'display: none;'
}

function save_edited_room_name() // Function Save Edited Room Name - Will Save Edited Room Name
{
    var room_name_edited = document.getElementById('change_name').value; // Getting Data From Element With Id `change_name_${roomId}` And Setting Data In Variable 'room_name_edited'
    rooms.database().ref(`/${roomLocation}`).child(`/${roomId}`).update( // Will Push Data Into Database - Location `/${Location}` And will Create A Key `/${roomId}`
        {
            name: room_name_edited // name - Child Of Variable '/${roomId}' And Will Set The Value Of Variable 'room_name_edited'
        }
    );
    room_name_edited = ''; // Setting Variable 'room_name_edited' Value To ''
    document.getElementById('show_edit_group_name_settings').style.display = 'unset'; // Will Set The Style Of Element With Id `change_name_${roomId}` To 'display: unset;'
    document.getElementById('edit_group_name').style.display = 'none'; // Will Set The Style Of Element With Id `${roomId}_p` To 'display: none;'
}

function show_add_user_settings() // Function Show Add User Settings - Will Show Add User Settings
{
    document.getElementById('add_user').style.display = 'unset'; // Will Set The Style Of Element With Id `change_name_${roomId}` To 'display: unset;'
    document.getElementById('show_add_user_settings').style.display = 'none'; // Will Set The Style Of Element With Id `${roomId}_p` To 'display: none;'
}

function add_user() // Function Add User - Will Add The User Into The Room
{
    var getRole = document.getElementsByName('role'); // Will Get Elements By Name 'role' And Stroe It In A Variable 'getRole'
    console.log(getRole);
    for (i = 0; i < getRole.length; i++) // For-Loop For Running It For 'i' Number(s) Of Times
    {
        if (getRole[i].checked) // If Variable `getRole` 'i' Index Is Equal To 'checked'
        {
            role = getRole[i].value; // Will Get Value From Variable 'getRole' 'i' Index And Set It In The Variable 'role'

            new_user = document.getElementById(`add_user_input`).value; // Will Get Data From Element With Id `add_user_input_${roomId}` And Set It In The Variable 'new_user'
            new_user = new_user.replaceAll(".", "ā") // Will Replace All The '.' In Variable 'room_name' To 'ā' (If Any) And Store It In A Variable 'new_user'
                               .replaceAll("#", "ḥ") // Will Replace All The '#' In Variable 'room_name' To 'ḥ' (If Any) And Store It In A Variable 'new_user'
                               .replaceAll("$", "ḍ") // Will Replace All The '$' In Variable 'room_name' To 'ḍ' (If Any) And Store It In A Variable 'new_user'
                               .replaceAll("[", "ś") // Will Replace All The '[' In Variable 'room_name' To 'ś' (If Any) And Store It In A Variable 'new_user'
                               .replaceAll("]", "ē") // Will Replace All The ']' In Variable 'room_name' To 'ē' (If Any) And Store It In A Variable 'new_user'
                               .replaceAll(" ", "æ"); // Will Replace All The ' ' In Variable 'room_name' To 'æ' (If Any) And Store It In A Variable 'new_user'

            rooms.database().ref(`${roomLocation}/${roomId}/users`).child(`${new_user}`).update( // Will Push Data Into Database - Location `${Location}/${roomId}/users` And will Create A Key `${new_user}`
                {
                    role: role // role - Child Of Variable '${new_user}' And Will Set The Value Of Variable 'role'
                }
            );

            rooms.database().ref(`/${new_user}`).child(`${roomId}`).update( // Will Push Data Into Database - Location `/${new_user}` And will Create A Key `${roomId}`
                {
                    location: roomLocation // location - Child Of Variable '${roomId}' And Will Set The Value Of Variable 'Location'
                }
            );
        }
    }
    getData(); // Function Get Data Call To Get The Data From The Database And Reset It Because The Data Is Updated
    document.getElementById('show_add_user_settings').style.display = 'unset'; // Will Set The Style Of Element With Id `change_name_${roomId}` To 'display: unset;'
    document.getElementById('add_user').style.display = 'none'; // Will Set The Style Of Element With Id `${roomId}_p` To 'display: none;'
}

function exit_room() // Function Exit Room - Will Remove The User From The Room
{
    rooms.database().ref(`/${roomLocation}/${roomId}/users`).child(`${username}`).remove() // Will Delete Key '${username}' From Location `/${Location}/${roomId}/users`
    rooms.database().ref(`/${username}`).child(`${roomId}`).remove() // Will Delete Key '${roomId}' From Location `/${username}`
}

function delete_room() // Functio Delete Room - Will Make The User To Delete The Room
{
    let username = localStorage.getItem("username"); // Getting Item From Local Storage 'username' And Setting Data In Variable 'username'
    rooms.database().ref(`/${roomLocation}/${roomId}/users`).on("value", function (snapshot) // Will Set Location To `/${Location}/${roomId}` (Database)
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
    rooms.database().ref(`/${roomLocation}/${roomId}/users`).child(`${username}`).remove(); // Will Delete Key '${username}' From Location `/${Location}/${roomId}/users`
    getData(); // Function Get Data Call To Get The Data From The Database And Reset It Because The Data Is Updated
}

function delete_message(chatId) // Function Delete Message - Will Delete A Message Send By The User
{
    chats.database().ref(`/${roomLocation}/${roomId}`).child(`${chatId}`).remove() // Will Delete The Key `${chatId}` From The Location `/${roomLocation}/${roomId}`
    getData(); // Function Get Data Call To Get The Data From The Database And Reset It Because The Data Is Updated
}