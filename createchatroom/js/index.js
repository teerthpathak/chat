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

    rooms.database().ref(`/${username}/${roomId}/users`).child(`${username}`).update( // Will Push Data Into Database - Location `/${username}/${roomId}/users` And will Create A Key `${username}`
        {
            role: 'admin' // role - Child Of Variable `${username}` And Will Set The Value 'admin'
        }
    );

    document.getElementById("message").innerText = `Creating Chat Room Please Wait...`; // Will Set Inner Text Of Element With Id 'message' To `Creating Chat Room Please Wait...`
    document.getElementById("message").style.color = 'rgb(0, 210, 0)'; // Will Set The Style Of Element With Id 'message' To 'color: rgb(0, 210, 0);'
    document.getElementById("message").style.display = `unset`; // Will Set The Style Of Element With Id 'message' To 'display: unset;'

    setTimeout(() => // Will Wait For 3000 Microseconds Before Execution 
        {
            document.getElementById("message").innerText = `Chat Room Created Successfully`; // Will Set Inner Text Of Element With Id 'message' To `Chat Room Created Successfully`
            document.getElementById("message").style.color = 'rgb(0, 210, 0)'; // Will Set The Style Of Element With Id 'message' To 'color: rgb(0, 210, 0);'
            document.getElementById("message").style.display = `unset`; // Will Set The Style Of Element With Id 'message' To 'display: unset;'
            window.location = '/chat/';  // Navigate To '/chat/'
        }, 
    3000);
}