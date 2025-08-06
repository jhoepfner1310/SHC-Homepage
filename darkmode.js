// Dark Mode Funktionalität
document.addEventListener('DOMContentLoaded', function() {
    const themeToggles = document.querySelectorAll('.theme-toggle-input');
    const body = document.body;
    
    // Lade gespeicherten Theme-Status aus localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggles.forEach(toggle => {
            toggle.checked = true;
        });
    }
    
    // Event Listener für alle Theme Toggles
    themeToggles.forEach(toggle => {
        toggle.addEventListener('change', function() {
            if (this.checked) {
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
                // Synchronisiere alle anderen Toggles
                themeToggles.forEach(otherToggle => {
                    if (otherToggle !== this) {
                        otherToggle.checked = true;
                    }
                });
            } else {
                body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
                // Synchronisiere alle anderen Toggles
                themeToggles.forEach(otherToggle => {
                    if (otherToggle !== this) {
                        otherToggle.checked = false;
                    }
                });
            }
        });
    });
}); 