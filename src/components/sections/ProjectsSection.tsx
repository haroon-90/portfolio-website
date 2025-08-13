import ProjectCard from '../ui/ProjectCard';
import bakeryImage from '../../img/bakery.png';
import QuickQuizimg from '../../img/quickquiz.png';
import portfolioImage from '../../img/portfolio.png';
import taskifyimg from '../../img/taskify.png';
import minixpressimg from '../../img/MiniXpress.png';
import bolotohimg from '../../img/bolotoh.png';
import lmsimg from '../../img/LMS.png';
import passbinimg from '../../img/PassBin.png'

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'MiniXpress | All-in-one digital hub',
      description: 'MiniXpress is your all-in-one miltipage web application designed for simplicity, speed, and productivity. Whether you have a student, developer, or productivity geek, MiniXpress brings together the tools you need, all in one place.',
      image: minixpressimg,
      tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'React-Router-dom', 'Lucides-react', 'Framer-motion', 'AI API'],
      demoLink: 'https://haroon-90.github.io/MiniXpress/',
      codeLink: 'https://github.com/haroon-90/MiniXpress',
    },
    {
      id: 2,
      title: 'LMS (Learning Management System)',
      description: 'This is a basic Learning Management System built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The application is designed to manage educational operations efficiently. It includes three distinct panels Student, Teacher, and Admin, each with specific access and functionality based on user roles. The system supports user authentication, course management, and role-based dashboards to ensure secure and organized interaction within the platform.',
      image: lmsimg,
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'react-icons', 'react-router-dom', 'toastify'],
      demoLink: 'https://haroon-90.github.io/Weather-App/',
      codeLink: 'https://github.com/haroon-90/Weather-App',
    },
    {
      id: 3,
      title: 'Passbin | password Manager',
      description: 'Passbin is a web-based application that is specially designed to store passwords at safe place. It has two versions, one can store passwords locally in browser (not much secure), and other version can Securely store passwords in database (secure version).',
      image: passbinimg,
      tags: ['React.js', 'Tailwindcss', 'JavaScript', 'Express.js', 'MongoDB', 'Lordicon', 'toastify'],
      demoLink: 'https://haroon-90.github.io/Passbin_local/',
      codeLink: 'https://github.com/haroon-90/Passbin_local',
    },
    {
      id: 4,
      title: 'BoloToh | AI Chatbot',
      description: 'BoloToh is a fun and creative web app where your words turn into magic! Just share a few things about yourself — like your name, age, favorite color, or your mood — and BoloToh will create a personalized Poem, Motivation, Roast, Story, Introduction, AI Advice',
      image: bolotohimg,
      tags: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'AI API'],
      demoLink: 'https://haroon-90.github.io/BoloToh/',
      codeLink: 'https://github.com/haroon-90/BoloToh',
    },
    {
      id: 5,
      title: 'Taskify | TO-DO List App',
      description: 'A React-based To-Do List application that allows users to add, edit, mark as complete, and delete tasks. This project demonstrates fundamental React concepts and state management for creating interactive user interfaces.',
      image: taskifyimg,
      tags: ['React', 'JavaScript', 'CSS', 'React.js', 'Tailwind CSS'],
      demoLink: 'https://haroon-90.github.io/To-Do-React/',
      codeLink: 'https://github.com/haroon-90/To-Do-React',
    },
    {
      id: 6,
      title: 'QuickQuiz | AI Quiz Generator',
      description: 'QuickQuiz is an innovative AI Quiz Generator that allows users to create customized multiple-choice quizzes on any topic. Simply input a topic, and the AI will generate a quiz with questions and answers. Users can then take the quiz and receive instant feedback upon submission.',
      image: QuickQuizimg,
      tags: ['HTML', 'CSS', 'JavaScript', 'AI API'],
      demoLink: 'https://haroon-90.github.io/QuickQuiz/',
      codeLink: 'https://github.com/haroon-90/QuickQuiz',
    },
    {
      id: 7,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and Tailwind CSS. Features smooth scrolling, responsive design, and contact form functionality.',
      image: portfolioImage,
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoLink: 'https://haroon90.w3spaces.com/',
      codeLink: 'https://github.com/haroon-90/Portfolio',
    },
    {
      id: 8,
      title: 'E-Commerce Website',
      description: 'The Sweet Tooth Bakery website is a visually appealing, user-friendly frontend design created using HTML and CSS.This project showcases a sleek, modern design for a bakery, highlighting their delicious offerings in an attractive and organized layout.The website focuses on simplicity,elegance, and functionality, making it easy for visitors to browse the bakery products, learn about the bakery story, and get in touch.',
      image: bakeryImage,
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoLink: 'https://haroon-90.github.io/Sweet-Tooth-Bakery/',
      codeLink: 'https://github.com/haroon-90/Sweet-Tooth-Bakery',
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
            href="#projects"
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
