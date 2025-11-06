# Shantanu's Portfolio v2.0

A modern, performant portfolio website built with React and TypeScript.

## ✨ Features

- **Modular Architecture**: Clean separation of concerns with reusable components
- **Performance Optimized**: Particle system uses refs instead of React state for smooth 60fps animations
- **Keyboard Navigation**: Navigate with arrow keys and close modals with Escape
- **Dark Mode Persistence**: Theme preference saved to localStorage
- **Semantic HTML**: Proper ARIA labels and accessibility support
- **Type-Safe**: Full TypeScript coverage with proper interfaces
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
portfolio/
├── components/          # React components
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── DarkModeToggle.tsx
│   ├── HomeSection.tsx
│   ├── Navigation.tsx
│   ├── ParticleCanvas.tsx
│   ├── ProjectModal.tsx
│   └── WorkSection.tsx
├── data/               # Data and types
│   ├── projects.ts
│   ├── skills.ts
│   └── types.ts
├── portfolio-v2.tsx    # Main application file
└── README.md
```

## 🎨 Customization

### Update Projects

Edit `data/projects.ts` to add or modify projects:

```typescript
{
  id: 'unique-id',
  name: 'Project Name',
  role: 'Your Role',
  year: '2024',
  tags: ['Tag1', 'Tag2'],
  description: 'Project description',
  approach: 'Your approach',
  impact: 'Impact achieved',
  tech: ['Tech1', 'Tech2'],
  gradient: 'from-blue-500 to-purple-600'
}
```

### Update Skills

Edit `data/skills.ts` to modify your skills and principles.

### Customize Colors

The portfolio uses Tailwind CSS. Update the gradient classes in `projects.ts` or modify the theme colors in your Tailwind config.

## 🧪 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Particle System**: 60fps with 25 max particles
- **Optimized Rendering**: No unnecessary React re-renders
- **Debounced Resize**: Smooth window resizing

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any static hosting platform:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a personal portfolio. If you'd like to use this as a template:

1. Fork the repository
2. Customize the content
3. Deploy to your preferred platform

## 📄 License

MIT - Feel free to use this as a template for your own portfolio.

