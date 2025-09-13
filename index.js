 // Get references to the necessary elements
        const themeToggleButton = document.getElementById('theme-toggle-button');
        const htmlElement = document.documentElement;
        const sunIcon = document.getElementById('sun-icon');
        const moonIcon = document.getElementById('moon-icon');

        // Function to toggle the theme
        const toggleTheme = () => {
            // Toggle the 'dark' class on the <html> element
            htmlElement.classList.toggle('dark');

            // Update icon visibility
            sunIcon.classList.toggle('hidden');
            moonIcon.classList.toggle('hidden');

            // Update localStorage with the new theme preference
            if (htmlElement.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        };

        // Event listener for the toggle button
        themeToggleButton.addEventListener('click', toggleTheme);

        // Function to set the initial theme based on localStorage or system preference
        const setInitialTheme = () => {
            const storedTheme = localStorage.getItem('theme');
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

            if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
                htmlElement.classList.add('dark');
                sunIcon.classList.add('hidden');
                moonIcon.classList.remove('hidden');
            } else {
                htmlElement.classList.remove('dark');
                sunIcon.classList.remove('hidden');
                moonIcon.classList.add('hidden');
            }
        };

        // Run the function to set the initial theme when the page loads
        document.addEventListener('DOMContentLoaded', setInitialTheme);