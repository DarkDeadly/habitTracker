# Development Progress Tracker

## Week 1: Core Structure
### 2025-04-26
 **Completed**: Header component with responsive navigation  
 **Learned**: 
- Google Fonts implementation
- Gradient text effects using CSS
```css
.leftSideHeader span {
  background: linear-gradient(to right, #140e22, #5159e2);
  -webkit-background-clip: text;
}
```

### 2025-04-27
 **Completed**: Hero section with responsive image  
**Key Insight**: 
- Using `width: 100% + max-width` for responsive images prevents layout breaks
```css
.Hero__Image img {
  width: 100%;
  max-width: 850px;
  height: auto;
}
```

### 2025-04-28 (midnight --> 2am)
✅ **Completed**: Features and Habit Tips sections  
🔧 **Technical Breakthroughs**:
1. learned responsive image techniques `width: 100% + max-width`
2. Implemented `object-fit: cover` for consistent image cropping
3. Discovered flex-wrap for mobile layouts

## Key Lessons
- 🖼️ **Image Responsiveness**: Always use `width: 100%` with `max-width`
- 🧩 **Component Thinking**: Structured CSS for easy React conversion later

## 2025-04-28 (3:58pm)

🔧 **Technical Breakthroughs**:
1. Added the scaling effected when hovering over the HabitTips article with a little ease animation `transition: transform 0.3s ease, box-shadow 0.3s ease;` this will tell you that when u add transform there is an animation of ease with duration of 0.3s same as box-shadow to add depth