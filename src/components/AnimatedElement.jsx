import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const AnimatedElement = ({
  children,
  animation = "fadeInUp",
  delay = 0,
  threshold = 0.1,
  className = "",
  style = {},
  ...props
}) => {
  const [ref, isVisible] = useScrollAnimation({
    threshold,
    delay,
    triggerOnce: true,
  });

  const getAnimationClass = () => {
    const baseClass = isVisible ? "animate-in" : "";

    switch (animation) {
      case "fadeInUp":
        return `scroll-animate ${baseClass}`;
      case "fadeInDown":
        return `scroll-animate ${baseClass}`;
      case "slideInLeft":
        return `scroll-animate-left ${baseClass}`;
      case "slideInRight":
        return `scroll-animate-right ${baseClass}`;
      case "scaleIn":
        return `scroll-animate-scale ${baseClass}`;
      case "stagger":
        return `stagger-animate ${baseClass}`;
      default:
        return `scroll-animate ${baseClass}`;
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
