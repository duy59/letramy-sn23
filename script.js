// Birthday Celebration JavaScript

// Image slideshow functionality with reduced frequency
function setupImageSlideshow() {
    const images = document.querySelectorAll('.photo-transition img');
    let currentIndex = 0;

    // Only run if there are at least 3 images
    if (images.length >= 3) {
        setInterval(() => {
            // Reset opacity for all images
            images.forEach(img => {
                img.style.opacity = '1';
            });

            // Fade the current image
            images[currentIndex].style.opacity = '0.7';
            images[currentIndex].style.transform = 'scale(1.05)';
            
            // Reset after a second
            setTimeout(() => {
                images[currentIndex].style.opacity = '1';
                images[currentIndex].style.transform = 'scale(1)';
                currentIndex = (currentIndex + 1) % images.length;
            }, 1000);
        }, 5000); // Reduced frequency from 3s to 5s
    }
}

// Generate birthday messages
const birthdayWishes = [
    "Wishing you a year filled with growth and success in your medical studies!",
    "May your compassion and dedication to medicine inspire everyone around you.",
    "On your special day, we celebrate your determination to heal and help others.",
    "Your healing hands will touch many lives. Happy 23rd Birthday!",
    "Chúc bạn có một năm tràn đầy niềm vui và thành công trong học tập!",
    "Sinh nhật vui vẻ! Mong rằng bạn sẽ là một bác sĩ tuyệt vời trong tương lai!"
];

function addRandomWishes() {
    const wishesContainer = document.querySelector('.space-y-8');
    if (wishesContainer) {
        // Add 2 random wishes
        for (let i = 0; i < 2; i++) {
            const randomIndex = Math.floor(Math.random() * birthdayWishes.length);
            const newWish = document.createElement('div');
            newWish.className = 'p-5 bg-pink-50 rounded-lg border-l-4 border-pink-500 slide-in-left';
            newWish.style.animationDelay = `${i * 0.5}s`;
            
            const wishText = document.createElement('p');
            wishText.className = 'text-lg text-gray-700';
            wishText.textContent = birthdayWishes[randomIndex];
            
            newWish.appendChild(wishText);
            wishesContainer.appendChild(newWish);
        }
    }
}

// Interactive elements with fewer balloons
function setupInteractiveElements() {
    // Add balloon animation - reduced from 5 to 3 balloons
    const mainContainer = document.querySelector('main');
    
    for (let i = 0; i < 3; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'absolute';
        balloon.style.bottom = '-50px';
        balloon.style.left = `${Math.random() * 90 + 5}vw`;
        balloon.style.zIndex = '50';
        balloon.style.opacity = '0.7';
        balloon.style.transition = 'all 30s ease-in-out';
        balloon.style.transform = 'scale(0.5)';
        
        // Create balloon shape
        const balloonInner = document.createElement('div');
        balloonInner.style.width = '40px';
        balloonInner.style.height = '50px';
        balloonInner.style.borderRadius = '50%';
        balloonInner.style.background = ['#FFC0CB', '#FFB6C1', '#FF69B4'][i % 3];
        balloonInner.style.position = 'relative';
        
        // Create balloon string
        const string = document.createElement('div');
        string.style.height = '60px';
        string.style.width = '1px';
        string.style.background = '#444';
        string.style.margin = '0 auto';
        
        balloon.appendChild(balloonInner);
        balloon.appendChild(string);
        mainContainer.appendChild(balloon);
        
        // Animate the balloon
        setTimeout(() => {
            balloon.style.bottom = '110vh';
            balloon.style.transform = 'scale(1) rotate(' + (Math.random() * 40 - 20) + 'deg)';
        }, i * 3000 + 1000); // Spread out animation timing
    }
}

// Add a typewriter effect to a message
function typewriterEffect() {
    const targetElement = document.querySelector('.gradient-text');
    if (targetElement) {
        const text = targetElement.textContent;
        targetElement.textContent = '';
        
        let i = 0;
        const speed = 100; // typing speed
        
        function type() {
            if (i < text.length) {
                targetElement.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        // Start typing after a delay
        setTimeout(type, 1500);
    }
}

// Initialize age counter - simplified
function initializeAgeCounter() {
    // Simplified counter that doesn't animate every number
    const ageElement = document.createElement('div');
    ageElement.className = 'fixed bottom-5 right-5 bg-pink-500 text-white text-3xl font-bold p-4 rounded-full z-50 shadow-lg';
    ageElement.style.opacity = '0';
    ageElement.style.transition = 'all 0.5s ease';
    ageElement.textContent = '23 ❤️'; // Set final value immediately
    document.body.appendChild(ageElement);
    
    setTimeout(() => {
        ageElement.style.opacity = '1';
        ageElement.classList.add('animate__animated', 'animate__heartBeat');
        
        setTimeout(() => {
            ageElement.classList.remove('animate__animated', 'animate__heartBeat');
            
            // Remove after 5 seconds
            setTimeout(() => {
                ageElement.style.opacity = '0';
                setTimeout(() => {
                    ageElement.remove();
                }, 500);
            }, 5000);
        }, 1000);
    }, 3000);
}

// Initialize all features when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Delay some functions for better visual effect
    setTimeout(setupImageSlideshow, 1000);
    setTimeout(addRandomWishes, 2000);
    setTimeout(setupInteractiveElements, 3000);
    setTimeout(typewriterEffect, 1000);
    setTimeout(initializeAgeCounter, 4000);
    
    // Add click event to the main image for a surprise
    const mainImage = document.querySelector('.floating img');
    if (mainImage) {
        mainImage.addEventListener('click', function() {
            this.classList.add('animate__animated', 'animate__heartBeat');
            
            // Play a birthday tune
            const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-happy-birthday-flute-melody-3108.mp3');
            audio.volume = 0.3;
            audio.play().catch(e => console.log('Audio playback prevented: ', e));
            
            // Remove animation class after it completes
            setTimeout(() => {
                this.classList.remove('animate__animated', 'animate__heartBeat');
            }, 1000);
        });
    }
});

// Instead of continuous heart snowfall, create a one-time heart burst effect
function createOptimizedHeartEffect() {
    const heartsContainer = document.createElement('div');
    heartsContainer.style.position = 'fixed';
    heartsContainer.style.top = '0';
    heartsContainer.style.left = '0';
    heartsContainer.style.width = '100%';
    heartsContainer.style.height = '100%';
    heartsContainer.style.pointerEvents = 'none';
    heartsContainer.style.zIndex = '90';
    document.body.appendChild(heartsContainer);
    
    const heartColors = ['#FF9999', '#FF5C8D', '#FF477E', '#FF85A1', '#FFC0CB'];
    const heartCharacters = ['❤', '♥', '💕', '💖', '💗'];
    
    // Create hearts once, not continuously
    for (let i = 0; i < 30; i++) { // Reduced from 100+ to just 30 hearts
        const heart = document.createElement('div');
        heart.style.position = 'absolute';
        heart.style.fontSize = `${Math.random() * 15 + 10}px`;
        heart.style.color = heartColors[Math.floor(Math.random() * heartColors.length)];
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = '-20px';
        heart.style.opacity = Math.random() * 0.7 + 0.3;
        heart.innerText = heartCharacters[Math.floor(Math.random() * heartCharacters.length)];
        heart.style.textShadow = '0 0 3px rgba(255,255,255,0.5)';
        
        heartsContainer.appendChild(heart);
        
        // Animate each heart once
        const animation = heart.animate(
            [
                { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                { transform: `translateY(100vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ],
            {
                duration: Math.random() * 3000 + 3000, // Shorter duration
                easing: 'cubic-bezier(0.37, 0, 0.63, 1)',
                fill: 'forwards' // Keep the final state
            }
        );
        
        // Remove the heart when animation completes
        animation.onfinish = () => {
            heart.remove();
        };
    }
    
    // Remove the entire container after all animations are likely done
    setTimeout(() => {
        heartsContainer.remove();
    }, 8000);
}

// Optimize confetti function to be called from the main HTML file
window.createOptimizedConfetti = function() {
    const confettiContainer = document.getElementById('confetti-container');
    if (!confettiContainer) return;
    
    // Clear any existing confetti
    confettiContainer.innerHTML = '';
    
    const colors = ['#FFC0CB', '#FFB6C1', '#FF69B4', '#FF1493', '#DB7093'];
    
    // Create fewer confetti pieces
    for (let i = 0; i < 50; i++) { // Reduced from 100 to 50
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = Math.random() * 8 + 5 + 'px';
        confetti.style.height = Math.random() * 8 + 5 + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = -20 + 'px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.opacity = Math.random() + 0.5;
        
        confettiContainer.appendChild(confetti);
        
        // Single animation that doesn't repeat
        const animation = confetti.animate(
            [
                { transform: 'translate3d(0, 0, 0) rotate(0deg)', opacity: 1 },
                { transform: `translate3d(${Math.random() * 100 - 50}px, 100vh, 0) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ],
            {
                duration: Math.random() * 2000 + 2000, // Shorter duration
                easing: 'cubic-bezier(0.1, 0.9, 0.2, 1)',
                fill: 'forwards'
            }
        );
        
        animation.onfinish = () => {
            confetti.remove();
        };
    }
    
    // Clean up container after all animations complete
    setTimeout(() => {
        confettiContainer.innerHTML = '';
    }, 5000);
};

// Create heart effect once instead of continuous snowfall
setTimeout(createOptimizedHeartEffect, 5000); 