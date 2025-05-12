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

## 2025-05-01
✅ **Completed**:made some changes into the CSS adding `global.css` which contains Global CSS and reusable components
✅ **Completed** : the authentication UI + responsiveness

## Key Lessons 
had some problem with the slider effect which was a bit difficult but i learned the way of implementing it shown in the second note of the `Technical Breakthroughs`
🔧 **Technical Breakthroughs**:
1. `flex: 1` tells the element: “Stretch in the direction of the container’s layout and fill what’s left.” You don’t need to set exact widths or heights — `flex: 1` adapts dynamically.
2. considering the slider animation of two items it is prefered to wrap the two element in a class called `slider` assign 200% width and the parent container of `slider` will take `overflow:hidden` and the `transformX` will be the key factor

## 2025-05-08

✅ **Completed**: made some changes into the CSS adding global.css which contains Global CSS and reusable components
✅ **Completed**: the authentication UI + responsiveness
✅ **Completed**: fixed landscape layout issues on the authentication screen where form content was getting cut off on smaller height devices (e.g., 740×360)

## Key Lessons
While testing responsiveness, I realized that although the UI looked good on portrait view (e.g., 360×740), it broke in landscape view (740×360). The root cause was using fixed min-height values and missing height constraints on parents. I learned that vertical space is limited in landscape mode, so content must be allowed to scroll or adapt fluidly.media query to remove min-height from forms on shorter screens:
``
## 🔧 Technical Breakthroughs:
Fixing landscape layout issues:
Avoid setting fixed min-height values that don’t scale with screen height
Use media queries to adjust layout for smaller vertical space:
```css
@media (max-height: 500px) {
  .SignIn__Layout form,
  .Signup__Layout form {
    min-height: unset;
    height: auto;
    padding: 1rem 0;
  }
}
```
Ensure overflow-y: auto is enabled on scrollable containers
Use height: 100% or min-height: 100vh strategically to support scrolling

## 2025-05-09

✅ **Completed**: Form Validation with JavaScript
✅ **Completed**: during the SignUp after verification we added the user in the localStorage and verified the existance of email during signUp(u cant signup with the same email) with the help localStorage
✅ **Completed**:Login Procedure
✅ **Completed**:Logout Functionality
## Key Lessons
when we set the localStorage item you must JSON.stringify(data)
## 2025-05-12
✅ **Completed** : Profile Edit Functionality and UI Done
## Key Lessons
when u read a data in local Storage and u want to use it's data u must wrap it inside JSON.parse() like this 
`const VariableName = JSON.parse(localStorage.getItem(leyName"))`