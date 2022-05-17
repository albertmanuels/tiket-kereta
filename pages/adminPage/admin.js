const navLink = document.querySelector('.nav-item a')
navLink.addEventListener('click', function() {
    if(navLink.classList === "active") {
        navLink.classList.remove("active")
    } else {
        navLink.classList.add("active")
    }

})