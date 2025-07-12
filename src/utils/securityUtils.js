// Security utilities for production builds
export const disableDevTools = () => {
    if (process.env.NODE_ENV === 'production') {
        // Disable F12 key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
                e.preventDefault();
                return false;
            }
        });

        // Disable right-click context menu
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            return false;
        });

        // Disable developer tools shortcuts
        document.addEventListener('keydown', (e) => {
            if (
                (e.ctrlKey && e.shiftKey && e.key === 'C') || // Ctrl+Shift+C
                (e.ctrlKey && e.shiftKey && e.key === 'J') || // Ctrl+Shift+J
                (e.ctrlKey && e.key === 'U') || // Ctrl+U (view source)
                (e.ctrlKey && e.shiftKey && e.key === 'I') // Ctrl+Shift+I
            ) {
                e.preventDefault();
                return false;
            }
        });

        // Disable console methods
        if (typeof console !== 'undefined') {
            console.log = () => { };
            console.info = () => { };
            console.warn = () => { };
            console.error = () => { };
            console.debug = () => { };
        }

        // Disable debugger statements
        setInterval(() => {
            debugger;
        }, 100);
    }
};

// Function to obfuscate sensitive data
export const obfuscateData = (data) => {
    if (typeof data === 'string') {
        return btoa(data);
    }
    return data;
};

// Function to deobfuscate data
export const deobfuscateData = (data) => {
    if (typeof data === 'string') {
        try {
            return atob(data);
        } catch {
            return data;
        }
    }
    return data;
}; 