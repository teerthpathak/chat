redirect('==', username, 'login');

function deleteMyAccount()
{
    var getCheckBoxData = document.querySelector('#condition');
    checkBoxData = getCheckBoxData.checked;

    if(checkBoxData == true)
    {
        removeFirebaseData(`users`, '', `${username}`);
        removeFirebaseData(`rooms`, '', `${username}`);
        removeFirebaseData(`chats`, '', `${username}`);

        manageLabel('message', 'Deleting Your Account Please Wait...', 'rgb(0, 210, 0)', 'unset');

        logout();

        setTimeout(() => {
            redirect('!=', username, 'singup');
        }, 5000);
    }
    else
    {
        manageLabel('message', 'Check The Check Box Please And Try Again', 'rgb(210, 10, 10)', 'unset');
    }
}