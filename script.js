document.addEventListener("DOMContentLoaded", function () {
    
    // Form Submission Alert (Sirf wahan chalega jahan admissionForm mojood hoga)
    const admissionForm = document.getElementById('admissionForm');
    if (admissionForm) {
        admissionForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Page refresh hone se rokne ke liye
            
            // User ka naam get karna
            let studentName = document.getElementById('name').value;
            
            // Success Message
            alert("Shukriya " + studentName + "! Aapka admission form kamiyabi ke sath submit ho gaya hai. Hum jald aapse rabta karenge.");
            
            // Form ko reset/khali karne ke liye
            this.reset();
        });
    }

    // Mobile Hamburger Menu Toggle & Animation
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
            mobileMenu.classList.toggle('active'); // Hamburger icon ko 'X' mein badalne ke liye
        });
    }

});