// Place this script on every page except the homepage
if (!localStorage.getItem("loggedIn")) {
    alert("You must log in to access this page!");
    location.href = "index.html"; // Redirect to homepage
}

const navLinks = document.querySelectorAll('nav ul li a');
    
navLinks.forEach(link => {
    // Check if the link's href matches the current page's URL
    if (window.location.href.includes(link.href)) {
        link.classList.add('active'); // Add 'active' class if the link is on the current page
    }
});

$(document).ready(function(){
    $('.repeater').repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show:function(){
            $(this).slideDown();
        },
        hide: function(deleteElement){
            $(this).slideUp(deleteElement);
            setTimeout(() => {
                generateCV();
            }, 500);
        },
        isFirstItemUndeletable: true
    })
})

function logout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("rememberMe");
    alert("Career Services: You have been logged out!");
    document.getElementById("userIcon").classList.add("hidden");
    location.href = "index.html"; // Or login page
  }
  