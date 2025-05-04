import ProjectCard from '../ui/ProjectCard';
import bakeryImage from '../../img/bakery.png';
import QuickQuizimg from '../../img/quickquiz.png';
import portfolioImage from '../../img/portfolio.png';
import taskifyimg from '../../img/taskify.png';
import onenestimg from '../../img/onenest.png';
import bolotohimg from '../../img/bolotoh.png';
import Weatherimg from '../../img/weatherapp.png';
import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'OneNest | All-in-one digital hub',
      description: 'OneNest is your all-in-one digital hub designed for simplicity, speed, and productivity. Whether you have a student, developer, or productivity geek, OneNest brings together the tools you need — all in one place.',
      image: onenestimg,
      tags: ['HTML', 'CSS', 'JavaScript',  'React', 'Tailwind CSS', 'AI API'],
      demoLink: 'https://haroon-90.github.io/OneNest/',
      codeLink: 'https://github.com/haroon-90/OneNest',
    },
    {
      id: 2,
      title: 'BoloToh | AI Chatbot',
      description: 'BoloToh is a fun and creative web app where your words turn into magic! Just share a few things about yourself — like your name, age, favorite color, or your mood — and BoloToh will create a personalized Poem, Motivation, Roast, Story, Introduction, AI Advice',
      image: bolotohimg,
      tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'AI API'],
      demoLink: 'https://haroon-90.github.io/BoloToh/',
      codeLink: 'https://github.com/haroon-90/BoloToh',
    },
    {
      id: 3,
      title: 'QuickQuiz | AI Quiz Generator',
      description: 'QuickQuiz is an innovative AI Quiz Generator that allows users to create customized multiple-choice quizzes on any topic. Simply input a topic, and the AI will generate a quiz with questions and answers. Users can then take the quiz and receive instant feedback upon submission.',
      image: QuickQuizimg,
      tags: ['HTML', 'CSS', 'JavaScript', 'AI API'],
      demoLink: 'https://haroon-90.github.io/QuickQuiz/',
      codeLink: 'https://github.com/haroon-90/QuickQuiz',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and Tailwind CSS. Features smooth scrolling, responsive design, and contact form functionality.',
      image: portfolioImage,
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoLink: 'https://haroon90.w3spaces.com/',
      codeLink: 'https://github.com/haroon-90/Portfolio',
    },
    {
      id: 5,
      title: 'Taskify | TO-DO List App',
      description: 'A React-based To-Do List application that allows users to add, edit, mark as complete, and delete tasks. This project demonstrates fundamental React concepts and state management for creating interactive user interfaces.',
      image: taskifyimg,
      tags: ['React', 'JavaScript', 'CSS', 'React', 'Tailwind CSS'],
      demoLink: 'https://haroon-90.github.io/To-Do-React/',
      codeLink: 'https://github.com/haroon-90/To-Do-React',
    },
    {
      id: 6,
      title: 'Weather App',
      description: 'This is a sleek and responsive Weather App built using HTML, CSS, and JavaScript. It fetches weather data from an API based on user input, providing current weather conditions, temperature, and other relevant information. The design is fully responsive, ensuring a smooth user experience across all devices.',
      image: Weatherimg,
      tags: ['HTML', 'CSS', 'JavaScript', 'weather API'],
      demoLink: 'https://haroon-90.github.io/Weather-App/',
      codeLink: 'https://github.com/haroon-90/Weather-App',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one presented unique challenges and opportunities for growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="px-8 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-medium hover:border-gray-400 hover:bg-gray-50 transition duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
