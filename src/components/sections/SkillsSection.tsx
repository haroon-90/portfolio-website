import SkillBar from '../ui/SkillBar';

const SkillsSection = () => {
  const frontendSkills = [
    { name: 'HTML', percentage: 95 },
    { name: 'CSS', percentage: 75 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'React', percentage: 65 },
    { name: 'Tailwind CSS', percentage: 85 },
  ];

  const backendSkills = [
    { name: 'Node.js', percentage: 80 },
    { name: 'Python', percentage: 75 },
    { name: 'C++', percentage: 70 },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            I've gained expertise in a range of technologies across the full stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Frontend Skills */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">Frontend Development</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">Backend Development</h3>
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Additional skills or tools */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Other Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Git', 'GitHub', 'VS Code', 'Figma', 'Illustrator', 'Photoshop', 'MS Word', 'MS Excel', 'MS PowerPoint', 'Canva'
            ].map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
