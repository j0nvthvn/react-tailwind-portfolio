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

## 📞 Contact

Jonathan Flores - [jonathan.flores@mail.udp.cl](mailto:jonathan.flores@mail.udp.cl)

Project Link: [https://github.com/yourusername/portfolio_rt](https://github.com/yourusername/portfolio_rt)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ Star this repo if you found it helpful!
