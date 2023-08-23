
checkLogin();

function checkLogin(){
    let currentLocation = window.location.pathname;
    if(currentLocation != '/view/login.html' && currentLocation != '/view/signup.html' && currentLocation != "/index.html"){
        // console.log(currentLocation);
        if(localStorage.getItem('login_status') != 'true'){
            window.location.replace("login.html");  
        }
    }else if(currentLocation == '/view/login.html' || currentLocation == '/view/signup.html') {
        if(localStorage.getItem('login_status') == 'true') {
            window.location.replace('dashboard.html');
        }
    }
        
}


