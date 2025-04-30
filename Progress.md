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
✅ **Completed**: Added a Call To Action section called CTA
✅ **Completed**: Added a footer
✅ **Completed**: responsive design to the landing 

## Key Lessons
- **Grid when dealing with both column and row at the same time** : `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));` this willautomatically fit as many columns as it can based on the container's width at least 250px wide, but can grow up to a flexible size (1fr) 


🔧 **Technical Breakthroughs**:
1. Added the scaling effected when hovering over the HabitTips article with a little ease animation `transition: transform 0.3s ease, box-shadow 0.3s ease;` this will tell you that when u add transform there is an animation of ease with duration of 0.3s same as box-shadow to add depth
2. concerning the responsive design on the typographie i learned that clamp is a good function that help in typographie it is modern responsive `font-size: clamp(0.875rem, 2.5vw, 1rem);`
3. Flexbox is usually used to deal with row "or" column but grid deal with both row and column `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));`

## 2025-04-29 
✅ **Completed**: made the navbar responsive with the hamburger menu

🔧 **Technical Breakthroughs**:
with the help JavaScript we could make it when we click on the hamburger a class of `mobile-menu` will appear and when we click again it dissapears this with the help of `classList.toggle('mobile-menu')`