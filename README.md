# Portfolio Website with Hash Routing

This is a personal portfolio website built with **React** and **React Router DOM**, using **HashRouter** for seamless navigation across different sections of a single page. The site features responsive navigation and smooth scrolling for desktop and mobile views.

## Features
- **Single Page Application (SPA)** using React.
- **Hash-based navigation** using `react-router-dom`'s `HashRouter`.
- **Responsive Navigation Bar** for both desktop and mobile screens.
- **Smooth scrolling** to sections when navigating through the navbar.
- Deployed on **GitHub Pages**.

## Sections
- **Home**: Introduction and brief overview.
- **About**: Information about the person behind the portfolio.
- **Skills & Projects**: A showcase of skills and major projects.
- **Experience**: Details of work experience.
- **Education**: Academic qualifications.
- **Contact**: Contact details or form for reaching out.

## Demo
You can check the live demo of the website [here](#).

## Technologies Used
- **React**: JavaScript library for building the user interface.
- **react-router-dom**: For routing and navigation.
- **Tailwind CSS**: For quick and easy styling of the components.
- **GitHub Pages**: For deploying the site.

## Installation and Setup

### Prerequisites
Make sure you have the following installed on your machine:
- **Node.js**: (v14.x or higher)
- **npm**: Comes with Node.js or you can install it manually.

### Steps to Run Locally

1. Clone the repository:
    ```bash
    git clone https://github.com/bhargavratnala/bhargavratnala.github.io.git
    ```

2. Navigate to the project directory:
    ```bash
    cd bhargavratnala.github.io
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

5. Open your browser and visit:
    ```
    http://localhost:5173
    ```

### Deploying to GitHub Pages

1. Install the `gh-pages` package:
    ```bash
    npm install gh-pages --save-dev
    ```

2. Add the following scripts to your `package.json`:
    ```json
    "homepage": "https:/bhargavratnala.github.io.git",
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    }
    ```

3. Deploy your site:
    ```bash
    npm run deploy
    ```

Your website will be published at `https://bhargavratnala.github.io.git`.