import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCSPCiqjEE2EMZdm3CQ1KPNNFa4ZOn4yTE",
        authDomain: "todolist-6a40b.firebaseapp.com",
        databaseURL: "https://todolist-6a40b.firebaseio.com",
        projectId: "todolist-6a40b",
        storageBucket: "todolist-6a40b.appspot.com",
        messagingSenderId: "254129149445",
        appId: "1:254129149445:web:213631dafe639e194bee6c",
        measurementId: "G-TZ9G8BFECK"
});

const db = firebaseApp.firestore();

export default db;
