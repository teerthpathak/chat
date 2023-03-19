redirect('!=', username, '');
document.getElementById("logout").style.display = 'none';
document.getElementById("redirectToDeleteYourAccountPage").style.display = 'none';
document.getElementById("welcome").innerText = 'Singup';
document.getElementById("welcome").style.display = 'unset';

function singup()
{
    email = value_('email').tostring;
    name = value_('name').tostring;
    password = value_('password').tostring;
    username = convertToFirebaseAcceptableData('email');

    manageLabel('message', 'Error While Creating Your Account', 'rgb(210, 10, 10)', 'unset');

    setFirebaseData('users', '', username, {
        email: email,
        name: name,
        password: password
    });

    manageLocalStorageData("set", "username", username);
    manageLocalStorageData("set", "name", name);
    
    manageLabel('message', 'Congratulations! You Account Had Been Created', 'rgb(0, 210, 0)', 'unset');

    setTimeout(() => {
        redirect('!=', username, '');
    }, 1000);
}