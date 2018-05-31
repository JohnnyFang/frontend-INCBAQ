function loadNavbar() {
    $("#navigation-bar").load("navbar.html");
    $('#dynamic-menu').html('Work bitch!!!');
    console.log("Loaded navigation bar");
}
jQuery(document).ready(function() {
    loadNavbar();
    $(document ).ready(function() {
        console.log( "ready!" );
        // var elem = document.getElementById ("dynamic-menu2");
        var elem = document.getElementById ("dynamic-menu");
        console.log(elem)
    });
    if (window.sessionStorage.token){
        console.log("we've got a token ready to be used up!");

        var content = '<ul class="navbar-nav mr-auto mt-2 mt-md-0">\n' +
            '          <li class="nav-item active">\n' +
            '            <a class="nav-link " href="login.html">Iniciar Sesion <span class="sr-only">(current)</span></a>\n' +
            '          </li>\n' +
            '          <li class="nav-item active">\n' +
            '            <a class="nav-link" href="signup.html">Registrarme</a>\n' +
            '          </li>\n' +
            '        </ul>';

    }
    else{
        var html = '<ul class="navbar-nav mr-auto mt-2 mt-md-0">\n' +
            '          <li class="nav-item active">\n' +
            '            <a class="nav-link " href="login.html">Iniciar Sesion <span class="sr-only">(current)</span></a>\n' +
            '          </li>\n' +
            '          <li class="nav-item active">\n' +
            '            <a class="nav-link" href="signup.html">Registrarme</a>\n' +
            '          </li>\n' +
            '        </ul>';
    }
});