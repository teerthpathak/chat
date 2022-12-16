redirect('==', username, 'login'); // Function Redirect Call

function deleteMyAccount() // Function Delete My Account - Will Delete The Account Of The Logged In User
{
    var getCheckBoxData = document.querySelector('#condition'); // Will Get Element With Id 'condition' And Store It In A Variable 'getCheckBoxData'
    checkBoxData = getCheckBoxData.checked; // Will Check If The Value Of Variable 'getCheckBoxData' Is Checked Or Not (The Value Will Be In 'true' Or 'false') And Store It In A Variable 'checkBoxData'

    if(checkBoxData == true) // If Variable 'checkBoxData' Value Is Equal To 'true'
    {
        document.getElementById("message").innerText = `Error While Deleting Your Account`; // Will Set Inner Text Of Element With Id 'message' To `Error While Deleting Your Account` (Note: This Is Done Before Because The Below Code Will Delete The Account Of The Logged In User And If It Fails To Execute For Some Reasons It Will Show `Error While Deleting Your Account` To The User)
        document.getElementById("message").style.color = 'rgb(210, 10, 10)'; // Will Set The Style Of Element With Id 'message' To 'color: rgb(0, 210, 0);'
        document.getElementById("message").style.display = 'unset'; // Will Set The Style Of Element With Id 'message' To 'display: unset;'
        
        users.database().ref('/').child(`${username}`).remove(); // Will Delete The Users Data From `users` Database
        rooms.database().ref('/').child(`${username}`).remove(); // Will Delete The Users Data From `rooms` Database
        chats.database().ref('/').child(`${username}`).remove(); // Will Delete The Users Data From `chats` Database
        
        document.getElementById("message").innerText = `Deleting Your Account Please Wait...`; // Will Set Inner Text Of Element With Id 'message' To `Deleting Your Account Please Wait...` (Note: This Line Of Code Is Above The Code Which Delete The Account Of The Logged In User And The Above Lines Will Execute First But It Takes Some Time To Execute So Tlii That The User Will Be Seeing `Deleting Your Account Please Wait...` And The Reason Why This Is Added Below The Lines Of Code That Will Delete The Account Of The Logged In User Is JavaScript Runs On A Non-Blocking IO Model)
        document.getElementById("message").style.color = 'rgb(0, 210, 0)'; // Will Set The Style Of Element With Id 'message' To 'color: rgb(0, 210, 0);'

        localStorage.removeItem("username"); // Will Remove Item `username` From Local Storage
        localStorage.removeItem("name"); // Will Remove Item `name` From Local Storage
        localStorage.removeItem('roomId'); // Will Remove Item `roomId` From Local Storage
        localStorage.removeItem('Location'); // Will Remove Item `Location` From Local Storage

        setTimeout(() => // Will Wait For 5000 Microseconds Before Execution
            {
                redirect('!=', username, 'singup'); // Function Redirect Call
            }, 
        5000);
    }
    else // If Variable 'checkBoxData' Value Is Equal To 'false'
    {
        document.getElementById("message").innerText = `Check The Check Box Please And Try Again`; // Will Set Inner Text Of Element With Id 'message' To `Check The Check Box Please And Try Again`
        document.getElementById("message").style.color = 'rgb(210, 10, 10)'; // Will Set The Style Of Element With Id 'message' To 'color: rgb(210, 10, 10)'
        document.getElementById("message").style.display = 'unset'; // Will Set The Style Of Element With Id 'message' To 'display: unset;'
    }
}