redirect('!=', username, '');
document.getElementById("logout").style.display = 'none';
document.getElementById("redirectToDeleteYourAccountPage").style.display = 'none';
document.getElementById("welcome").innerText = 'Login';
document.getElementById("welcome").style.display = 'unset';

function login()
{
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    email = email
        .replaceAll(".", "ā")
        .replaceAll("#", "ḥ")
        .replaceAll("$", "ḍ")
        .replaceAll("[", "ś")
        .replaceAll("]", "ē")
        .replaceAll(" ", "æ");

    users.database().ref(`/${email}`).on("value", function (snapshot)
    {
        var getData =  snapshot.val();
        var getKeysArray = Object.keys(getData).map((key) => [Number(key), getData[key]]);
        data = getKeysArray[2];
        getPassword = data[1];

        if (password == getPassword)
        {
            username = email;

            data = getKeysArray[1];
            getName = data[1];
            name = getName;

            localStorage.setItem("username", username);
            localStorage.setItem("name", name);

            document.getElementById("message").innerText = `Welcome! ${name}`;
            document.getElementById("message").style.color = 'rgb(0, 210, 0)';
            document.getElementById("message").style.display = 'unset';

            document.getElementById("welcome").innerText = `Welcome! ${name}`;
            document.getElementById("welcome").style.display = 'unset';

            redirect('!=', username, '');
            
        }
        else
        {
            document.getElementById("message").innerText = `Incorrect Password! Please Try Again`;
            document.getElementById("message").style.color = 'rgb(210, 10, 10)';
            document.getElementById("message").style.display = 'unset';
        }
    });
}