redirect('==', username, 'login');

function deleteMyAccount()
{
    var getCheckBoxData = document.querySelector('#condition');
    checkBoxData = getCheckBoxData.checked;

    if(checkBoxData == true)
    {
        document.getElementById("message").innerText = `Error While Deleting Your Account`;
        document.getElementById("message").style.color = 'rgb(210, 10, 10)';
        document.getElementById("message").style.display = 'unset';
        
        users.database().ref('/').child(`${username}`).remove();
        rooms.database().ref('/').child(`${username}`).remove();
        chats.database().ref('/').child(`${username}`).remove();
        
        document.getElementById("message").innerText = `Deleting Your Account Please Wait...`;
        document.getElementById("message").style.color = 'rgb(0, 210, 0)';

        localStorage.removeItem("username");
        localStorage.removeItem("name");
        localStorage.removeItem('roomId');
        localStorage.removeItem('Location');

        setTimeout(() =>
            {
                redirect('!=', username, 'singup');
            }, 
        5000);
    }
    else
    {
        document.getElementById("message").innerText = `Check The Check Box Please And Try Again`;
        document.getElementById("message").style.color = 'rgb(210, 10, 10)';
        document.getElementById("message").style.display = 'unset';
    }
}