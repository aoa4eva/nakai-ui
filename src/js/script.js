// Inspirational quotes
const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.", author: "Roy T. Bennett" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { text: "Your limitation—it's only your imagination.", author: "Unknown" },
    { text: "Great things never come from comfort zones.", author: "Unknown" }
];
// js/script.js

// Apply config values to DOM
(function applyTemplateConfig() {
  if (typeof NAKAI_TEMPLATE_CONFIG === "undefined") return;

  const cfg = NAKAI_TEMPLATE_CONFIG;

  // Title & brand
  const titleEl = document.getElementById("site-title");
  if (titleEl) titleEl.textContent = cfg.siteTitle || "Nakai Template";

  const brandEl = document.getElementById("brand-name");
  if (brandEl) brandEl.textContent = cfg.brandName || cfg.siteTitle || "Nakai Template";

  // Nav labels
  const navHome = document.getElementById("nav-home");
  if (navHome) navHome.textContent = cfg.nav?.homeLabel ?? "Home";

  const navSettings = document.getElementById("nav-settings");
  if (navSettings) navSettings.textContent = cfg.nav?.settingsLabel ?? "Settings";

  const navAbout = document.getElementById("nav-about");
  if (navAbout) navAbout.textContent = cfg.nav?.aboutLabel ?? "About";

  // Modal title & label
  const modalTitle = document.getElementById("settingsModalLabel");
  if (modalTitle) modalTitle.textContent = cfg.settingsModalTitle || "Settings";

  const userNameLabel = document.getElementById("user-name-label");
  if (userNameLabel) userNameLabel.textContent = cfg.userNameLabel || "Your Name";

  const userNameInput = document.getElementById("user-name-input");
  if (userNameInput && cfg.userNamePlaceholder) {
    userNameInput.placeholder = cfg.userNamePlaceholder;
  }

  // Footer
  const footerText = document.getElementById("footer-text");
  if (footerText && cfg.footerText) {
    footerText.innerHTML = cfg.footerText; // allow the ❤ span etc.
  }
})();

// Update time and date
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    const dateString = now.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    });

    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

// Get greeting based on time of day
function getGreeting() {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
        return "Good morning";
    } else if (hour >= 12 && hour < 18) {
        return "Good afternoon";
    } else if (hour >= 18 && hour < 22) {
        return "Good evening";
    } else {
        return "Good night";
    }
}

// Update greeting display
function updateGreeting() {
    const greeting = document.getElementById('greeting');
    const savedName = localStorage.getItem('userName');

    if (savedName) {
        greeting.textContent = `${getGreeting()}, ${savedName}.`;
    } else {
        greeting.textContent = `${getGreeting()}.`;
    }
}

// Initialize greeting
function initGreeting() {
    updateGreeting();
    // Update greeting every minute in case time period changes
    setInterval(updateGreeting, 60000);
}

// Display random quote
function displayQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').textContent = `"${randomQuote.text}"`;
    document.getElementById('quote-author').textContent = `- ${randomQuote.author}`;
}

// Initialize settings modal
function initSettings() {
    const settingsModal = document.getElementById('settingsModal');
    const userNameInput = document.getElementById('user-name-input');
    const saveButton = document.getElementById('save-settings');

    // Load current name when modal opens
    settingsModal.addEventListener('show.bs.modal', () => {
        const savedName = localStorage.getItem('userName');
        if (savedName) {
            userNameInput.value = savedName;
        } else {
            userNameInput.value = '';
        }
    });

    // Save settings
    saveButton.addEventListener('click', () => {
        const name = userNameInput.value.trim();

        if (name !== '') {
            localStorage.setItem('userName', name);
            updateGreeting();
        } else {
            localStorage.removeItem('userName');
            updateGreeting();
        }

        // Close modal
        const modal = bootstrap.Modal.getInstance(settingsModal);
        modal.hide();
    });

    // Save on Enter key
    userNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            saveButton.click();
        }
    });
}

// Initialize navbar
function initNavbar() {
    const navbar = document.getElementById('main-navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.getElementById('navbarNav');

    // Handle navbar toggler for mobile
    if (navbarToggler) {
        navbarToggler.addEventListener('click', () => {
            // Toggle the navbar-expanded class when hamburger is clicked
            if (navbarCollapse.classList.contains('show') || navbarCollapse.classList.contains('collapsing')) {
                navbar.classList.remove('navbar-expanded');
            } else {
                navbar.classList.add('navbar-expanded');
            }
        });
    }

    // Listen to Bootstrap collapse events
    if (navbarCollapse) {
        navbarCollapse.addEventListener('shown.bs.collapse', () => {
            navbar.classList.add('navbar-expanded');
        });

        navbarCollapse.addEventListener('hidden.bs.collapse', () => {
            navbar.classList.remove('navbar-expanded');
        });
    }

    // Close navbar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        const isClickInsideNavbar = navbar.contains(e.target);
        const isNavbarExpanded = navbarCollapse.classList.contains('show');

        if (!isClickInsideNavbar && isNavbarExpanded && window.innerWidth < 992) {
            navbarToggler.click();
        }
    });
}

// Initialize everything
function init() {
    updateTime();
    setInterval(updateTime, 1000); // Update time every second
    initGreeting();
    displayQuote();
    initSettings();
    initNavbar();
}



// Start when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
