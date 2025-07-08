# Riya Sharma - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Adding Your Photo
To add your photo to the portfolio:

1. **Add your photo to the public directory:**
   - Place your photo file in the `public/` directory
   - Name it `riya-sharma-photo.jpg` (or update the path in `src/components/HeroSection.tsx`)
   - Recommended size: 400x400 pixels or larger (square aspect ratio works best)

2. **Supported formats:**
   - JPG/JPEG
   - PNG
   - WebP

3. **If you want to use a different filename:**
   - Update the `src` attribute in `src/components/HeroSection.tsx` line 85
   - Change `/riya-sharma-photo.jpg` to your preferred filename

### Running the Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production
```bash
npm run build
```

## 🛠️ Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Dark/Light Theme**: Toggle between themes
- **Smooth Animations**: Beautiful transitions and hover effects
- **Custom Cursor**: Enhanced user experience with custom cursor
- **Loading Screen**: Elegant loading animation
- **3D Project Carousel**: Interactive project showcase
- **Contact Integration**: Direct links to social media and contact methods

## 📁 Project Structure

```
src/
├── components/
│   ├── AboutSection.tsx
│   ├── AtomAnimation.tsx
│   ├── ContactSection.tsx
│   ├── CustomCursor.tsx
│   ├── EducationSection.tsx
│   ├── HeroSection.tsx
│   ├── LoadingScreen.tsx
│   ├── MonogramLogo.tsx
│   ├── Navigation.tsx
│   ├── ProjectsSection.tsx
│   ├── SkillsSection.tsx
│   ├── ThemeProvider.tsx
│   └── WaveDivider.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## 🎨 Customization

### Colors
The portfolio uses a warm amber/orange color scheme. You can customize colors in:
- `tailwind.config.js` - Tailwind configuration
- Individual component files - Component-specific styling

### Content
Update the following files to customize your content:
- `src/components/HeroSection.tsx` - Main hero section with your name and photo
- `src/components/AboutSection.tsx` - About me section
- `src/components/ProjectsSection.tsx` - Your projects
- `src/components/SkillsSection.tsx` - Your skills
- `src/components/EducationSection.tsx` - Education and experience
- `src/components/ContactSection.tsx` - Contact information

## 🐛 Troubleshooting

### Photo Not Loading
If your photo doesn't appear:
1. Check that the file exists in the `public/` directory
2. Verify the filename matches the path in `HeroSection.tsx`
3. Ensure the file format is supported (JPG, PNG, WebP)
4. Check the browser console for any errors

### TypeScript Errors
If you encounter TypeScript errors:
1. Run `npm install` to ensure all dependencies are installed
2. Check that your Node.js version is compatible
3. Try deleting `node_modules` and running `npm install` again

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 🔗 Connect With Me

- **GitHub**: [@Riya-1702](https://github.com/Riya-1702)
- **LinkedIn**: [Riya Sharma](https://www.linkedin.com/in/riya-sharma-638a6b217)
- **Instagram**: [@_itzzz_riya_17](https://instagram.com/_itzzz_riya_17)
- **Email**: riyasharmaabcd334@gmail.com
- **WhatsApp**: +91 9782981204

---

Built with ❤️ by Riya Sharma # Portfolio
