# Interactive Personal Portfolio

A modern, retro-inspired personal portfolio built with React, TypeScript, and Framer Motion. It features a dynamic project showcase, smooth page transitions, and a clean, responsive user experience designed to highlight skills, projects, and career journey.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://portfolio-gamma-hazel-59.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue?style=for-the-badge)](https://github.com/Pandya/Portfolio)

---

![Portfolio Screenshot](./public/images/projects/portfolio-website.png)

## ✨ Features

- **Sleek, Modern UI**: A clean and visually appealing design with a retro-futuristic aesthetic.
- **Smooth Page Transitions**: Uses `framer-motion` for elegant animations and seamless navigation between sections.
- **Dynamic Project Showcase**: A filterable gallery to showcase projects across different categories like UI/UX, coding, art, and research.
- **Responsive Design**: A mobile-first approach ensuring a great experience on all devices, from desktops to smartphones.
- **Theming**: Switch between a crisp light mode and a sleek dark mode.
- **Interactive Timeline**: An animated, glowing timeline to present career and education history in an engaging way.
- **Easy to Customize**: Content is managed in data arrays within each section component, making it simple to update.

## 🚀 Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Framer Motion**: A production-ready motion library for React.
- **Vite**: A next-generation frontend tooling that provides a faster and leaner development experience.

## 🛠️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Pandya/Portfolio.git
    cd Portfolio
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```sh
    npm run dev
    # or
    yarn dev
    ```

The application will be available at `http://localhost:5173`.

## 🔧 Customization

This portfolio is designed to be easily customizable. Most of the content can be updated by editing the data arrays in their respective section components.

- **About Section**: Modify the text directly in `src/components/sections/AboutSection.tsx`.
- **Career & Education**: Update the `experiences` and `education` arrays in `src/components/sections/CareerSection.tsx`.
- **Projects**: Add or modify project objects in the `projects` and `artCategories` arrays in `src/components/sections/ProjectsSection.tsx`.
- **Certifications**: Update the `certifications` array in `src/components/sections/CertificationSection.tsx`.
- **Contact Links**: Change the URLs in `src/components/sections/DraftSection.tsx`.

## 🚀 Deployment

This project is ready for deployment on platforms like Vercel, Netlify, or any other static site hosting service.

1.  **Build the project:**
    ```sh
    npm run build
    ```

2.  **Deploy the `dist` folder** to your hosting provider of choice.

For Vercel, you can simply connect your GitHub repository, and it will automatically build and deploy the project.

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Crafted with ❤️ by Pandya.