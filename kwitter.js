const firebaseConfig = {
  apiKey: "AIzaSyDL2AB9mFwUV891AAmcMnMKL7zGX5zO27k",
  authDomain: "kwitter-47f1f.firebaseapp.com",
  databaseURL: "https://kwitter-47f1f-default-rtdb.firebaseio.com/",
  projectId: "kwitter-47f1f",
  storageBucket: "kwitter-47f1f.appspot.com",
  messagingSenderId: "507955591828",
  appId: "1:507955591828:web:aa159d38dd9a95db611281"
};


function addUser() {

    userName = document.getElementById("userName").value;
  
    localStorage.setItem("userName", userName);
    
      window.location = "kwitter_room.html";
  }
 