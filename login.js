var LoginCredentials = [{
    username: "user1",
    password: "password"
}, {
    username: "user2",
    password: "password"

}];
let logindirect = () => {
    console.log("hello ");
    let uid = document.getElementById('exampleUid1').value;
    let pword = document.getElementById('exampleInputPassword1').value;
    let i, authorized = false;
    //document.getElementById('submitbtn').classList.remove('disabled');
    for (i = 0; i < LoginCredentials.length; i++) {
            if (LoginCredentials[i].username == uid && LoginCredentials[i].password == pword) {
                    authorized = true;
            }
    }
    console.log(authorized);
    if (authorized) {
            //  window.location.assign('home.html');
            top.location = "index2.html";
    }
    else {
            top.location = "login-denied.html";
    }
};