var firebaseConfig = { apiKey: "AIzaSyCX072qE8eRCe5UMiSckPFud_qcve1lMV0", authDomain: "kwitter-new-722f5.firebaseapp.com", databaseURL: "https://kwitter-new-722f5-default-rtdb.firebaseio.com", projectId: "kwitter-new-722f5", storageBucket: "kwitter-new-722f5.appspot.com", messagingSenderId: "838862668654", appId: "1:838862668654:web:d2c3dcf2732363b7e9f77f", measurementId: "G-9M42HR6JT2" }; // Initialize Firebase
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   var username= localStorage.getItem("name");
   document.getElementById("Welcome").innerHTML="Welcome "+username;

   function woah(){
     room_name=document.getElementById("rn").value;
     localStorage.setItem("roonm", room_name);
        firebase.database().ref("/").child(room_name).update({
           purpose:"adding roomname"
        });
            window.location="index3.html";
        }
        function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        
        var row="<div class='container' id="+Room_names+"onclick='redirectToRoomname(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML += row;
        });});}
  getData();
  function gone(){
     window.location="index.html";
     localStorage.removeItem("name");
  }