//YOUR FIREBASE LINKS
const config = {
      apiKey: "AIzaSyDawgN1iIc2bIDijANO-hBRE9hE8ilRSVs",
      authDomain: "kwitter-2673a.firebaseapp.com",
      databaseURL: "https://kwitter-2673a-default-rtdb.firebaseio.com",
      projectId: "kwitter-2673a",
      storageBucket: "kwitter-2673a.appspot.com",
      messagingSenderId: "896453677751",
      appId: "1:896453677751:web:15dddf8e0ea607234b3332",
      measurementId: "G-SKNGMV19NB"
    };
    
    // Initialize Firebase
    firebase.initializeApp(config);




 user_name=localStorage.getItem("user_name");
 room_name=localStorage.getItem("room_name");

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value="";
}





function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
