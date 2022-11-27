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

        document.getElementById("welcome").innerText = 'Singup'; // Will Set Inner Text Of Element With Id 'welcome' To `Singup`
        document.getElementById("welcome").style.display = 'unset'; // Will Set The Style Of Element With Id `welcome` To 'display: unset;'
    }
}
redirect(); // Function Redirect To Check After The Page Is Loaded

function singup() // Function Singup - Will Create A New Account
{
    email = document.getElementById("email").value; // Will Get Value From Element With Id 'email' And Will Set It In The Variable 'email'
    name = document.getElementById("name").value; // Will Get Value From Element With Id 'name' And Will Set It In The Variable 'name'
    password = document.getElementById("password").value; // Will Get Value From Element With Id 'password' And Will Set It In The Variable 'password'

    email.tostring; // Converting Variable 'email' To String
    name.tostring; // Converting Variable 'name' To String
    password.tostring; // Converting Variable 'password' To String

    username = email
        .replaceAll(".", "ā") // Will Replace All The '.' In Variable 'email' To 'ā' (If Any) And Store It In A Variable 'username'
        .replaceAll("#", "ḥ") // Will Replace All The '#' In Variable 'email' To 'ḥ' (If Any) And Store It In A Variable 'username'
        .replaceAll("$", "ḍ") // Will Replace All The '$' In Variable 'email' To 'ḍ' (If Any) And Store It In A Variable 'username'
        .replaceAll("[", "ś") // Will Replace All The '[' In Variable 'email' To 'ś' (If Any) And Store It In A Variable 'username'
        .replaceAll("]", "ē") // Will Replace All The ']' In Variable 'email' To 'ē' (If Any) And Store It In A Variable 'username'
        .replaceAll(" ", "æ"); // Will Replace All The ' ' In Variable 'email' To 'æ' (If Any) And Store It In A Variable 'username'

    document.getElementById("message").innerText = 'Error While Creating Your Account'; // Will Set Inner Text Of Element With Id 'message' To `Error While Creating Your Account` (Note: This Is Done Before Because The Below Code Will Create A New Account For The User And If It Fails To Execute For Some Reasons It Will Show `Error While Creating Your Account` To The User)
    document.getElementById("message").style.color = 'rgb(210, 10, 10)'; // Will Set The Style Of Element With Id 'message' To 'color: rgb(210, 10, 10);'
    document.getElementById("message").style.display = 'unset'; // Will Set The Style Of Element With Id 'message' To 'display: unset;'

    users.database().ref("/").child(`${username}`).update( // Will Push Data Into Database - Location `/` And will Create A Key `${username}`
        {
            email: email, // email - Child Of Variable '${username}' And Will Set The Value Of Variable 'email'
            name: name, // name - Child Of Variable '${username}' And Will Set The Value Of Variable 'name'
            password: password // password - Child Of Variable '${username}' And Will Set The Value Of Variable 'password'
        }
    );

    localStorage.setItem("username", username); // Will Set Item 'username' From Variable 'username'
    localStorage.setItem("name", name); // Will Set Item 'name' From Variable 'name'

    document.getElementById("message").innerText = 'Congratulations! You Account Had Been Created'; // Will Set Inner Text Of Element With Id 'message' To `Congratulations! You Account Had Been Created`
    document.getElementById("message").style.color = 'rgb(0, 210, 0)'; // Will Set The Style Of Element With Id 'message' To 'color: rgb(0, 210, 0);'
    document.getElementById("message").style.display = 'unset'; // Will Set The Style Of Element With Id 'message' To 'display: unset;'

    setTimeout(() => // Will Wait For 1000 Microseconds Before Execution
        {
            window.location = '/chat/'; // Navigate To '/chat/'
        },
    1000);
}