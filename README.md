# Qeta Fetviashvili - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **React 18** with TypeScript for type safety
- **Tailwind CSS** for utility-first styling
- **Vite** for fast development and building
- **Smooth scrolling** navigation
- **Responsive design** that works on all devices
- **Animated sections** with intersection observer
- **3D flip cards** for project showcase
- **Marquee animation** for JS projects
- **Icon fonts** support

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── img/          # Images and assets
│   ├── documents/    # CV and documents
│   └── css/fonts/    # Icon fonts
├── src/
│   ├── components/   # React components
│   ├── hooks/        # Custom React hooks
│   ├── types/        # TypeScript type definitions
│   ├── App.tsx       # Main app component
│   ├── main.tsx      # Entry point
│   └── index.css     # Global styles and Tailwind imports
├── index.html        # HTML template
└── [config files]    # Various configuration files
```

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   
   The app will be available at `http://localhost:3000`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🎨 Components

- **Header** - Sticky navigation with smooth scroll
- **Banner** - Hero section with introduction
- **About** - Personal information with photo
- **Education** - Timeline of educational journey
- **Projects** - 3D flip cards showcasing main projects
- **Skills** - Technical skills and tools grid
- **Marquee** - Scrolling showcase of smaller projects
- **JSProjects** - JavaScript projects with links
- **Socials** - Social media links
- **Footer** - Copyright information

## 🔧 Technologies Used

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Vite

### Libraries
- react-scroll (smooth scrolling)
- react-intersection-observer (scroll animations)

### Styling
- Custom CSS animations
- Icon fonts (Linea Basic)
- Font Awesome icons
- Google Fonts (Fira Code, Raleway)

## 📝 Customization

### Colors
Edit the color palette in `tailwind.config.cjs`:
```javascript
colors: {
  primary: '#64ffda',    // Accent color
  secondary: '#8892b0',  // Text color
  dark: '#0a192f',       // Background
  light: '#ccd6f6',      // Light text
}
```

### Content
Update the data arrays in each component file to modify:
- Education timeline
- Projects
- Skills
- Social links

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

The built files will be in the `dist` directory. You can deploy to:
- Netlify (drag & drop the dist folder)
- Vercel
- GitHub Pages
- Any static hosting service

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Qeta Fetviashvili**
- GitHub: [@qeta422](https://github.com/qeta422)
- LinkedIn: [Qeta Fetviashvili](https://www.linkedin.com/in/qeta-fetviashvili/)
