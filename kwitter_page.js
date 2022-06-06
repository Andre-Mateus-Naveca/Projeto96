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
userName = localStorage.getItem("userName");
roomName = localStorage.getItem("roomName");
function send() {
  msg = document.getElementById("text_input").value;
  firebase.database().ref(roomName).push({
    name: userName,
    message: msg,
    like: 0
  });

  document.getElementById("msg").value = "";
}
function logout() {
  localStorage.removeItem("userName");
  window.location = "kwitter.html";
}
function getData() {
  firebase.database().ref("/" + roomName).on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
        firebaseMessageId = childKey;
        messageData = childData;
        //Início do código
        console.log(firebaseMessageId);
        console.log(messageData);
        name = messageData['name'];
        message = messageData['message'];
        like = messageData['like'];
        nameWithTag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
        messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
        like_button = "<button class='btn btn-warning' id=" + firebaseMessageId + " value=" + like + " onclick='updateLike(this.id)'>";
        spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";

        row = nameWithTag + messageWithTag + like_button + spanWithTag;
        document.getElementById("output").innerHTML += row;
        //Fim do código
      }
    });
  });
}
function updateLike(messageId)
{
 console.log("botão de like pressionado - " + messageId);
   buttonId = messageId;
   likes = document.getElementById(buttonId).value;
   updatedLikes = Number(likes) + 1;
   console.log(updatedLikes);

   firebase.database().ref(roomName).child(messageId).update({
       like : updatedLikes  
    });

}
getData();