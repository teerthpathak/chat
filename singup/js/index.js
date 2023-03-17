redirect('!=', username, '');
document.getElementById("logout").style.display = 'none';
document.getElementById("redirectToDeleteYourAccountPage").style.display = 'none';
document.getElementById("welcome").innerText = 'Singup';
document.getElementById("welcome").style.display = 'unset';

function singup()
{
    email = document.getElementById("email").value;
    name = document.getElementById("name").value;
    password = document.getElementById("password").value;

    email.tostring;
    name.tostring;
    password.tostring;

    username = email
        .replaceAll(".", "ā")
        .replaceAll("#", "ḥ")
        .replaceAll("$", "ḍ")
        .replaceAll("[", "ś")
        .replaceAll("]", "ē")
        .replaceAll(" ", "æ");

    document.getElementById("message").innerText = 'Error While Creating Your Account';
    document.getElementById("message").style.color = 'rgb(210, 10, 10)';
    document.getElementById("message").style.display = 'unset';

    users.database().ref("/").child(`${username}`).update(
        {
            email: email,
            name: name,
            password: password
        }
    );

    localStorage.setItem("username", username);
    localStorage.setItem("name", name);

    document.getElementById("message").innerText = 'Congratulations! You Account Had Been Created';
    document.getElementById("message").style.color = 'rgb(0, 210, 0)';
    document.getElementById("message").style.display = 'unset';

    setTimeout(() =>
        {
            redirect('!=', username, '');
        },
    1000);
}