redirect('!=', username, '');
document.getElementById("logout").style.display = 'none';
document.getElementById("redirectToDeleteYourAccountPage").style.display = 'none';
document.getElementById("welcome").innerText = 'Login';
document.getElementById("welcome").style.display = 'unset';

function login()
{
    email = value_('email');
    password = value_('password');
    email = convertToFirebaseAcceptableData('email');

    var getData =  getFirebaseData(`/users/${email}`);
    var getKeysArray = Object.keys(getData).map((key) => [Number(key), getData[key]]);

    data = getKeysArray[2];
    getPassword = data[1];

    if (password == getPassword)
    {
        username = email;

        data = getKeysArray[1];
        getName = data[1];

        name = getName;

        manageLocalStorageData("set", "username", username);
        manageLocalStorageData("set", "name", name);

        manageLabel('message', `Welcome! ${name}`, 'rgb(0, 210, 0)', 'unset');
        manageLabel('welcome', `Welcome! ${name}`, '', 'unset');

        redirect('!=', username, '');
    }
    else
    {
        manageLabel('message', `Incorrect Password! Please Try Again`, 'rgb(210, 10, 10)', 'unset');
    }
}