# 🎬 Cinematic Showcase System

## Overview

A fullscreen, immersive showcase experience with floating windows and smooth slide-out drawers. When users click a project, they enter a cinematic overlay where they can explore the project through interactive drawers.

## ✨ Features

### 🪟 Floating Window
- **Fullscreen overlay** with blurred backdrop (`backdrop-blur-xl bg-black/70`)
- **Centered floating window** (rounded-3xl) with soft glow effect
- **Smooth entrance animation** (scale + fade)
- **Project header** with name, role, year
- **Live preview area** showing interactive components
- **Technology tags** with hover effects

### 🎚️ Slide-Out Drawers

#### Left Drawer - Design Principles
- 4 principle cards with icons and descriptions
- TL;DR badges for quick insights
- Animation on open with staggered card entrance

#### Right Drawer - Behind the System
- Visual design hierarchy (Atoms → Pages)
- Color-coded layers with examples
- System statistics with animated counters

#### Bottom Drawer - Impact Metrics
- 4 animated counters for key metrics
- Progress bars with percentage animations
- Grid layout for easy scanning

### 🎛️ Floating Toolbar
Bottom toolbar with:
- **Principle Toggle** (button "1")
- **Impact Toggle** (button "2")
- **System Toggle** (button "3")
- **Theme Toggle** (syncs with global dark mode)
- **Code Toggle** (button "C")
- **Open Full Page** button

### ⌨️ Keyboard Shortcuts
- `Escape` - Close showcase
- `1` - Toggle principles drawer
- `2` - Toggle impact drawer
- `3` - Toggle system drawer
- `C` - Toggle code view

## 🎨 Design System

### Visual Style
- **Backdrop**: `bg-black/70 backdrop-blur-xl`
- **Window**: `bg-black/90 backdrop-blur-2xl`
- **Border**: `border-white/10`
- **Shadow**: `shadow-[0_0_60px_-20px_rgba(255,255,255,0.3)]`
- **Border Radius**: `rounded-3xl` for windows, `rounded-2xl` for cards

### Animation Timing
- **Window entrance**: 0.4s with custom easing `[0.16, 1, 0.3, 1]`
- **Drawer slide**: 0.3s with same easing
- **Stagger delay**: 0.1s between items

## 📁 File Structure

```
components/InteractiveShowcase/
├── ShowcaseOverlay.tsx        # Main container & orchestration
├── FloatingWindow.tsx         # Preview area with components
├── DrawerLeft_Principles.tsx   # Design principles drawer
├── DrawerRight_System.tsx     # System architecture drawer
├── DrawerBottom_Impact.tsx    # Impact metrics drawer
├── Toolbar.tsx                # Floating controls
└── index.tsx                   # Exports
```

## 🚀 Usage

### Basic Integration
```tsx
import { ShowcaseOverlay } from './components/InteractiveShowcase';

<ShowcaseOverlay
  project={project}
  isDark={isDark}
  setIsDark={setIsDark}
  onClose={() => navigate('/work')}
/>
```

### Opening from Work Section
Click any project card → navigates to `/work/:id` → overlay appears

### Closing
- Click backdrop
- Press `Escape` key
- Click X button
- All trigger `onClose()` callback

## 🎭 Animation Details

### Window Entrance
```tsx
initial={{ opacity: 0, scale: 0.9, y: 20 }}
animate={{ opacity: 1, scale: 1, y: 0 }}
transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
```

### Drawer Slide
```tsx
initial={{ x: '-100%' }}  // Left
initial={{ x: '100%' }}    // Right  
initial={{ y: '100%' }}    // Bottom
animate={{ x: 0 }}  // or y: 0
transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
```

### Staggered Items
```tsx
{items.map((item, index) => (
  <motion.div
    transition={{ delay: index * 0.1 }}
  >
```

## 🎨 Customization

### Change Window Size
In `ShowcaseOverlay.tsx`:
```tsx
className="w-full max-w-7xl h-[85vh] ..."
```

### Add New Drawer
1. Create component in `InteractiveShowcase/`
2. Add state in `ShowcaseOverlay.tsx`
3. Add toggle in `Toolbar.tsx`
4. Add keyboard shortcut if needed

### Change Animation Speed
Edit `duration` values in motion components (0.3s default)

## ♿ Accessibility

- ✅ Proper ARIA labels on all buttons
- ✅ Keyboard navigation support
- ✅ Focus management on open/close
- ✅ Screen reader friendly
- ✅ Escape key handling

## 📱 Responsive Design

- **Desktop**: Full-width drawer (md:w-96)
- **Mobile**: Full-width drawers (w-full)
- **Touch**: Swipe gesture support (future)
- **Flexible**: Toolbar adapts to screen size

## 🎯 User Experience Flow

1. **Click project** → URL changes to `/work/:id`
2. **Overlay appears** with smooth scale/fade
3. **User explores** content in floating window
4. **Toggle drawers** to see additional info
5. **Adjust theme** to match preference
6. **Close** via backdrop/escape/X button
7. **Returns** to `/work` section

## 💡 Pro Tips

- Use **hover effects** on interactive elements
- Keep **motion subtle** (not jarring)
- **Sync theme** between global and showcase
- **Animate counters** for engagement
- **Stagger entrances** for polish
- **Handle keyboard** for power users

---

**Enjoy the cinematic experience! 🎬**

