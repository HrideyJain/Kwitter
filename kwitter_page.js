//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCdzGSj-t3RGm_q7CbUE8e0c4xlkUUGWIA",
      authDomain: "kwitter-db-a6af6.firebaseapp.com",
      databaseURL: "https://kwitter-db-a6af6-default-rtdb.firebaseio.com",
      projectId: "kwitter-db-a6af6",
      storageBucket: "kwitter-db-a6af6.appspot.com",
      messagingSenderId: "416297446375",
      appId: "1:416297446375:web:c4401e2a647f25ef99eb42"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log("Room Name -"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;



//End code
      } });  }); }
getData();


function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
     name:user_name,
     message:msg,
     like:0
      });


}


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}