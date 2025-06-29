import { useEffect, useRef, useState } from 'react';
import { getObserverOptions, shouldReduceMotion, throttle } from '../utils/animationUtils';

const useScrollAnimation = (options = {}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    const {
        threshold = 0.1,
        rootMargin = '0px 0px -50px 0px',
        triggerOnce = true,
        delay = 0,
        type = 'default'
    } = options;

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        // Respect user's motion preferences
        if (shouldReduceMotion()) {
            setIsVisible(true);
            return;
        }

        const observerOptions = getObserverOptions(type);
        const finalOptions = {
            threshold: options.threshold || observerOptions.threshold,
            rootMargin: options.rootMargin || observerOptions.rootMargin,
        };

        const observer = new IntersectionObserver(
            throttle(([entry]) => {
                if (entry.isIntersecting) {
                    // Add delay if specified
                    if (delay > 0) {
                        setTimeout(() => {
                            setIsVisible(true);
                        }, delay);
                    } else {
                        setIsVisible(true);
                    }

                    // Disconnect observer if triggerOnce is true
                    if (triggerOnce) {
                        observer.disconnect();
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            }, 16), // Throttle to ~60fps
            finalOptions
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, rootMargin, triggerOnce, delay, type]);

    return [elementRef, isVisible];
};

export default useScrollAnimation; 