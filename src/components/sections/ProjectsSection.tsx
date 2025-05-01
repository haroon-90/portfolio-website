import ProjectCard from '../ui/ProjectCard';
import bakeryImage from '../../img/bakery.png';
import portfolioImage from '../../img/portfolio.png';
import loginImage from '../../img/login.png';
import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'The Sweet Tooth Bakery website is a visually appealing, user-friendly frontend design created using HTML and CSS.This project showcases a sleek, modern design for a bakery, highlighting their delicious offerings in an attractive and organized layout.The website focuses on simplicity,elegance, and functionality, making it easy for visitors to browse the bakery products, learn about the bakery story, and get in touch.',
      image: bakeryImage,
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and Tailwind CSS. Features smooth scrolling, responsive design, and contact form functionality.',
      image: portfolioImage,
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoLink: 'https://haroon90.w3spaces.com/',
      codeLink: 'https://github.com/haroon-90/Portfolio',
    },
    {
      id: 3,
      title: 'TO-DO List App',
      description: 'A command-line To-Do List application developed in C++. The app allows users to add, view, delete, and update tasks. It uses basic C++ features like arrays, loops, and functions. The user interacts with the program via a simple text-based interface. This project demonstrates the ability to handle basic input/output operations and logic control in C++.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
      tags: ['C++'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 4,
      title: 'Login Form',
      description: 'This is a sleek and responsive Login Form built using HTML & CSS. It features user-friendly input fields for email/username and password, along with a login button and a forgot password link. The design is fully responsive, ensuring a smooth user experience across all devices. The form can be easily customized with additional features like validation, animations, or dark mode to enhance functionality and aesthetics.',
      image: loginImage,
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoLink: '#',
      codeLink: '#',
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
