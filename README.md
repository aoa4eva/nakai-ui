# A simple bootstrap template for project quick starts 

# What it is: 
A simple boostrap starter template.

![img.png](img.png)

**Pros:** 
1. It's simple - easy enough to edit yoru self or with an LLM.
2. Plug and play - config.js for all your user facing text
3. Templated - it can serve as a starting point for other projects. 

Features: 

# How to use: 
1. Clone this repo
2. Edit the files in the `src` folder 
3. This is an html/css/js project, so you can edit it directly from your text editor or IDE. The template is simple enough to use without an LLM, but have fun and flex that creative muscle!

# Lessons AI prompting:
1. Aesthetic is important - so if you have a site that you're inspired by, tell Claude about it. 
2. You can get decent results within the first 3 prompts if you are specific about your aesthetic and basic functionality. 
3. Adding features isn't always a chore - small additions can be made without copying and pasting. 
4. Localising your changes to a specific segment of the code is a good idea. 
5. Always tag your 'stable' versions intuitively and make sure they're committed. Roll back if a hallucination occurs.

# Template Features (by Claude)

### Display Components:
- Real-time clock showing current time (24-hour format) and date
- Dynamic greeting that changes based on time of day (morning/afternoon/evening/night)
- Random inspirational quote display from a set of 10 quotes

### User Customization:
- Settings modal accessible via navigation
- Name input field for personalized greetings
- User preferences stored in browser localStorage

### Navigation:
- Auto-hiding navigation bar that appears on hover
- Responsive mobile menu with hamburger toggle
- Three navigation items: Home, Settings, and About

### UI/UX:
- Bootstrap 5.3.2 integration for responsive layout
- Backdrop blur effects on navbar and modals
- Gradient background with support for custom background images
- Fade-in animations for content elements
- Responsive breakpoints for mobile (576px) and tablet (768px) devices

### Technical Features:
- LocalStorage persistence for user name
- Auto-updating time display (1-second interval)
- Auto-updating greeting (1-minute interval)
- Keyboard support (Enter key) in settings modal
- Click-outside-to-close functionality for settings modal 