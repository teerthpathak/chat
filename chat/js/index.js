function getData(){document.getElementById("container").innerHTML="",chats.database().ref(`/${roomLocation}/${roomId}`).on("value",function(e){var t=e.val(),l=Object.keys(t).map(e=>[Number(e),t[e]]),a=Object.entries(t);for(let n=0;n<l.length;n++)chatId=(getChatId=a[n])[0],date=(main=(data=l[n])[1]).date,message=main.message,name=main.name,time=main.time,(sendersUsername=main.username)==username?document.getElementById("container").innerHTML+=chat.replaceAll("{align}","right").replaceAll("{message}",message).replaceAll("{date}",date).replaceAll("{time}",time).replaceAll("{chatId}",chatId).replaceAll("{name}",name).replaceAll("{username}",username):sendersUsername!=username?(document.getElementById("container").innerHTML+=chat.replaceAll("{align}","left").replaceAll("{message}",message).replaceAll("{date}",date).replaceAll("{time}",time).replaceAll("{chatId}",chatId).replaceAll("{name}",name).replaceAll("{username}",username),document.getElementById(`${chatId}_delete_message_button`).style.display="none"):doNoting()}),rooms.database().ref(`/${roomLocation}/${roomId}`).on("value",function(e){var t=e.val();document.querySelector("#change_name").value=t.name,document.querySelector("#room_name").innerText=t.name;var l=Object.entries(t.users),a=Object.keys(t).map(e=>[Number(e),t[e]]);for(let n=0;n<a.length-1;n++){var t=e.val();main=l[n],users.database().ref(`/${main[0]}`).on("value",function(e){var t=e.val();role=(getRole=(main=l[n])[1]).role.replaceAll("admin","Admin").replaceAll("regular","Regular"),name=t.name,email=t.email,document.getElementById("tbody").innerHTML+=user.replaceAll("{name}",name).replaceAll("{role}",role).replaceAll("{email}",email)})}"Admin"==(role=(getRole=(AllUsers=e.val().users)[username]).role.replaceAll("admin","Admin").replaceAll("regular","Regular"))&&roomLocation!=username?document.getElementById("delete_room").style.display="none":"Regular"==role&&roomLocation!=username?(document.getElementById("delete_room").style.display="none",document.getElementById("show_edit_group_name_settings").style.display="none",document.getElementById("show_add_user_settings").style.display="none"):"Admin"==role&&roomLocation==username?document.getElementById("exit_room").style.display="none":"Regular"==role&&roomLocation==username?(document.getElementById("exit_room").style.display="none",document.getElementById("show_edit_group_name_settings").style.display="none",document.getElementById("show_add_user_settings").style.display="none"):doNoting()})}function send(){message=document.getElementById("message_input").value,date=(getDate=new Date).getDate(),(chatId=username+(fullDate=date+"-"+(month=getDate.getMonth()+1)+"-"+(year=getDate.getFullYear()))+(time=getDate.toLocaleTimeString())).toString,chatId=chatId.replaceAll(" ","ṇ"),chats.database().ref(`/${roomLocation}/${roomId}`).child(chatId).update({date:fullDate,message:message,name:name,time:time,username:username}),getData(),message=document.getElementById("message_input").value=""}function show_edit_group_name_settings(){document.getElementById("edit_group_name").style.display="unset",document.getElementById("show_edit_group_name_settings").style.display="none"}function save_edited_room_name(){var e=document.getElementById("change_name").value;rooms.database().ref(`/${roomLocation}`).child(`/${roomId}`).update({name:e}),e="",document.getElementById("show_edit_group_name_settings").style.display="unset",document.getElementById("edit_group_name").style.display="none"}function show_add_user_settings(){document.getElementById("add_user").style.display="unset",document.getElementById("show_add_user_settings").style.display="none"}function add_user(){var e=document.getElementsByName("role");for(console.log(e),i=0;i<e.length;i++)e[i].checked&&(role=e[i].value,new_user=(new_user=document.getElementById("add_user_input").value).replaceAll(".","ā").replaceAll("#","ḥ").replaceAll("$","ḍ").replaceAll("[","ś").replaceAll("]","ē").replaceAll(" ","\xe6"),rooms.database().ref(`${roomLocation}/${roomId}/users`).child(`${new_user}`).update({role:role}),rooms.database().ref(`/${new_user}`).child(`${roomId}`).update({location:roomLocation}));getData(),document.getElementById("show_add_user_settings").style.display="unset",document.getElementById("add_user").style.display="none"}function exit_room(){rooms.database().ref(`/${roomLocation}/${roomId}/users`).child(`${username}`).remove(),rooms.database().ref(`/${username}`).child(`${roomId}`).remove()}function delete_room(){let e=localStorage.getItem("username");rooms.database().ref(`/${roomLocation}/${roomId}/users`).on("value",function(t){var l=t.val(),a=Object.keys(l).map(e=>[Number(e),l[e]]),n=Object.entries(l);for(let r=0;r<a.length;r++)e=(getUsername=n[0])[0],rooms.database().ref(`/${e}`).child(`${roomId}`).remove()}),rooms.database().ref(`/${roomLocation}/${roomId}/users`).child(`${e}`).remove(),getData()}function delete_message(e){chats.database().ref(`/${roomLocation}/${roomId}`).child(`${e}`).remove(),getData()}redirect("==",roomId,""),setTimeout(()=>{var e;if("/chat/"==localStorage.getItem("page")){var t=document.getElementById("header"),l=document.getElementById("roomUtility"),a=document.getElementById("users"),n=document.getElementById("footer");t.remove(),l.remove(),a.remove(),n.remove()}else doNoting()},3e3),getData();