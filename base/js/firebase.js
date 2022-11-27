// Firebase Initialization:-
// Users
const users = firebase.initializeApp({
    apiKey: "AIzaSyCyuS3r2uKRNDRnTvVCVZrwm5I9gUg57Dg",
    authDomain: "chat-users-4ba65.firebaseapp.com",
    databaseURL: "https://chat-users-4ba65-default-rtdb.firebaseio.com",
    projectId: "chat-users-4ba65",
    storageBucket: "chat-users-4ba65.appspot.com",
    messagingSenderId: "241288644933",
    appId: "1:241288644933:web:9f9d29e3e927b9e96dd62c"
}, 'users');

// Rooms
const rooms = firebase.initializeApp({
    apiKey: "AIzaSyBxSPWcNfyHKrIjVbhXzPtIxTkoW3KUHD0",
    authDomain: "chat-rooms-9941a.firebaseapp.com",
    databaseURL: "https://chat-rooms-9941a-default-rtdb.firebaseio.com",
    projectId: "chat-rooms-9941a",
    storageBucket: "chat-rooms-9941a.appspot.com",
    messagingSenderId: "231257133086",
    appId: "1:231257133086:web:e4dc31183d8bdcada9de0f"
}, 'rooms');

// chats
const chats = firebase.initializeApp({
    apiKey: "AIzaSyCz19emivJ4hLDfFxAH36lhGQsp3X3CWWg",
    authDomain: "chat-chats-5b4b8.firebaseapp.com",
    databaseURL: "https://chat-chats-5b4b8-default-rtdb.firebaseio.com",
    projectId: "chat-chats-5b4b8",
    storageBucket: "chat-chats-5b4b8.appspot.com",
    messagingSenderId: "396720913414",
    appId: "1:396720913414:web:9f06a1268dca05497f1787"
}, 'chats');