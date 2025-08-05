import { useState } from "react";
import { Star, X } from "lucide-react";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [skillSuggestions, setSkillSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const skillsDatabase = [
        'JavaScript', 'Python', 'Java', 'TypeScript', 'C++', 'C#', 'PHP', 'Ruby', 'Go', 'Rust', 'Swift', 'Kotlin', 'Dart', 'Scala', 'R', 'MATLAB', 'Perl', 'Objective-C', 'Visual Basic', 'Assembly',
        'React', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'Next.js', 'Nuxt.js', 'Svelte', 'HTML', 'CSS', 'SASS', 'LESS', 'Bootstrap', 'Tailwind CSS', 'Material-UI', 'jQuery', 'Webpack', 'Vite', 'Parcel',
        'MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Redis', 'Firebase', 'Supabase', 'GraphQL', 'REST API', 'Django', 'Flask', 'FastAPI', 'Spring Boot', 'Laravel', 'Ruby on Rails', 'ASP.NET',
        'React Native', 'Flutter', 'Ionic', 'Xamarin', 'Android Development', 'iOS Development', 'Cordova', 'PhoneGap',
        'AWS', 'Google Cloud', 'Microsoft Azure', 'Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'GitHub Actions', 'Terraform', 'Ansible', 'Nginx', 'Apache', 'Linux', 'Ubuntu', 'CentOS',
        'Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Sketch', 'Adobe XD', 'InVision', 'Prototyping', 'Wireframing', 'User Research', 'UI Design', 'UX Design', 'Responsive Design',
        'Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter', 'Data Analysis', 'Data Visualization', 'Big Data', 'Hadoop', 'Spark',
        'Git', 'GitHub', 'GitLab', 'Bitbucket', 'Jira', 'Confluence', 'Slack', 'Trello', 'Asana', 'Notion', 'VS Code', 'IntelliJ IDEA', 'Eclipse', 'Vim', 'Emacs',
        'Blockchain', 'Cryptocurrency', 'Solidity', 'Web3', 'IoT', 'Arduino', 'Raspberry Pi', 'Unity', 'Unreal Engine', 'Blender', 'AutoCAD', 'SolidWorks'
      ]

  const filterSkills = (input) => {
    if (!input.trim()) return [];
    return skillsDatabase
      .filter(
        (skill) =>
          skill.toLowerCase().includes(input.toLowerCase()) &&
          !skills.some((s) => s.toLowerCase() === skill.toLowerCase())
      )
      .slice(0, 8);
  };

  const handleSkillInputChange = (e) => {
    const value = e.target.value;
    setSkillInput(value);
    if (value.trim()) {
      const suggestions = filterSkills(value);
      setSkillSuggestions(suggestions);
      setShowSuggestions(suggestions.length > 0);
    } else {
      setShowSuggestions(false);
    }
  };

  const addSkill = (skill) => {
    if (!skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
    setSkillInput("");
    setShowSuggestions(false);
  };

  const removeSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const handleSkillKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (skillInput.trim() && skillSuggestions.length > 0) {
        addSkill(skillSuggestions[0]);
      } else if (skillInput.trim()) {
        addSkill(skillInput.trim());
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
    } else if (e.key === "Backspace" && skillInput === "" && skills.length > 0) {
      removeSkill(skills[skills.length - 1]);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 rounded-xl">
      <h2 className="text-2xl font-semibold mb-3">Skills Section</h2>
      <div className="flex items-center mb-3">
        <Star className="w-5 h-5 text-gray-800 mr-2" />
        <h3 className="text-lg font-medium">Skills & Expertise</h3>
      </div>

      <div className="relative">
        <div className="flex flex-wrap bg-white gap-2 px-3 py-3 border border-black rounded-lg focus-within:ring-2 focus-within:ring-gray-300 min-h-[60px]">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="flex items-center px-3 py-1 bg-black text-white rounded-full text-sm"
            >
              {skill}
              <button
                onClick={() => removeSkill(skill)}
                className="ml-2 hover:text-red-300"
              >
                <X size={14} />
              </button>
            </span>
          ))}
          <input
            type="text"
            value={skillInput}
            onChange={handleSkillInputChange}
            onKeyDown={handleSkillKeyPress}
            className="flex-1 bg-transparent outline-none placeholder:text-gray-400 min-w-[180px]"
            placeholder={
              skills.length === 0
                ? "Type to add skills (e.g., React, Python, Figma)"
                : "Add more skills..."
            }
          />
        </div>

        {showSuggestions && (
          <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-400 rounded-lg shadow max-h-40 overflow-y-auto">
            {skillSuggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => addSkill(suggestion)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 border-b last:border-b-0"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
