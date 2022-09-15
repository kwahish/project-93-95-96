
//ADD YOUR FIREBASE LINKS




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

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
