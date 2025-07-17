# Portfolio Loading System

This project includes a comprehensive loading system for the landing page that shows during page reloads and first-time visits.

## Features

- ✨ Modern animated loader with progress bar
- 🎨 Customizable styling and branding
- ⚙️ Configurable loading behavior
- 📱 Responsive design
- 🌙 Dark/Light mode support
- 🎯 Session-based visit tracking

## Components

### ModernLoader
A sophisticated loader component with:
- Animated brand name/logo
- Dual spinning rings
- Progress bar with glow effects
- Dynamic loading messages
- Floating background elements

### PageLoader (Alternative)
A simpler loader component with:
- Basic spinner animation
- Progress bar
- Animated dots
- Clean minimal design

## Configuration

Edit `/src/config/loader.ts` to customize:

```typescript
export const loaderConfig = {
  // Show loader on every page load (true) or only on first visit (false)
  showOnEveryLoad: true,
  
  // Minimum loading time in milliseconds
  minLoadTime: 2000,
  
  // Maximum loading time in milliseconds
  maxLoadTime: 3000,
  
  // Loader style: 'modern' | 'simple'
  style: 'modern',
  
  // Brand name to display
  brandName: 'Sam&apos;s Portfolio',
  
  // Loading messages
  loadingMessages: {
    initializing: 'Initializing...',
    loading: 'Loading assets...',
    almostReady: 'Almost ready...',
    complete: 'Welcome!'
  }
};
```

## How It Works

1. **ClientWrapper** manages the loading state and wraps your entire app
2. **Session Tracking** uses `sessionStorage` to track first-time visits
3. **Progress Simulation** creates a realistic loading experience
4. **Smooth Transitions** fade between loader and content

## Customization

### Change Loader Style
Set `style: 'simple'` in the config to use the basic PageLoader instead of ModernLoader.

### Modify Loading Time
Adjust `minLoadTime` and `maxLoadTime` values to control how long the loader appears.

### Update Brand Name
Change `brandName` in the config to display your own brand/portfolio name.

### Customize Messages
Modify the `loadingMessages` object to use your own loading text.

### Disable for Returning Visitors
Set `showOnEveryLoad: false` to only show the loader on first visits.

## Integration

The loader is automatically integrated into your app through the layout:
- `layout.tsx` wraps children with `ClientWrapper`
- `ClientWrapper` conditionally renders the loader
- Smooth opacity transitions between loader and content

## Styling

The loaders use Tailwind CSS classes and are fully responsive. They respect your app's dark/light mode settings through CSS variables defined in `globals.css`.

## Files Structure

```
src/
├── components/
│   ├── ClientWrapper.tsx    # Main wrapper component
│   ├── ModernLoader.tsx     # Advanced loader component
│   └── PageLoader.tsx       # Simple loader component
├── config/
│   └── loader.ts           # Configuration file
└── app/(front-end)/
    └── layout.tsx          # Integration point
```
