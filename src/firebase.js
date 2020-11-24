import   firebase  from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyD-5XVeChvlEagR0M_GiWKBAAkI9pNys1o",
    authDomain: "react-crud-2ed1a.firebaseapp.com",
    databaseURL: "https://react-crud-2ed1a.firebaseio.com",
    projectId: "react-crud-2ed1a",
    storageBucket: "react-crud-2ed1a.appspot.com",
    messagingSenderId: "433664323062",
    appId: "1:433664323062:web:476b763f972f9539ca6bd7"
  };
  // Initialize Firebase
 var fireDb  =  firebase.initializeApp(firebaseConfig);
 
 export default   fireDb.database().ref();