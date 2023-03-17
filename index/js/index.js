redirect('==', username, 'login');

function getData()
{
    document.getElementById('output').innerHTML = '';
    rooms.database().ref(`/${username}`).on("value", function (snapshot)
    {
        var getData = snapshot.val();
        var getArray = Object.entries(getData);
        var getKeysArray = Object.keys(getData).map((key) => [Number(key), getData[key]]);
        var getValues = Object.values(getData);

        for (let i = 0; i < getKeysArray.length; i++)
        {
            values = getValues[i];

            getRoomId = getArray[i];
            roomId = getRoomId[0];

            getLocation = values;
            Location = getLocation['location'];

            rooms.database().ref(`/${Location}/${roomId}`).on("value", function (snapshot)
            {
                getData = snapshot.val();

                getUsers = getData['users'];
                user = getUsers[`${username}`];

                Location = getData['location'];
                name = getData['name'];
                role = user['role'];
                
                document.getElementById("output").innerHTML += room.replaceAll('{roomId}', roomId)
                                                                   .replaceAll('{roomLocation}', Location)
                                                                   .replaceAll('{name}', name);
            });
        }
    });
}
getData();

function setChat(roomId, Location)
{
    localStorage.setItem("roomId", roomId);
    localStorage.setItem("Location", Location);
}

function openCreateChatRoomSettings()
{
    document.getElementById('createChatRoomDiv').style.display = 'flex';
    document.getElementById('openCreateChatRoomSettingsButton').style.display = 'none';
}

function createChatRoom()
{
    username = localStorage.getItem("username");
    room_name = document.getElementById("room_name").value;

    room_name.toString;
    roomId = room_name
        .replaceAll(".", "ā")
        .replaceAll("#", "ḥ")
        .replaceAll("$", "ḍ")
        .replaceAll("[", "ś")
        .replaceAll("]", "ē")
        .replaceAll(" ", "æ");

    rooms.database().ref(`/`).child(`${username}/${roomId}`).update(
        {
            name: room_name,
            location: username
        }
    );

    rooms.database().ref(`/${username}/${roomId}`).child(`users/${username}`).update(
        {
            role: 'admin'
        }
    );

    document.getElementById("message").innerText = `Creating Chat Room Please Wait...`;
    document.getElementById("message").style.color = 'rgb(0, 210, 0)';
    document.getElementById("message").style.display = `unset`;

    setTimeout(() =>
        {
            document.getElementById("message").innerText = `Chat Room Created Successfully`;
            getData();
            document.getElementById("openCreateChatRoomSettingsButton").style.display = 'unset';
            document.getElementById("createChatRoomDiv").style.display = 'none';
            document.getElementById("room_name").value = '';
            document.getElementById("message").innerText = '';
        }, 
    5000);
}

function sideChat(rommId, roomLocation)
{
    setChat(rommId, roomLocation);
    document.getElementById("iframe").src = '/chat/chat/';
    document.getElementById("openInPage").style.display = "grid";
    setTimeout(() =>
        {
            localStorage.setItem("page", '/chat/');
            document.getElementById('iframe').style.display = 'unset';
        },
    2000);
}

function chatPage(rommId, roomLocation)
{
    setChat(rommId, roomLocation);
    redirect('!=', roomId, 'chat');
}