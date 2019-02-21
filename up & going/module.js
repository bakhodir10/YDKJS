
"use strict"
// an example of module

function User() {
    
    let username;
    let password;

    function doLogin(user, pwd){
        username = user;
        password = pwd;
    }

    const publicAPI = {
        login: doLogin
    };

    return publicAPI;
}

let bakhodir = User();
bakhodir.login('Bakhodir', '10');
