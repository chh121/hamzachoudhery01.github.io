# Hamza Choudhery Portfolio

Personal portfolio website for Hamza Choudhery (hamzachoudhery01).

## Deployment Instructions

### Method 1: Using GitHub Actions (Recommended)

1. Create a GitHub repository named exactly: `hamzachoudhery01.github.io`
2. Push your code to this repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/hamzachoudhery01/hamzachoudhery01.github.io.git
   git push -u origin main
   ```
3. GitHub Actions will automatically deploy your site to: https://hamzachoudhery01.github.io/

### Method 2: Manual Deployment

1. Install Git on your system from https://git-scm.com/downloads
2. Create a GitHub repository named exactly: `hamzachoudhery01.github.io`
3. Run the deploy script:
   ```bash
   npm run deploy
   ```

### Method 3: Windows Batch File

1. Double-click on [deploy.bat](file:///c%3A/Users/hp/OneDrive/Desktop/hamza-portfolio/deploy.bat) to automatically build and deploy

## Development

To run the development server:
```
npm run dev
```

To preview the production build:
```
npm run preview
```

## Website Features

- Modern React-based portfolio with Vite
- 3D animations with Three.js
- Smooth UI animations with Framer Motion
- Responsive design for all devices
- Dark futuristic theme with neon accents
- Interactive 3D model viewer
- Contact form with email integration
- Performance optimized