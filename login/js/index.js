function redirect(){let e=localStorage.getItem("name");localStorage.getItem("username"),void 0!=e?window.location="/chat/":(document.getElementById("logout").style.display="none",document.getElementById("redirectToDeleteYourAccountPage").style.display="none",document.getElementById("welcome").innerText="Login",document.getElementById("welcome").style.display="unset")}function login(){email=document.getElementById("email").value,password=document.getElementById("password").value,email=email.replaceAll(".","ā").replaceAll("#","ḥ").replaceAll("$","ḍ").replaceAll("[","ś").replaceAll("]","ē").replaceAll(" ","\xe6"),users.database().ref(`/${email}`).on("value",function(e){var t=e.val(),l=Object.keys(t).map(e=>[Number(e),t[e]]);password==(getPassword=(data=l[2])[1])?(username=email,name=getName=(data=l[1])[1],localStorage.setItem("username",username),localStorage.setItem("name",name),document.getElementById("message").innerText=`Welcome! ${name}`,document.getElementById("message").style.color="rgb(0, 210, 0)",document.getElementById("message").style.display="unset",document.getElementById("welcome").innerText=`Welcome! ${name}`,document.getElementById("welcome").style.display="unset",window.location="/chat/"):(document.getElementById("message").innerText="Incorrect Password! Please Try Again",document.getElementById("message").style.color="rgb(210, 10, 10)",document.getElementById("message").style.display="unset")})}redirect();