var firebaseConfig = { apiKey: "AIzaSyCX072qE8eRCe5UMiSckPFud_qcve1lMV0", authDomain: "kwitter-new-722f5.firebaseapp.com", databaseURL: "https://kwitter-new-722f5-default-rtdb.firebaseio.com", projectId: "kwitter-new-722f5", storageBucket: "kwitter-new-722f5.appspot.com", messagingSenderId: "838862668654", appId: "1:838862668654:web:d2c3dcf2732363b7e9f77f", measurementId: "G-9M42HR6JT2" }; // Initialize Firebase
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   var username=localStorage.getItem("name");
   var room_name=localStorage.getItem("roonm");
   function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
a_name= message_data["name"];
a_message= message_data["msg"];
a_like= message_data["likes"];
newt="<h4>"+a_name+"<img class='user_tick' src='tick.png'></h4>";
mesgt="<h4 class='message_h4'>"+a_message+"</h4>";
likebut="<button class='btn btn-info' id="+firebase_message_id+" value="+a_like+"onclick='updatelike(this.id)'>";
spantag="<span class='glyphicon glyphicon-thumbs-up'>likes:"+a_like+"</span></button><hr>";
row=newt+mesgt+likebut+spantag;
document.getElementById("output")+=row;
//End code
      } });  }); }
getData();

function klick(){
      var bolt=document.getElementById("kol").value;
      firebase.database().ref(room_name).push({
            name:jake,
            likes:0,
            msg:bolt
      });
      document.getElementById("kol").value="";
}
function updatelike(message_id){
      button_id=message_id;
      nog=document.getElementById("button_id").value;
      update=Number(nog)+1;
      firebase.database().ref(room_name).child(message_id).update({
       likes:update
      });
}