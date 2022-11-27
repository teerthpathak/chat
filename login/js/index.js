function redirect() // Function Redirect - To Redirect If User Is Not Logged In
{
    let name = localStorage.getItem('name'); // Getting Item From Local Storage 'name' And Setting Data In Variable 'name'
    let username = localStorage.getItem('username'); // Getting Item From Local Storage 'username' And Setting Data In Variable 'username'
    if (name != undefined || null && username != undefined || null) // If 'name' And 'username' Is Not Equal To 'undefined' Or 'null'
    {
        window.location = '/chat/'; // Navigate To '/chat/'
    }
    else // Else 'name' And 'username' Is Equal To 'undefined' Or 'null'
    {
        document.getElementById("logout").style.display = 'none'; // Will Set The Style Of Element With Id `logout` To 'display: none;'
        document.getElementById("redirectToDeleteYourAccountPage").style.display = 'none'; // Will Set The Style Of Element With Id `redirectToDeleteYourAccountPage` To 'display: none;'
        
        document.getElementById("welcome").innerText = 'Login'; // Will Set Inner Text Of Element With Id 'welcome' To `Login`
        document.getElementById("welcome").style.display = 'unset'; // Will Set The Style Of Element With Id `welcome` To 'display: unset;'
    }
}
redirect(); // Function Redirect To Check After The Page Is Loaded

function login() // Function Login - Will Make The User Logged In
{
    email = document.getElementById("email").value; // Will Get Value From Element With Id 'email' And Will Set It In The Variable 'email'
    password = document.getElementById("password").value; // Will Get Value From Element With Id 'password' And Will Set It In The Variable 'password'

    email = email
        .replaceAll(".", "ā") // Will Replace All The '.' In Variable 'email' To 'ā' (If Any) And Store It In A Variable 'email'
        .replaceAll("#", "ḥ") // Will Replace All The '#' In Variable 'email' To 'ḥ' (If Any) And Store It In A Variable 'email'
        .replaceAll("$", "ḍ") // Will Replace All The '$' In Variable 'email' To 'ḍ' (If Any) And Store It In A Variable 'email'
        .replaceAll("[", "ś") // Will Replace All The '[' In Variable 'email' To 'ś' (If Any) And Store It In A Variable 'email'
        .replaceAll("]", "ē") // Will Replace All The ']' In Variable 'email' To 'ē' (If Any) And Store It In A Variable 'email'
        .replaceAll(" ", "æ"); // Will Replace All The ' ' In Variable 'email' To 'æ' (If Any) And Store It In A Variable 'email'

    users.database().ref(`/${email}`).on("value", function (snapshot) // Will Set Location To `/${email}` (Database)
    {
        var getData =  snapshot.val(); // Will Get Data From `/${email}` And Will Set Data It In The Variable 'getData'
        var getKeysArray = Object.keys(getData).map((key) => [Number(key), getData[key]]); // Will Convert The Data Of Variable 'getData' Into An Array (Will Show Keys Only) And Will Store It In A Variable 'getKeysArray'
        data = getKeysArray[2]; // Will Get `data` From Variable `getKeysArray` '2' Index And Will Store It In A Variable 'data'
        getPassword = data[1]; // Will Get `data` From Variable `data` '1' Index And Will Store It In A Variable 'getPassword'

        if (password == getPassword) // If Variable `password` Data Is Equal To Variable `getPassword`
        {
            username = email; // Will Get Data From Variable `username` And Set It In Variable `email`

            data = getKeysArray[1]; // Will Get `data` From Variable `getKeysArray` '1' Index And Will Store It In A Variable 'data'
            getName = data[1]; // Will Get `data` From Variable `data` '1' Index And Will Store It In A Variable 'getName'
            name = getName; // Will Get Data From Variable `name` And Set It In Variable `getName`

            localStorage.setItem("username", username); // Will Set Item 'username' From Variable 'username'
            localStorage.setItem("name", name); // Will Set Item 'name' From Variable 'name'

            document.getElementById("message").innerText = `Welcome! ${name}`; // Will Set Inner Text Of Element With Id 'message' To `Welcome ${name}`
            document.getElementById("message").style.color = 'rgb(0, 210, 0)'; // Will Set The Style Of Element With Id 'message' To 'color: rgb(0, 210, 0)'
            document.getElementById("message").style.display = 'unset'; // Will Set The Style Of Element With Id 'message' To 'display: none;'

            document.getElementById("welcome").innerText = `Welcome! ${name}`; // Will Set Inner Text Of Element With Id 'welcome' To `Welcome ${name}`
            document.getElementById("welcome").style.display = 'unset'; // Will Set The Style Of Element With Id 'welcome' To 'display: none;'

            window.location = '/chat/'; // Navigate To '/chat/'
        }
        else // Else Variable `password` Data Is Not Equal To Variable `getPassword`
        {
            document.getElementById("message").innerText = `Incorrect Password! Please Try Again`; // Will Set Inner Text Of Element With Id 'message' To `Incorrect Password! Please Try Again`
            document.getElementById("message").style.color = 'rgb(210, 10, 10)'; // Will Set The Style Of Element With Id 'message' To 'color: rgb(210, 10, 10)'
            document.getElementById("message").style.display = 'unset'; // Will Set The Style Of Element With Id 'message' To 'display: unset;'
        }
    });
}