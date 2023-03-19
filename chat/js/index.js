redirect('==', roomId, '');
manageLocalStorageData('set', "page", Location);
setTimeout(() => {
    var page = manageLocalStorageData('get', 'page');
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

function getData()
{  
    document.getElementById("container").innerHTML = "";
    var getData = getFirebaseData(`/chats/${roomLocation}/${roomId}`);
    var getKeysArray = Object.keys(getData).map((key) => [Number(key), getData[key]]);
    var getArray = Object.entries(getData);

    for (let i = 0; i < getKeysArray.length; i++)
    {
        getChatId = getArray[i];
        chatId = getChatId[0];

        data = getKeysArray[i];
        main = data[1];

        date = main['date'];
        message = main['message'];
        name = main['name'];
        time = main['time'];
        sendersUsername = main['username'];
            
        if (sendersUsername == username)
        {
            document.getElementById("container").innerHTML += chat.replaceAll('{align}', 'right')
                                                                  .replaceAll('{message}', message)
                                                                  .replaceAll('{date}', date)
                                                                  .replaceAll('{time}', time)
                                                                  .replaceAll('{chatId}', chatId)
                                                                  .replaceAll('{name}', name)
                                                                  .replaceAll('{username}', username);
        }
        else if(sendersUsername != username)
        {
            document.getElementById("container").innerHTML += chat.replaceAll('{align}', 'left')
                                                                  .replaceAll('{message}', message)
                                                                  .replaceAll('{date}', date)
                                                                  .replaceAll('{time}', time)
                                                                  .replaceAll('{chatId}', chatId)
                                                                  .replaceAll('{name}', name)
                                                                  .replaceAll('{username}', username);

            document.getElementById(`${chatId}_delete_message_button`).style.display = "none";
        }
        else {
            doNoting();
        }
    }

    var getData = getFirebaseData(`/rooms/${roomLocation}/${roomId}`);
    document.querySelector("#change_name").value = getData['name'];
    document.querySelector("#room_name").innerText = getData['name'];

    var getArray = Object.entries(getData['users']);
    var getKeysArray = Object.keys(getData).map((key) => [Number(key), getData[key]]);
    for (let i = 0; i < getKeysArray.length - 1; i++)
    {
        var getData = snapshot.val();
        main = getArray[i];

        var getData = getFirebaseData(`/users/${main[0]}`);

        main = getArray[i];
            
        getRole = main[1];
        role = getRole['role'].replaceAll("admin", "Admin")
                              .replaceAll("regular", "Regular");
                
        name = getData['name'];
        email = getData['email'];

        document.getElementById("tbody").innerHTML += user.replaceAll("{name}", name)
                                                          .replaceAll("{role}", role)
                                                          .replaceAll("{email}", email);
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
}
getData();

function send()
{
    message = value_('message_input');
    getDate = new Date();

    date = getDate.getDate();
    month = getDate.getMonth() + 1;
    year = getDate.getFullYear();

    fullDate = date + '-' + month + '-' + year;
    time = getDate.toLocaleTimeString();

    chatId = username + fullDate + time;
    chatId.toString;
    chatId = chatId.replaceAll(" ", "ṇ")

    setFirebaseData('chats', `/chats/${roomLocation}/${roomId}`, chatId, {
        date: fullDate,
        message: message,
        name: name,
        time: time,
        username: username
    });
    getData();
    message = document.getElementById("message_input").value = '';
}

function show_edit_group_name_settings()
{
    document.getElementById('edit_group_name').style.display = 'unset';
    document.getElementById('show_edit_group_name_settings').style.display = 'none';
}

function save_edited_room_name()
{
    var room_name_edited = value_('change_name');
    setFirebaseData('rooms', `${roomLocation}`, `/${roomId}`, {
        name: room_name_edited
    });
    room_name_edited = '';
    document.getElementById('show_edit_group_name_settings').style.display = 'unset';
    document.getElementById('edit_group_name').style.display = 'none';
}

function show_add_user_settings()
{
    document.getElementById('add_user').style.display = 'unset';
    document.getElementById('show_add_user_settings').style.display = 'none';
}

function add_user()
{
    var getRole = document.getElementsByName('role');
    for (i = 0; i < getRole.length; i++)
    {
        if (getRole[i].checked)
        {
            role = getRole[i].value;

            new_user = value_('add_user_input');
            new_user = convertToFirebaseAcceptableData(new_user);

            setFirebaseData('rooms', `/rooms/${roomLocation}/${roomId}/users`, `${new_user}`, {
                role: role
            });

            setFirebaseData('rooms', `/rooms/${new_user}`, `${roomId}`, {
                location: roomLocation
            });
        }
    }
    getData();
    document.getElementById('show_add_user_settings').style.display = 'unset';
    document.getElementById('add_user').style.display = 'none';
}

function exit_room()
{
    removeFirebaseData(`rooms`, `${roomLocation}/${roomId}/users`, `${username}`);
    removeFirebaseData(`rooms`, `${username}`, `${roomId}`);
}

function delete_room()
{
    let username = manageLocalStorageData('get', 'username');
    var getData = getFirebaseData(`/rooms/${roomLocation}/${roomId}/users`);
    var getKeysArray = Object.keys(getData).map((key) => [Number(key), getData[key]]);
    var getArray = Object.entries(getData);

    for (let i = 0; i < getKeysArray.length; i++)
    {
        getUsername = getArray[0];
        username = getUsername[0];
        removeFirebaseData(`rooms`, `${username}`, `${roomId}`);
    }
    removeFirebaseData(`rooms`, `${roomLocation}/${roomId}/users`, `${username}`);
    getData();
}

function delete_message(chatId)
{
    removeFirebaseData('chats', `${roomLocation}/${roomId}`, `${chatId}`)
    getData();
}