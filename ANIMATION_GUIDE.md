# Animation System Guide

## Overview

This landing page features a comprehensive animation system designed to provide smooth, performant, and accessible animations that enhance the user experience without interfering with each other.

## Key Features

### 🚀 Performance Optimized

- Uses `will-change` CSS property for GPU acceleration
- Intersection Observer API for efficient scroll detection
- Throttled scroll events (60fps)
- Reduced motion support for accessibility

### 🎨 Modern Animation Types

- **Fade In Up**: Elements slide up while fading in
- **Fade In Down**: Elements slide down while fading in
- **Slide In Left**: Elements slide in from the left
- **Slide In Right**: Elements slide in from the right
- **Scale In**: Elements scale up from 0.8 to 1.0
- **Stagger**: Multiple elements animate with delays

### 🎯 Scroll-Triggered Animations

- Elements animate when they enter the viewport
- Configurable thresholds and margins
- One-time or repeatable animations
- Customizable delays

### 🎪 Hover Effects

- **Hover Lift**: Elements lift up on hover
- **Hover Scale**: Elements scale up on hover
- **Hover Glow**: Elements get a blue glow on hover

## Components

### AnimatedElement

A reusable component that wraps any element with scroll-triggered animations.

```jsx
<AnimatedElement
  animation="fadeInUp"
  delay={200}
  threshold={0.1}
  className="custom-class"
>
  <div>Your content here</div>
</AnimatedElement>
```

### useScrollAnimation Hook

Custom hook for managing scroll-triggered animations.

```jsx
const [ref, isVisible] = useScrollAnimation({
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
  triggerOnce: true,
  delay: 0,
  type: "default",
});
```

## Animation Classes

### Scroll-Triggered Classes

- `.scroll-animate` - Fade in up animation
- `.scroll-animate-left` - Slide in from left
- `.scroll-animate-right` - Slide in from right
- `.scroll-animate-scale` - Scale in animation
- `.stagger-animate` - Staggered animation for children

### Hover Classes

- `.hover-lift` - Lift effect on hover
- `.hover-scale` - Scale effect on hover
- `.hover-glow` - Glow effect on hover

### Continuous Animations

- `.animate-float` - Floating animation
- `.animate-fly` - Flying plane animation
- `.animate-spinSlow` - Slow rotation
- `.animate-pulse` - Pulsing effect
- `.animate-gradient` - Gradient animation
- `.animate-bounce` - Bouncing effect

## Implementation Examples

### Hero Section

```jsx
<AnimatedElement animation="fadeInUp" delay={200}>
  <h1>Main Title</h1>
</AnimatedElement>
```

### Stats Section

```jsx
<AnimatedElement animation="stagger" className="grid">
  {stats.map((stat, index) => (
    <div key={index} className="stat-card">
      {stat.content}
    </div>
  ))}
</AnimatedElement>
```

### Service Cards

```jsx
{
  services.map((service, index) => (
    <AnimatedElement
      key={index}
      animation="scaleIn"
      delay={index * 200}
      className="service-card hover-scale hover-glow"
    >
      {service.content}
    </AnimatedElement>
  ));
}
```

## Performance Optimizations

### CSS Optimizations

- Uses `transform` and `opacity` for GPU acceleration
- `will-change` property for performance hints
- Cubic-bezier easing for smooth animations
- Reduced motion media query support

### JavaScript Optimizations

- Throttled scroll events (16ms intervals)
- Intersection Observer for efficient detection
- Debounced resize handlers
- Memory leak prevention with proper cleanup

### Accessibility

- Respects `prefers-reduced-motion` user preference
- Focus indicators for keyboard navigation
- Screen reader friendly
- No animation conflicts

## Customization

### Adding New Animations

1. Define keyframes in `index.css`
2. Add corresponding animation class
3. Include `will-change` property for performance

### Modifying Timing

- Adjust `delay` prop for staggered effects
- Modify `threshold` for trigger sensitivity
- Change `rootMargin` for trigger position

### Performance Tuning

- Use `type="lazy"` for less critical animations
- Reduce particle count in hero section
- Adjust animation durations based on device performance

## Browser Support

- Modern browsers with Intersection Observer support
- Graceful fallback for older browsers
- Progressive enhancement approach

## Best Practices

1. **Don't over-animate**: Use animations sparingly for impact
2. **Respect user preferences**: Always check `prefers-reduced-motion`
3. **Performance first**: Use GPU-accelerated properties
4. **Accessibility**: Ensure animations don't interfere with usability
5. **Consistency**: Use consistent timing and easing across components

## Troubleshooting

### Animations not triggering

- Check if element is in viewport
- Verify Intersection Observer support
- Ensure proper CSS classes are applied

### Performance issues

- Reduce animation complexity
- Check for layout thrashing
- Monitor frame rate in dev tools

### Accessibility concerns

- Test with screen readers
- Verify reduced motion support
- Check keyboard navigation

## Future Enhancements

- Parallax scrolling effects
- 3D transform animations
- WebGL particle systems
- Advanced easing functions
- Animation orchestration tools
