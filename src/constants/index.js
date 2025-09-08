export const myProjects = [
    {
      title: 'Moodify - Moodtracking Journaling App',
      desc: 'Moodify is a hackathon project built to help users track their moods through journaling and sentiment analysis. It combines a responsive frontend with a MongoDB backend to provide insights into emotional trends over time.',
      subdesc:
        'Developed during a hackathon using HTML, CSS, JavaScript, and MongoDB, Moodify demonstrates a full-stack workflow with sentiment analysis and cloud deployment.',
      href: 'https://github.com/Oldhoon/Moodify-NWHacks',
      texture: '/textures/project/moodify.mp4',
      logo: '/assets/project-moodify.png',
      logoStyle: {
        backgroundColor: '#1E293B',
        border: '0.2px solid #334155',
        boxShadow: '0px 0px 60px 0px rgba(30, 41, 59, 0.5)',
      },
      spotlight: '/assets/spotlights/spotlight5.png',
      tags: [
        { id: 1, name: 'HTML', path: '/assets/logos/html5.svg' },
        { id: 2, name: 'CSS', path: '/assets/logos/css3.svg' },
        { id: 3, name: 'JavaScript', path: '/assets/logos/javascript.svg' },
        { id: 4, name: 'MongoDB', path: '/assets/projectLogos/mongodb.png' },
      ],
    },
    {
      title: 'Job Search Status Tracker - Java Swing App',
      desc: 'A learning project designed to build a strong foundation in Java and Java Swing. The app tracks internship applications with a GUI that visualizes application statuses and supports full CRUD functionality.',
      subdesc:
        'Developed as an academic project to practice OOP principles, data persistence, modular design, and unit testing with JUnit. Focused on creating a scalable and maintainable codebase.',
      href: 'https://github.com/Oldhoon/Application-tracker',
      texture: '/textures/project/tracker.mp4',
      logo: '/assets/project-tracker.png',
      logoStyle: {
        backgroundColor: '#2C2C32',
        border: '0.2px solid #3F3F46',
        boxShadow: '0px 0px 60px 0px rgba(39, 39, 42, 0.5)',
      },
      spotlight: '/assets/spotlights/spotlight4.png',
      tags: [
        { id: 1, name: 'Java', path: '/assets/projectLogos/java.png' },
        { id: 2, name: 'Swing', path: '/assets/projectLogos/swing.png' },
        { id: 3, name: 'JSON', path: '/assets/projectLogos/json.png' },
        { id: 4, name: 'JUnit', path: '/assets/projectLogos/junit.png' },
        { id: 5, name: 'Git', path: '/assets/projectLogos/git.png' },
      ],
    },
    {
      title: 'Pathable - Accessibility Navigation App',
      desc: 'Pathable is a hackathon project designed to improve navigation for individuals with accessibility needs. It leverages AI-assisted workflows to identify and share potential barriers, helping users plan safe and convenient routes.',
      subdesc:
        'Built with TypeScript, Node.js, Google Maps Platform, Vercel, and Supabase, Pathable showcases the integration of real-time mapping and accessibility-focused design in a modern web app.',
      href: 'https://github.com/Oldhoon/Pathable-GDSC-AIHacks',
      texture: '/textures/project/pathable.mp4',
      logo: '/assets/project-pathable.png',
      logoStyle: {
        backgroundColor: '#1E293B',
        border: '0.2px solid #334155',
        boxShadow: '0px 0px 60px 0px rgba(30, 41, 59, 0.5)',
      },
      spotlight: '/assets/spotlights/spotlight3.png',
      tags: [
        { id: 1, name: 'TypeScript', path: '/assets/projectLogos/typescript.png' },
        { id: 2, name: 'Node.js', path: '/assets/projectLogos/nodejs.png' },
        { id: 3, name: 'Google Maps', path: '/assets/projectLogos/googlemaps.png' },
        { id: 4, name: 'Vercel', path: '/assets/projectLogos/vercel.png' },
        { id: 5, name: 'Supabase', path: '/assets/projectLogos/supabase.png' },
      ],
    },
    {
      title: 'Movie Reviews API - Spring Boot Backend',
      desc: 'A personal project focused on backend development, the Movie Reviews API provides RESTful endpoints for managing movies and reviews. Data is stored in MongoDB and served in JSON format for seamless integration with clients.',
      subdesc:
        'Built with Java, Spring Boot, and MongoDB, with Thymeleaf for minimal frontend rendering. Endpoints were rigorously tested and validated using Postman to ensure robust CRUD operations and data integrity.',
      href: 'https://github.com/Oldhoon/movie_reviews_API',
      texture: '/textures/project/moviereviews.mp4',
      logo: '/assets/project-moviereviews.png',
      logoStyle: {
        backgroundColor: '#292524',
        border: '0.2px solid #3F3F46',
        boxShadow: '0px 0px 60px 0px rgba(68, 64, 60, 0.5)',
      },
      spotlight: '/assets/spotlights/spotlight2.png',
      tags: [
        { id: 1, name: 'Java', path: '/assets/logos/java.svg' },
        { id: 2, name: 'Spring Boot', path: '/assets/projectLogos/springboot.png' },
        { id: 3, name: 'MongoDB', path: '/assets/projectLogos/mongodb.png' },
        { id: 4, name: 'Thymeleaf', path: '/assets/projectLogos/thymeleaf.png' },
        { id: 5, name: 'Postman', path: '/assets/projectLogos/postman.png' },
      ],
    },
    {
      title: 'MailBot - AI-Powered Email Assistant',
      desc: 'MailBot is a personal project that integrates a Chrome extension with a Spring Boot backend to generate AI-powered email responses. The system leverages the Gemini API for natural language generation and deploys securely on AWS EC2.',
      subdesc:
        'Implemented in Java with Spring Boot, featuring asynchronous API calls and JSON parsing. The backend was deployed on AWS EC2 with an Nginx reverse proxy for secure HTTPS communication, demonstrating cloud deployment and AI integration.',
      href: 'https://github.com/Oldhoon/Mailbot',
      texture: '/textures/project/mailbot.mp4',
      logo: '/assets/project-mailbot.png',
      logoStyle: {
        backgroundColor: '#0C0A09',
        border: '0.2px solid #1C1917',
        boxShadow: '0px 0px 60px 0px rgba(12, 10, 9, 0.5)',
      },
      spotlight: '/assets/spotlights/spotlight1.png',
      tags: [
        { id: 1, name: 'Java', path: '/assets/logos/java.svg' },
        { id: 2, name: 'Spring Boot', path: '/assets/projectLogos/springboot.png' },
        { id: 3, name: 'AWS', path: '/assets/projectLogos/aws.png' },
        { id: 4, name: 'Gemini API', path: '/assets/projectLogos/gemini.png' },
        { id: 5, name: 'Chrome Extension', path: '/assets/projectLogos/chrome.png' },
        { id: 6, name: 'JSON', path: '/assets/projectLogos/json.png' },
      ],
    },
    {
      title: 'Crossy Road – Python Beginner Game',
      desc: 'A beginner project inspired by Crossy Road, built to practice Python syntax and OOP concepts. Players control a character navigating across a road while avoiding moving obstacles.',
      subdesc:
        'Implemented using Python and the Turtle graphics library, this project focuses on object-oriented design, event handling, and basic game loop mechanics.',
      href: 'https://github.com/Oldhoon/Crossy-Road',
      texture: '/textures/project/crossyroad.mp4',
      logo: '/assets/project-crossyroad.png',
      logoStyle: {
        backgroundColor: '#1E1E1E',
        border: '0.2px solid #3F3F46',
        boxShadow: '0px 0px 60px 0px rgba(63, 63, 70, 0.5)',
      },
      spotlight: '/assets/spotlights/spotlight5.png',
      tags: [
        { id: 1, name: 'Python', path: '/assets/logos/python.svg' },
        { id: 2, name: 'Turtle', path: '/assets/projectLogos/turtle.png' },
      ],
    },
    {
      title: 'Snake Game – Python Beginner Project',
      desc: 'A classic Snake Game built as a beginner project to strengthen understanding of Python syntax and object-oriented programming. Players control the snake to collect food while avoiding collisions with walls and itself.',
      subdesc:
        'Developed using Python and the Turtle graphics library, this project highlights OOP design, modular code structure, and interactive gameplay mechanics.',
      href: 'https://github.com/Oldhoon/Snake-Game',
      texture: '/textures/project/snakegame.mp4',
      logo: '/assets/project-snakegame.png',
      logoStyle: {
        backgroundColor: '#111827',
        border: '0.2px solid #1F2937',
        boxShadow: '0px 0px 60px 0px rgba(31, 41, 55, 0.5)',
      },
      spotlight: '/assets/spotlights/spotlight4.png',
      tags: [
        { id: 1, name: 'Python', path: '/assets/logos/python.svg' },
        { id: 2, name: 'Turtle', path: '/assets/projectLogos/turtle.png' },
      ],
    },
    {
      title: 'DX Spectroscopy Data Converter',
      desc: 'A command line tool that converts DX spectroscopy files with tab or space delimited data into Excel format and optionally adds a scatter chart.',
      subdesc:
        'Built with Python, pandas, and OpenPyXL. Uses argparse for a clean CLI and writes a formatted worksheet with an optional chart for wavelength versus intensity.',
      href: 'https://github.com/Oldhoon/DX-Spectroscopy-Converter',
      texture: '/textures/project/dxconverter.mp4',
      logo: '/assets/project-dxconverter.png',
      logoStyle: {
        backgroundColor: '#0B1020',
        border: '0.2px solid #111827',
        boxShadow: '0px 0px 60px 0px rgba(17, 24, 39, 0.5)',
      },
      spotlight: '/assets/spotlights/spotlight3.png',
      tags: [
        { id: 1, name: 'Python', path: '/assets/logos/python.svg' },
        { id: 2, name: 'pandas', path: '/assets/projectLogos/pandas.png' },
        { id: 3, name: 'OpenPyXL', path: '/assets/projectLogos/openpyxl.png' },
        { id: 4, name: 'CLI', path: '/assets/projectLogos/terminal.png' },
        { id: 5, name: 'Excel', path: '/assets/projectLogos/excel.png' },
      ],
    },
    {
      title: 'Finance Dashboard – Expense Tracking App',
      desc: 'A simple finance tracking app built with Streamlit and pandas. Users can upload their bank statements in CSV format to instantly view transactions and expense summaries grouped by category.',
      subdesc:
        'Developed with Python, Streamlit, and pandas, this project demonstrates data processing, interactive visualization, and extensibility through charts and custom categories.',
      href: 'https://github.com/Oldhoon/python-financeapp',
      texture: '/textures/project/financedashboard.mp4',
      logo: '/assets/project-financedashboard.png',
      logoStyle: {
        backgroundColor: '#0F172A',
        border: '0.2px solid #1E293B',
        boxShadow: '0px 0px 60px 0px rgba(15, 23, 42, 0.5)',
      },
      spotlight: '/assets/spotlights/spotlight2.png',
      tags: [
        { id: 1, name: 'Python', path: '/assets/logos/python.svg' },
        { id: 2, name: 'Streamlit', path: '/assets/projectLogos/streamlit.png' },
        { id: 3, name: 'pandas', path: '/assets/projectLogos/pandas.png' },
      ],
    },
  ];
  