# 🎬 Movie Search App

> A modern React application that allows users to search for movies and track trending searches using TMDB API and Appwrite backend.

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF.svg)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-4-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## ✨ Demo

<div align="center">
  <img src="Screenshot 2025-01-30 193414.png" alt="Search Interface" width="600"/>
  <img src="Screenshot 2025-01-30 193434.png" alt="Movie Results" width="600"/>
</div>

🌐 **[Live Demo](http://localhost:5173/)**

## 🚀 Features

- **Real-time Search**: Instantly search movies with debouncing optimization
- **Trending Movies**: Track and display popular movie searches
- **TMDB Integration**: Access a vast database of movies with rich metadata
- **Smart Caching**: Efficient data management with Appwrite backend
- **Modern UI**: Beautiful and responsive design with Tailwind CSS
- **Performance**: Built with Vite for lightning-fast development and builds

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4
- **Backend**: Appwrite Cloud
- **API**: TMDB (The Movie Database)
- **Language**: TypeScript/JavaScript

## 📋 Prerequisites

Before running the project, make sure you have:

- Node.js (v14 or higher)
- npm or yarn package manager
- Appwrite account and server
- TMDB API key

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-first-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   Create a `.env.local` file:
   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key
   VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
   VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
   VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## 📁 Project Structure

```
my-first-app/
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── MovieCard.jsx
│   │   ├── Search.jsx
│   │   └── Spinner.jsx
│   ├── assets/        # Static files
│   ├── appwrite.js    # Appwrite configuration
│   └── App.jsx        # Main application component
├── public/            # Public assets
├── .env.local         # Environment variables
└── package.json       # Project dependencies
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build locally

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for their extensive movie database
- [Appwrite](https://appwrite.io/) for the backend infrastructure
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [Vite](https://vitejs.dev/) for the build tooling
