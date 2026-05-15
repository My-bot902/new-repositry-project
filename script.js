// 1. FAQ Accordion Functionality
// Hum saare FAQ items ko select kar rahe hain
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const box = item.querySelector('.faqbox');
    
    box.addEventListener('click', () => {
        // Agar pehle se koi dusra box khula hai to usay band kar do
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Jo box click hua hai usay toggle (open/close) karo
        item.classList.toggle('active');
    });
});

// 2. Hero Email Validation Functionality
const getStartedBtn = document.querySelector('.btn-red');
const emailInput = document.querySelector('.hero-buttons input');

getStartedBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Form ko refresh hone se rokne ke liye
    
    const emailValue = emailInput.value.trim();
    
    // Simple verification check
    if (emailValue === "") {
        alert("Please enter your email address to get started!");
    } else if (!emailValue.includes("@") || !emailValue.includes(".")) {
        alert("Please enter a valid email address!");
    } else {
        alert(`Welcome to CodeWithAzhan! A verification link has been sent to ${emailValue}`);
        emailInput.value = ""; // Input clear karne ke liye
    }
});
// 3. Scroll Animation Functionality (Intersection Observer)

// Un saare sections ko select kar rahe hain jinhein scroll par animate karna hai
const scrollSections = document.querySelectorAll('.first, .faq');

// Observer ki settings (options)
const observerOptions = {
    root: null, // Default browser viewport use hoga
    threshold: 0.15 // Jab section 15% screen par nazar aayega tab animation chalegi
};

// Ek naya observer bana rahe hain jo scroll ko monitor karega
const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Agar user scroll karke section tak pahuch gaya hai
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal'); // 'reveal' class lagao
            observer.unobserve(entry.target); // Ek dafa animation chalne ke baad track karna band kar do
        }
    });
}, observerOptions);

// Observer ko batana ke in saare sections par nazar rakhe
scrollSections.forEach(section => {
    scrollObserver.observe(section);
});
const words = ['Web Development.', 'UI/UX Design.', 'Sigma Coding.', 'Figma Layouts.'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const targetElement = document.getElementById("element");

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        targetElement.innerText = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        targetElement.innerText = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 1200; 
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; 
        typingSpeed = 400; 
    }

    setTimeout(typeEffect, typingSpeed);
}

// Script load hote hi 2000ms (2 seconds) ka wait karega aur fir function chalayeja
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 1000); 
});

