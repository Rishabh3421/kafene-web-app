$(document).ready(function(){
    var logOut = document.getElementById('logout');
    logOut.onclick = function(){
        alert("logout Successfully")
        localStorage.setItem('isLogedIn',false);
        localStorage.removeItem('userInfo');
    }
})