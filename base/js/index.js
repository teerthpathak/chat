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
    }
}
addScript();

manageLabel('welcome', `Welocme! ${name}`, '', 'unset');

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
    manageLocalStorageData('remove', 'username');
    manageLocalStorageData('remove', 'name');
    manageLocalStorageData('remove', 'roomId');
    manageLocalStorageData('remove', 'roomLocation');
    redirect('!=', username, 'login');
}