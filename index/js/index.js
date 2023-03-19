redirect('==', username, 'login');

function getData()
{
    document.getElementById('output').innerHTML = '';
    var getData = getFirebaseData(`/rooms/${username}`);
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

        var getData = getFirebaseData(`/rooms/${Location}/${roomId}`);

        getUsers = getData['users'];
        user = getUsers[`${username}`];

        Location = getData['location'];
        name = getData['name'];
        role = user['role'];
                
        document.getElementById("output").innerHTML += room.replaceAll('{roomId}', roomId)
                                                           .replaceAll('{roomLocation}', Location)
                                                           .replaceAll('{name}', name);
    }
}
getData();

function setChat(roomId, Location)
{
    manageLocalStorageData("set", "roomId", roomId);
    manageLocalStorageData("set", "Location", Location);
}

function openCreateChatRoomSettings()
{
    document.getElementById('createChatRoomDiv').style.display = 'flex';
    document.getElementById('openCreateChatRoomSettingsButton').style.display = 'none';
}

function createChatRoom()
{
    username = manageLocalStorageData('get', 'username');
    room_name = value_("room_name")

    room_name.toString;
    roomId = convertToFirebaseAcceptableData(room_name);

    setFirebaseData('rooms', '', `${username}/${roomId}`, {
        name: room_name,
        location: username
    });

    setFirebaseData('rooms', `${username}/${roomId}/users`, `${username}`, {
        role: 'admin'
    });

    manageLabel('message', 'Creating Chat Room Please Wait...', 'rgb(0, 210, 0)', 'unset');

    setTimeout(() =>
        {
            manageLabel('message', 'Chat Room Created Successfully', 'rgb(0, 210, 0)', 'unset');
            getData();
            document.getElementById("openCreateChatRoomSettingsButton").style.display = 'unset';
            document.getElementById("createChatRoomDiv").style.display = 'none';
            document.getElementById("room_name").value = '';
            manageLabel('message', '', '', 'none');
        }, 
    5000);
}

function sideChat(rommId, roomLocation)
{
    setChat(rommId, roomLocation);
    document.getElementById("iframe").src = '/chat/chat/';
    document.getElementById("openInPage").style.display = "grid";
    setTimeout(() => {
        manageLocalStorageData("set", "page", '/chat/');
        document.getElementById('iframe').style.display = 'unset';
    }, 2000);
}

function chatPage(rommId, roomLocation)
{
    setChat(rommId, roomLocation);
    redirect('!=', roomId, 'chat');
}