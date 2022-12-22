function addScript() // Function Add Script - To Add Script
{
    loadScript(`/chat/base/js/firebase.js`); // loadScript Call To Initialize - `/chat/base/js/firebase.js`
    if(Location == '/chat/') // If Variable Location Data Is Equal To '/chat/'
    {
        loadScript(`/chat/index/js/index.js`); // loadScript Call To Initialize - `/chat/index/js/index.js`
        document.getElementById('head').innerHTML += indexStylesheet; // Adding Inner HTML From Variable 'indexStylesheet' In Element With Id 'head'
    }
    else // Else
    {
        loadScript(`${Location}js/index.js`); // loadScript Call To Initialize - `${Location}js/index.js`
    }
}
addScript(); // Function Add Script Call

function welcome() // Function Welcome - To Welcome The User With Their Name
{
    document.getElementById("welcome").innerText = `Welocme! ${name}`; // Will Set Inner Text Of Element With Id 'welcome' To `Welcome ${name}`
    document.getElementById("welcome").style.display = 'unset'; // Will Set The Style Of Element With Id 'welcome' To 'display: none;'
}
welcome(); // Function Welcome Call

burger.addEventListener('click', () => // When Element 'burger' Clicked
{
    burger = document.querySelector('#burger'); // Getting Element With Id 'burger' And Storing In A Variable 'burger'
        navbar = document.querySelector('#navbar'); // Getting Element With Id 'navbar' And Storing In A Variable 'navbar'
        center = document.querySelector('#center'); // Getting Element With Id 'center' And Storing In A Variable 'center'
        right = document.querySelector('#right'); // Getting Element With Id 'right' And Storing In A Variable 'right'
        
        navbar.classList.toggle('navbarHeightResponsive'); // Will Toggle Class 'navbarHeightResponsive' In Element 'navbar'
        center.classList.toggle('opacity-0Responsive'); // Will Toggle Class 'opacity-0Responsive' In Element 'center'
        center.classList.toggle('display-noneResponsive'); // Will Toggle Class 'display-noneResponsive' In Element 'center'
        right.classList.toggle('opacity-0Responsive'); // Will Toggle Class 'opacity-0Responsive' In Element 'right'
        right.classList.toggle('display-noneResponsive'); // Will Toggle Class 'display-noneResponsive' In Element 'right'
    }
);

function logout() // Function Logout - To Logout The Users
{
    localStorage.removeItem("username"); // Removeing Item Form Local Storage `username`
    localStorage.removeItem("name"); // Removeing Item Form Local Storage `name`
    localStorage.removeItem("roomId"); // Removeing Item Form Local Storage `roomId`
    localStorage.removeItem("roomLocation"); // Removeing Item Form Local Storage `roomLocation`
    redirect('!=', username, 'login'); // Function Redirect Call
}