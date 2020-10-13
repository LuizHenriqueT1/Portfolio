//menu change color with scroll
jQuery(function() {
    jQuery(window).scroll(function() {
        if(jQuery(this).scrollTop() > 180) {
            $("#menu").addClass("menu-color")
        } else {
            $("#menu").removeClass("menu-color")
        }
    })
})

//menu Burger
function menuBurger() {
    var burger = document.getElementById("menu");
    if (burger.className === "header-nav") {
        burger.className += "responsive"
    } else {
        burger.className = "header-nav"
    }
}
//fuction form - send email and notification
function send(e) {
    e.preventDefault();
        window.location.href = "mailton:luiz@luiz.com"
        $(".alert").show()
}