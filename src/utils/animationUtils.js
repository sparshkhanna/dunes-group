// Animation performance utilities
export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Throttle function for scroll events
export const throttle = (func, limit) => {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// Check if element is in viewport
export const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Check if element is partially in viewport
export const isPartiallyInViewport = (element, threshold = 0.1) => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    const visibleWidth = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);

    const visibleArea = visibleHeight * visibleWidth;
    const totalArea = rect.height * rect.width;

    return visibleArea / totalArea >= threshold;
};

// Generate unique animation delay
export const generateAnimationDelay = (baseDelay = 0, index = 0, increment = 100) => {
    return baseDelay + (index * increment);
};

// Preload images for smooth animations
export const preloadImages = (imageUrls) => {
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
};

// Disable animations for users who prefer reduced motion
export const shouldReduceMotion = () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Get animation duration based on user preference
export const getAnimationDuration = (defaultDuration = 800) => {
    return shouldReduceMotion() ? 0 : defaultDuration;
};

// Smooth scroll to element
export const smoothScrollTo = (element, offset = 0) => {
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
};

// Intersection Observer options for different animation types
export const getObserverOptions = (type = 'default') => {
    const options = {
        default: {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        },
        immediate: {
            threshold: 0,
            rootMargin: '0px'
        },
        lazy: {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        }
    };

    return options[type] || options.default;
}; 