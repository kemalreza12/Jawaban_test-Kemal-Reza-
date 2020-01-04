function emailValidity(username) {
    var regex = /(\d+)(\w+)/;
    return regex.test(username);
}
if(emailValidity("3dara@gmail.com")) {
    console.log("return true");
} else {
    console.log("return false");    
}

function passwordValidity(password) {
    var regex = /^([^]{1}\w{5}\d{2}[^]{1})$/i;
    return regex.test(password);
}
if(passwordValidity("#words99!")) {
    console.log("return true");
} else {
    console.log("return false");    
}
