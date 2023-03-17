function addScript()
{
    loadScript(`/chat/base/js/firebase.js`);
    if(Location == '/chat/')
    {
        loadScript(`/chat/index/js/index.js`);
        document.getElementById('stylesheet').href = "/chat/index/css/index.css";
    }
    else
    {
        loadScript(`${Location}js/index.js`);
        document.getElementById('stylesheet').href = `${Location}css/index.css`;
        localStorage.setItem("page", Location);
    }
}
addScript();

function welcome()
{
    document.getElementById("welcome").innerText = `Welocme! ${name}`;`Welcome ${name}`
    document.getElementById("welcome").style.display = 'unset';
}
welcome();

burger.addEventListener('click', () =>
{
    burger = document.querySelector('#burger');
        navbar = document.querySelector('#navbar');
        center = document.querySelector('#center');
        right = document.querySelector('#right');
        
        navbar.classList.toggle('navbarHeightResponsive');
        center.classList.toggle('opacity-0Responsive');
        center.classList.toggle('display-noneResponsive');
        right.classList.toggle('opacity-0Responsive');
        right.classList.toggle('display-noneResponsive');
    }
);

function logout()
{
    localStorage.removeItem("username");
    localStorage.removeItem("name");
    localStorage.removeItem("roomId");
    localStorage.removeItem("roomLocation");
    redirect('!=', username, 'login');
}