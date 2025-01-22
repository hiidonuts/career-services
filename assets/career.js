if (!localStorage.getItem("loggedIn")) {
  alert("You must log in to access this page!");
  location.href = "index.html"; 
}

const navLinks = document.querySelectorAll('nav ul li a');
    
navLinks.forEach(link => {
    // Check if the link's href matches the current page's URL
    if (window.location.href.includes(link.href)) {
        link.classList.add('active'); // Add 'active' class if the link is on the current page
    }
});

const containers = document.querySelectorAll(".scrollable-container");
const sectionTitle = document.getElementById("section-title");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

let currentIndex = 0;

function updateSection() {
  containers.forEach((container, index) => {
    container.style.display = index === currentIndex ? "block" : "none";
  });
  sectionTitle.textContent = containers[currentIndex].dataset.section;
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + containers.length) % containers.length;
  updateSection();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % containers.length;
  updateSection();
});

// Initialize
updateSection();

function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("rememberMe");
  alert("Career Services: You have been logged out!");
  document.getElementById("userIcon").classList.add("hidden");
  location.href = "index.html"; // Or login page
}
