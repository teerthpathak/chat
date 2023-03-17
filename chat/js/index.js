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

function getData()
{  
    document.getElementById("container").innerHTML = "";
    chats.database().ref(`/${roomLocation}/${roomId}`).on("value", function (snapshot)
    {
        var getData = snapshot.val();
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
    });

    rooms.database().ref(`/${roomLocation}/${roomId}`).on("value", function (snapshot)
    {
        var getData = snapshot.val();
        document.querySelector("#change_name").value = getData['name'];
        document.querySelector("#room_name").innerText = getData['name'];

        var getArray = Object.entries(getData['users']);
        var getKeysArray = Object.keys(getData).map((key) => [Number(key), getData[key]]);
        for (let i = 0; i < getKeysArray.length - 1; i++)
        {
            var getData = snapshot.val();
            main = getArray[i];
            users.database().ref(`/${main[0]}`).on("value", function (snapshot)
            {
                var getData = snapshot.val();
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
getData();

function send()
{
    message = document.getElementById("message_input").value;
    getDate = new Date();

    date = getDate.getDate();
    month = getDate.getMonth() + 1;
    year = getDate.getFullYear();

    fullDate = date + '-' + month + '-' + year;
    time = getDate.toLocaleTimeString();

    chatId = username + fullDate + time;
    chatId.toString;
    chatId = chatId.replaceAll(" ", "ṇ")

    chats.database().ref(`/${roomLocation}/${roomId}`).child(chatId).update(
        {
            date: fullDate,
            message: message,
            name: name,
            time: time,
            username: username
        }
    );
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
    var room_name_edited = document.getElementById('change_name').value;
    rooms.database().ref(`/${roomLocation}`).child(`/${roomId}`).update(
        {
            name: room_name_edited
        }
    );
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
    console.log(getRole);
    for (i = 0; i < getRole.length; i++)
    {
        if (getRole[i].checked)
        {
            role = getRole[i].value;

            new_user = document.getElementById(`add_user_input`).value;
            new_user = new_user.replaceAll(".", "ā")
                               .replaceAll("#", "ḥ")
                               .replaceAll("$", "ḍ")
                               .replaceAll("[", "ś")
                               .replaceAll("]", "ē")
                               .replaceAll(" ", "æ");

            rooms.database().ref(`${roomLocation}/${roomId}/users`).child(`${new_user}`).update(
                {
                    role: role
                }
            );

            rooms.database().ref(`/${new_user}`).child(`${roomId}`).update(
                {
                    location: roomLocation
                }
            );
        }
    }
    getData();
    document.getElementById('show_add_user_settings').style.display = 'unset';
    document.getElementById('add_user').style.display = 'none';
}

function exit_room()
{
    rooms.database().ref(`/${roomLocation}/${roomId}/users`).child(`${username}`).remove()
    rooms.database().ref(`/${username}`).child(`${roomId}`).remove()
}

function delete_room()
{
    let username = localStorage.getItem("username");
    rooms.database().ref(`/${roomLocation}/${roomId}/users`).on("value", function (snapshot)
    {
        var getData = snapshot.val();
        var getKeysArray = Object.keys(getData).map((key) => [Number(key), getData[key]]);
        var getArray = Object.entries(getData);

        for (let i = 0; i < getKeysArray.length; i++)
        {
            getUsername = getArray[0];
            username = getUsername[0];

            rooms.database().ref(`/${username}`).child(`${roomId}`).remove();
        }
    });
    rooms.database().ref(`/${roomLocation}/${roomId}/users`).child(`${username}`).remove();
    getData();
}

function delete_message(chatId)
{
    chats.database().ref(`/${roomLocation}/${roomId}`).child(`${chatId}`).remove()
    getData();
}