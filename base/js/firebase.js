const firebaseConfig = {
    apiKey: "AIzaSyAgzTdgirhuGqFt_MimbZ3r135ZAgLiD8c",
    authDomain: "chat-de180.firebaseapp.com",
    databaseURL: "https://chat-de180-default-rtdb.firebaseio.com",
    projectId: "chat-de180",
    storageBucket: "chat-de180.appspot.com",
    messagingSenderId: "610319819382",
    appId: "1:610319819382:web:89b6e5f9646614f5f7b557"
};

firebase.initializeApp(firebaseConfig);

function getFirebaseData(dataLocation)
{
    firebase.database().ref(dataLocation).on("value", function (snapshot){
        data = snapshot.val();
    });
    return data;
}
getFirebaseData('/Test');

function setFirebaseData(database, parent, childern, data)
{
    firebase.database().ref(`/${database}/${parent}`).child(`${childern}`).update(data);
}

function removeFirebaseData(database, parent, childern)
{
    firebase.database().ref(`/${database}/${parent}`).child(`${childern}`).remove();
}

function convertToFirebaseAcceptableData(data)
{
    return data.replaceAll(".", "ā")
               .replaceAll("#", "ḥ")
               .replaceAll("$", "ḍ")
               .replaceAll("[", "ś")
               .replaceAll("]", "ē")
               .replaceAll(" ", "æ");
}