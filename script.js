// Form Submission Alert
document.getElementById('admissionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Page refresh hone se rokne ke liye
    
    // User ka naam get karna
    let studentName = document.getElementById('name').value;
    
    // Success Message
    alert("Shukriya " + studentName + "! Aapka admission form kamiyabi ke sath submit ho gaya hai. Hum jald aapse rabta karenge.");
    
    // Form ko reset/khali karne ke liye
    this.reset();
});
// Mobile Hamburger Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});