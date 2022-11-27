loadScript(`/chat/base/js/firebase.js`); // loadScript Call To Initialize - `/chat/base/js/firebase.js`
loadScript(`${Location}js/index.js`); // loadScript Call To Initialize - `${Location}js/index.js`

function logout() // Function Logout - To Logout The Users
{
    localStorage.removeItem("username"); // Removeing Item Form Local Storage `username`
    localStorage.removeItem("name"); // Removeing Item Form Local Storage `name`
    window.location = "/chat/login/"; // Will Navigating To '/chat/login/'
}

function welcome() // Function Welcome - To Welcome The User With Their Name
{
    let name = localStorage.getItem('name'); // Getting Item From Local Storage And Storing In Variable - name
    let username = localStorage.getItem('username'); // Getting Item From Local Storage And Storing In Variable - username
    if (name != undefined || null && username != undefined || null) // If 'name' And 'username' Not Equal To 'undefined' Or null
    {
        document.getElementById("welcome").innerText = `Welocme! ${name}`; // Will Set Inner Text Of Element With Id 'welcome' To `Welcome ${name}`
        document.getElementById("welcome").style.display = 'unset'; // Will Set The Style Of Element With Id 'welcome' To 'display: none;'
    }
}
welcome(); // Function Welcome Call

function redirectToDeleteYourAccountPage() // Function Redirect To Delete Your Account Page
{
    window.location = '/chat/deleteyouraccount/'; // Will Navigating To '/chat/deleteyouraccount/'
}

burger = document.querySelector('#burger'); // Getting Element With Id 'burger' And Storing In A Variable 'burger'
navbar = document.querySelector('#navbar'); // Getting Element With Id 'navbar' And Storing In A Variable 'navbar'
center = document.querySelector('#center'); // Getting Element With Id 'center' And Storing In A Variable 'center'
right = document.querySelector('#right'); // Getting Element With Id 'right' And Storing In A Variable 'right'

burger.addEventListener('click', () => // When Element 'burger' Clicked
{
    navbar.classList.toggle('navbarHeightResponsive'); // Will Toggle Class 'navbarHeightResponsive' In Element 'navbar'
    center.classList.toggle('opacity-0Responsive'); // Will Toggle Class 'opacity-0Responsive' In Element 'center'
    center.classList.toggle('display-noneResponsive'); // Will Toggle Class 'display-noneResponsive' In Element 'center'
    right.classList.toggle('opacity-0Responsive'); // Will Toggle Class 'opacity-0Responsive' In Element 'right'
    right.classList.toggle('display-noneResponsive'); // Will Toggle Class 'display-noneResponsive' In Element 'right'
});