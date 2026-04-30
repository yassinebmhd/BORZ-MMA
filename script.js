// Tailwind Configuration
tailwind.config = {
  theme: {
    extend: {
      colors: {
        green: { DEFAULT: '#2D7A3A', light: '#3FA34D', dark: '#1F5C2A', muted: '#2D7A3A22' },
        charcoal: '#0E0E0E',
        offwhite: '#F8F6F1',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Outfit', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      }
    }
  }
};

// Navbar scroll effect - REMOVED since nav is no longer fixed
// const navbar = document.getElementById('navbar');
// ...

// Burger Menu Logic
const burgerBtn = document.getElementById('burger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const burgerIcon = document.getElementById('burger-icon');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (burgerBtn && mobileMenu && burgerIcon) {
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      // Show menu
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('flex');
      // Small delay to trigger transition
      setTimeout(() => mobileMenu.classList.remove('opacity-0'), 10);
      // Change to X icon
      burgerIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
      // Block scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Hide menu
      mobileMenu.classList.add('opacity-0');
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
      }, 300);
      // Change back to burger icon
      burgerIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
      // Restore scroll
      document.body.style.overflow = 'auto';
    }
  }

  burgerBtn.addEventListener('click', toggleMenu);
  
  // Close menu when a link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isMenuOpen) toggleMenu();
    });
  });
}

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
if (reveals.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));
}