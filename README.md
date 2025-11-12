# 🎯 PLP Task Manager - React Application

A modern, responsive React application that demonstrates component architecture, state management, hooks usage, and API integration with Tailwind CSS styling and dark mode support.

## 🌐 Deployment

**Live Demo:** [Add your deployment link here]()

### Deployment Platforms:
- **Vercel:** [Add your Vercel link here]()
- **Netlify:** [Add your Netlify link here]()
- **GitHub Pages:** [Add your GitHub Pages link here]()

---

## ✨ Features

- **📋 Task Management**
  - Add, complete, and delete tasks
  - Filter tasks (All, Active, Completed)
  - Persistent storage using localStorage
  - Real-time task status updates

- **🌐 API Integration**
  - Fetch posts from JSONPlaceholder API
  - Search and filter functionality
  - Pagination with customizable page size
  - Loading and error state handling

- **🎨 UI/UX**
  - Responsive design (mobile, tablet, desktop)
  - Dark mode / Light mode toggle
  - Smooth animations and transitions
  - Accessible components with proper semantics

- **⚡ Modern Tech Stack**
  - React 19 with Vite for fast development
  - Tailwind CSS for utility-first styling
  - React Router for navigation
  - Axios for API requests
  - Custom hooks for code reusability

---

## 📦 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.1.1 | UI library |
| Vite | 7.1.7 | Build tool & dev server |
| React Router | 7.9.5 | Client-side routing |
| Tailwind CSS | 4.1.16 | Utility-first CSS framework |
| Axios | 1.13.1 | HTTP client for API calls |
| Radix UI | 1.1.15 | Accessible UI components |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18+ 
- **npm** or **yarn**
- A code editor (VS Code recommended)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Navigate to `http://localhost:5173` (or the URL shown in terminal)

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint
```

---

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Button.jsx          # Reusable button component
│   │   ├── Card.jsx            # Reusable card component
│   │   ├── Footer.jsx          # Footer component
│   │   ├── Layout.jsx          # Main layout wrapper
│   │   ├── Navbar.jsx          # Navigation bar with theme toggle
│   │   └── TaskManager.jsx     # Task management page
│   ├── pages/
│   │   └── ApiData.jsx         # API data display page
│   ├── api/
│   │   └── post.js             # API service for fetching posts
│   ├── context/
│   │   └── ThemeContext.jsx    # Theme context for dark mode
│   ├── hooks/
│   │   └── UseLocalStorage.js  # Custom hook for localStorage
│   ├── App.jsx                 # Main app component with routes
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── public/
│   └── _redirects              # Routing configuration for deployment
├── package.json                # Project dependencies
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
└── README.md                   # This file

```

---

## 🧩 Component Overview

### **Navbar**
- Navigation links to Home, Tasks, and API pages
- Theme toggle button (Light/Dark mode)
- Responsive hamburger menu for mobile

### **TaskManager**
- Add new tasks with input field
- Mark tasks as completed with checkboxes
- Delete tasks with delete button
- Filter by status (All, Active, Completed)
- Stores tasks in browser's localStorage

### **ApiData**
- Fetches posts from JSONPlaceholder API
- Search functionality to filter posts
- Pagination with customizable page size
- Card-based layout for posts
- Error and loading states

### **Layout**
- Wraps all pages with Navbar and Footer
- Provides consistent structure across pages

---

## 🎨 Styling & Theme

- **Framework:** Tailwind CSS v4
- **Color Scheme:** 
  - Light mode: Clean white background with blue accents
  - Dark mode: Dark background with light text
- **Responsive Breakpoints:**
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px

### Toggle Theme
Click the theme toggle button in the navbar to switch between light and dark modes.

---

## 🔧 Hooks Used

- **useState** - Component state management
- **useEffect** - Side effects (data fetching, localStorage sync)
- **useContext** - Access theme context
- **useLocalStorage** (custom) - Persist data in browser storage
- **useMemo** - Optimize expensive computations

---

## 🌍 API Integration

The application fetches data from **JSONPlaceholder**, a free fake REST API:

```javascript
// Example: Fetching posts
const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
const posts = response.data;
```

### API Features:
- Pagination support
- Search/filter capability
- Error handling with user-friendly messages
- Loading state indicators

---

## 📱 Responsive Design

The application is fully responsive and tested on:
- 📱 Mobile (320px - 768px)
- 📱 Tablet (768px - 1024px)
- 💻 Desktop (1024px+)

---

## 🧪 Testing & Validation

### Code Quality
```bash
# Run ESLint
npm run lint
```

### Manual Testing Checklist
- [ ] All pages load without errors
- [ ] Task manager adds/deletes/filters tasks correctly
- [ ] API data displays with pagination
- [ ] Theme toggle works (light/dark mode)
- [ ] Responsive on mobile, tablet, desktop
- [ ] Data persists after page reload
- [ ] Search functionality filters results

---

## 🚀 Deployment Guide

### Deploy to **Vercel**
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Import your repository
4. Vercel auto-detects Vite config
5. Click Deploy

### Deploy to **Netlify**
1. Build locally: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag & drop the `dist` folder
4. Or connect your GitHub repo for auto-deployment

### Deploy to **GitHub Pages**
1. Update `vite.config.js`:
   ```javascript
   export default {
     base: '/your-repo-name/',
     // ... rest of config
   }
   ```
2. Run: `npm run build`
3. Push to GitHub, enable GitHub Pages in repo settings

---

## 🐛 Troubleshooting

### Dev server won't start
```bash
# Clear node_modules and reinstall
rm -r node_modules
npm install
npm run dev
```

### Styles not showing in production
- Ensure Tailwind CSS build process completed
- Check that CSS is imported in `main.jsx`
- Clear browser cache

### Tasks/Data disappearing
- Check browser localStorage (DevTools → Application → Storage)
- Ensure localStorage is not disabled in browser settings

### API data not loading
- Check internet connection
- Verify JSONPlaceholder is accessible
- Check browser console for errors

---

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Router Docs](https://reactrouter.com)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com)

---

## 📄 Assignment Checklist

- ✅ Project setup with Vite and Tailwind CSS
- ✅ Component architecture (Button, Card, Navbar, Footer, Layout)
- ✅ State management with hooks (useState, useEffect, useContext)
- ✅ Custom hook (useLocalStorage)
- ✅ Task Manager with CRUD operations
- ✅ API integration with search and pagination
- ✅ Responsive design
- ✅ Theme switcher (light/dark mode)
- ✅ Deployed to live URL

---

## 👨‍💻 Author

**Your Name/GitHub Username**

---

## 📝 License

This project is part of the PLP MERN Stack Development program.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/YourFeature`
3. Commit changes: `git commit -m 'Add YourFeature'`
4. Push to branch: `git push origin feature/YourFeature`
5. Open a Pull Request

---

## ❓ Support

For issues or questions:
- Check existing GitHub issues
- Open a new issue with detailed description
- Contact the instructor or teaching assistant

---

**Last Updated:** November 2025  
**Version:** 1.0.0
