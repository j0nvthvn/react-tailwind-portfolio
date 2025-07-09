# 🚀 Jonathan Flores Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## ✨ Features

- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Smooth Scrolling**: Elegant navigation between sections
- **Interactive Animations**: CSS animations and transitions
- **Contact Form**: Functional contact form with toast notifications
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Performance Optimized**: Built with Vite for fast development and production builds
- **FOUC Prevention**: Advanced loading system prevents Flash of Unstyled Content
- **Resource Preloading**: Critical resources are preloaded for optimal performance
- **Production Ready**: Optimized for deployment on Vercel and other platforms

## 🛠️ Technologies Used

- **Frontend**: React 19, JavaScript (ES6+)
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **UI Components**: Radix UI (Toast)
- **Utilities**: clsx, tailwind-merge

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio_rt.git
   cd portfolio_rt
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components
│   ├── AboutSection.jsx
│   ├── ContactSection.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── Navbar.jsx
│   ├── ProjectsSection.jsx
│   ├── SkillsSection.jsx
│   ├── StarBackground.jsx
│   └── ThemeToggle.jsx
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
└── assets/             # Static assets
```

## 🎨 Customization

### Colors
Update the color scheme in `src/index.css` under the `@theme` and `@layer base` sections.

### Content
Modify the content in each section component to reflect your personal information:
- `HeroSection.jsx` - Name and introduction
- `AboutSection.jsx` - Personal description and skills
- `SkillsSection.jsx` - Technical skills and proficiency
- `ProjectsSection.jsx` - Portfolio projects
- `ContactSection.jsx` - Contact information

### Images
Replace placeholder images in the `public/projects/` directory with your actual project screenshots.

## 🚀 Performance Optimizations

This portfolio includes several advanced optimizations to ensure optimal loading performance and user experience:

### FOUC Prevention
- **CSS Loading Detection**: Custom hook that verifies Tailwind CSS is fully loaded before rendering content
- **Smart Loading Screen**: Beautiful loading animation that hides until styles are ready
- **Environment-Aware Timing**: Different loading strategies for development vs production

### Resource Optimization
- **Critical Resource Preloading**: Images and CSS are preloaded for faster initial load
- **Lazy Loading**: Non-critical resources are loaded after initial render
- **DNS Prefetching**: External resources are prefetched to reduce latency

### Production Deployment
- **Vercel Optimized**: Special handling for Vercel deployment environments
- **Chunked Loading**: Code splitting ensures only necessary code is loaded initially
- **Compressed Assets**: All assets are optimized and compressed for production

### Development Features
- **Hot Module Replacement**: Fast refresh during development
- **Source Maps**: Easy debugging with proper source mapping
- **Error Boundaries**: Graceful error handling in production

## 📞 Contact

Jonathan Flores - [jonathan.flores@mail.udp.cl](mailto:jonathan.flores@mail.udp.cl)

Project Link: [https://github.com/yourusername/portfolio_rt](https://github.com/yourusername/portfolio_rt)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ Star this repo if you found it helpful!
