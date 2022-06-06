const firebaseConfig = {
  apiKey: "AIzaSyDL2AB9mFwUV891AAmcMnMKL7zGX5zO27k",
  authDomain: "kwitter-47f1f.firebaseapp.com",
  databaseURL: "https://kwitter-47f1f-default-rtdb.firebaseio.com/",
  projectId: "kwitter-47f1f",
  storageBucket: "kwitter-47f1f.appspot.com",
  messagingSenderId: "507955591828",
  appId: "1:507955591828:web:aa159d38dd9a95db611281"
};


firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("userName");
document.getElementById("output").innerHTML = "";

function logout() {
  localStorage.removeItem("userName");
  window.location = "kwitter.html";
}
function addRoom() {
  roomName = document.getElementById("roomName").value;
  firebase.database().ref("/").child(roomName).update({ purpose: "adicionar nome de sala" });
  localStorage.setItem("roomName", roomName);
  // window.location = "kwitter_page.html";
}
//Início do código

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
    childKey = childSnapshot.key;
    roomName = childKey;
    row = "<div class='roomName' id=" + roomName + " onclick='redirectToRoomName(this.id)' >#" + roomName + "</div><hr>";
    document.getElementById("output").innerHTML += row;
      //Fim do código

    });
  });
};
function redirectToRoomName() {
  localStorage.setItem("roomName", roomName);
  window.location = "kwitter_page.html";
}
getData();