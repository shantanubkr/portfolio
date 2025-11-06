# 🔧 Troubleshooting Guide

## Current Issue: Blank White Screen

If you're seeing a blank white screen, try the following:

### 1. Check the Browser Console

Open DevTools (F12 or Cmd+Option+I) and look for errors. Common issues:

- **"Cannot find module"** → Dependencies not installed
- **"React is not defined"** → Import issues
- **"Cannot read property of undefined"** → Component errors

### 2. Make Sure Dependencies Are Installed

```bash
cd portfolio
npm install
```

### 3. Restart the Dev Server

Stop the current server (Ctrl+C) and restart:

```bash
npm run dev
```

### 4. Clear Cache

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Restart dev server
npm run dev
```

### 5. Check File Structure

Make sure these files exist:
- ✅ `App.tsx` (main app file)
- ✅ `main.tsx` (entry point)
- ✅ `index.html` (HTML file)
- ✅ `components/` directory with all 8 component files
- ✅ `data/` directory with all 3 data files

### 6. Verify PostCSS Config

```bash
cat postcss.config.js
```

Should show:
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 7. Check TypeScript Config

```bash
cat tsconfig.json
```

Make sure `"jsx": "react-jsx"` is in compilerOptions.

### 8. Alternative: Use the Original File

If you need a quick fix, you can temporarily use the original file:

In `main.tsx`, change:
```typescript
import App from './App.tsx'
```

To:
```typescript
// Comment out App.tsx import
// import App from './App.tsx'
import Portfolio from './portfolio-complete.tsx'

// In the render, change <App /> to <Portfolio />
```

Then restart the dev server.

### 9. Check Browser Console for Specific Errors

Most common errors and fixes:

#### "Failed to resolve module"
→ Run `npm install`

#### "Unexpected token"
→ Run `npm run build` to check for TypeScript errors

#### "Tailwind not working"
→ Make sure `postcss.config.js` exists and contains the tailwindcss plugin

#### "Port 5173 already in use"
→ Kill the process and restart:
```bash
lsof -ti:5173 | xargs kill -9
npm run dev
```

### 10. Verify Port

The dev server should be running on: http://localhost:5173

Check the terminal output for the exact URL.

---

## Quick Fix Steps

1. **Stop the dev server** (Ctrl+C in terminal)
2. **Run**: `npm install`
3. **Run**: `npm run dev`
4. **Open browser** to the URL shown in terminal
5. **Check console** for errors (F12)

---

## Current File Status

✅ `App.tsx` - Created and ready
✅ `main.tsx` - Updated to import App
✅ `postcss.config.js` - Created
✅ All components - Created
✅ All data files - Created
✅ TypeScript types - Fixed (added React import)

## Next Steps

1. Make sure you've restarted the dev server
2. Open http://localhost:5173 (or the port shown in terminal)
3. Check browser console for any errors
4. Let me know what errors you see in the console!




