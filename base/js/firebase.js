// Firebase Initialization:-
// Users
const users = firebase.initializeApp({
    apiKey: "AIzaSyAIv5rg8PqB7XlLX12VwpcKlXlAEr8L3dA",
    authDomain: "chat-users-89a9b.firebaseapp.com",
    databaseURL: "https://chat-users-89a9b-default-rtdb.firebaseio.com",
    projectId: "chat-users-89a9b",
    storageBucket: "chat-users-89a9b.appspot.com",
    messagingSenderId: "173284688536",
    appId: "1:173284688536:web:2762006732bd4aa56846ed"
}, 'users');

// Rooms
const rooms = firebase.initializeApp({
    apiKey: "AIzaSyCqZir6T-b885S2TL1MVIgxws-6MY9Mj7E",
    authDomain: "chat-rooms-ef2a2.firebaseapp.com",
    databaseURL: "https://chat-rooms-ef2a2-default-rtdb.firebaseio.com",
    projectId: "chat-rooms-ef2a2",
    storageBucket: "chat-rooms-ef2a2.appspot.com",
    messagingSenderId: "108891769355",
    appId: "1:108891769355:web:820ae430d4356575ef150e"
}, 'rooms');

// chats
const chats = firebase.initializeApp({
    apiKey: "AIzaSyA_rwBJFVgTuu31jshmytkl0WS2dSU4n0Q",
    authDomain: "chat-chats-de519.firebaseapp.com",
    databaseURL: "https://chat-chats-de519-default-rtdb.firebaseio.com",
    projectId: "chat-chats-de519",
    storageBucket: "chat-chats-de519.appspot.com",
    messagingSenderId: "867449822445",
    appId: "1:867449822445:web:8d092a102fc064a2f840e4"
}, 'chats');