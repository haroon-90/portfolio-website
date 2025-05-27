import profilePic from "../../img/profile1.jpg";
import CV from "../../MuhammadHaroonNawaz(Resume).pdf";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Profile Image */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-tl-[20px] rounded-tr-[90px] rounded-bl-[90px] rounded-br-[20px] overflow-hidden border-8 border-white shadow-2xl z-10">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Decorative background circle */}
              <div className="absolute -inset-5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 opacity-50 blur-lg"></div>
            </div>
          </div>

          <div className="w-full md:w-3/5">
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>

            <p className="text-lg text-gray-700 mb-4">
              Hello! I'm a passionate web developer with a strong foundation in both design and code. I specialize in creating intuitive, responsive websites and applications that provide exceptional user experiences.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              With expertise in React, Tailwind CSS, and modern JavaScript, I bring creativity and technical precision to every project. I love collaborating with teams to build products that solve real-world problems.
            </p>

            <div className="grid grid-cols-2 gap-4 max-w-lg">
              <div>
                <h3 className="font-bold text-gray-900">Name</h3>
                <p className="text-gray-700">Muhammad Haroon Nawaz</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Email</h3>
                <p className="text-gray-700">roliaharoon2@gmail.com</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Location</h3>
                <p className="text-gray-700">Kotla Arab Ali Khan, punjab, Pakistan</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Availability</h3>
                <p className="text-gray-700">Freelance / Full-time</p>
              </div>
            </div>

            <a
              href={CV}
              className="inline-flex items-center mt-8 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition duration-300"
              download
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
