import React, { useState } from 'react'
import { Github, Linkedin, Facebook, Twitter, Globe, Plus, X, User, Briefcase, FileText, Star } from 'lucide-react'

export default function Hero() {
  const [name, setName] = useState("")
  const [profession, setProfession] = useState("")
  const [headline, setHeadline] = useState("")
  const [resumeLink, setResumeLink] = useState("")
  const [skills, setSkills] = useState([])
  const [skillInput, setSkillInput] = useState("")
  const [skillSuggestions, setSkillSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  // Social links management
  const [socialLinks, setSocialLinks] = useState([
    { id: 'github', name: 'GitHub', icon: Github, url: '', placeholder: 'github.com/username' },
    { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, url: '', placeholder: 'linkedin.com/in/username' },
    { id: 'facebook', name: 'Facebook', icon: Facebook, url: '', placeholder: 'facebook.com/username' },
    { id: 'twitter', name: 'Twitter', icon: Twitter, url: '', placeholder: 'twitter.com/username' }
  ])

  // Comprehensive skills database
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

  // Filter skills based on input
  const filterSkills = (input) => {
    if (!input.trim()) return []
    
    return skillsDatabase
      .filter(skill => 
        skill.toLowerCase().includes(input.toLowerCase()) &&
        !skills.some(selectedSkill => selectedSkill.toLowerCase() === skill.toLowerCase())
      )
      .slice(0, 8)
  }

  // Handle skill input change
  const handleSkillInputChange = (e) => {
    const value = e.target.value
    setSkillInput(value)
    
    if (value.trim()) {
      const suggestions = filterSkills(value)
      setSkillSuggestions(suggestions)
      setShowSuggestions(suggestions.length > 0)
    } else {
      setShowSuggestions(false)
    }
  }

  // Add skill to selected skills
  const addSkill = (skill) => {
    if (!skills.some(s => s.toLowerCase() === skill.toLowerCase())) {
      setSkills([...skills, skill])
    }
    setSkillInput("")
    setShowSuggestions(false)
  }

  // Remove skill from selected skills
  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove))
  }

  // Handle Enter key press
  const handleSkillKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (skillInput.trim() && skillSuggestions.length > 0) {
        addSkill(skillSuggestions[0])
      } else if (skillInput.trim()) {
        addSkill(skillInput.trim())
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false)
    } else if (e.key === 'Backspace' && skillInput === '' && skills.length > 0) {
      const lastSkill = skills[skills.length - 1]
      removeSkill(lastSkill)
    }
  }

  // Update social link URL
  const updateSocialLink = (id, url) => {
    setSocialLinks(socialLinks.map(link => 
      link.id === id ? { ...link, url } : link
    ))
  }

  // Remove social link
  const removeSocialLink = (id) => {
    setSocialLinks(socialLinks.filter(link => link.id !== id))
  }

  // Add social link back
  const addSocialLink = (linkToAdd) => {
    const existingIds = socialLinks.map(link => link.id)
    if (!existingIds.includes(linkToAdd.id)) {
      setSocialLinks([...socialLinks, linkToAdd])
    }
  }

  // Available social links to add back
  const availableLinks = [
    { id: 'github', name: 'GitHub', icon: Github, url: '', placeholder: 'github.com/username' },
    { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, url: '', placeholder: 'linkedin.com/in/username' },
    { id: 'facebook', name: 'Facebook', icon: Facebook, url: '', placeholder: 'facebook.com/username' },
    { id: 'twitter', name: 'Twitter', icon: Twitter, url: '', placeholder: 'twitter.com/username' }
  ].filter(link => !socialLinks.some(existing => existing.id === link.id))

  return (
    <div className="">
      <div className="">
        <div className=" md:p-12">
          {/* Personal Information */}
          <div className="mb-10">
            <div className="flex items-center mb-6">
              <User className="w-5 h-5 text-black mr-2" />
              <h2 className="text-xl font-semibold text-black">Personal Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  className="w-full px-4 py-3 bg-white border-2 border-black rounded-xl focus:border-gray-600 focus:ring-4 focus:ring-gray-200 transition-all duration-300 outline-none hover:border-gray-600" 
                  value={name} 
                  onChange={e => setName(e.target.value)} 
                  placeholder="Enter your full name" 
                />
              </div>
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">Profession</label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    className="w-full pl-10 pr-4 py-3 bg-white border-2 border-black rounded-xl focus:border-gray-600 focus:ring-4 focus:ring-gray-200 transition-all duration-300 outline-none hover:border-gray-600" 
                    value={profession} 
                    onChange={e => setProfession(e.target.value)} 
                    placeholder="Your profession or title" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Headline */}
          <div className="mb-10">
            <label className="block text-sm font-medium text-gray-700 mb-2">Professional Headline</label>
            <input 
              className="w-full px-4 py-3 bg-white border-2 border-black rounded-xl focus:border-gray-600 focus:ring-4 focus:ring-gray-200 transition-all duration-300 outline-none hover:border-gray-600" 
              value={headline} 
              onChange={e => setHeadline(e.target.value)} 
              placeholder="A compelling headline that describes your expertise" 
            />
          </div>

          {/* Skills Section */}
          <div className="mb-10">
            <div className="flex items-center mb-6">
              <Star className="w-5 h-5 text-black mr-2" />
              <h2 className="text-xl font-semibold text-black">Skills & Expertise</h2>
            </div>
            <div className="relative">
              <div className="w-full px-4 py-4 bg-white border-2 border-black rounded-xl focus-within:border-gray-600 focus-within:ring-4 focus-within:ring-gray-200 transition-all duration-300 min-h-[60px] flex flex-wrap gap-2 items-start">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center bg-black text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => removeSkill(skill)}
                      className="ml-2 hover:bg-white/20 rounded-full p-0.5 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                
                <input 
                  className="flex-1 outline-none bg-transparent text-black min-w-[200px] placeholder-gray-500" 
                  value={skillInput}
                  onChange={handleSkillInputChange}
                  onKeyDown={handleSkillKeyPress}
                  placeholder={skills.length === 0 ? "Type to add skills (e.g., React, Python, Figma)" : "Add more skills..."}
                />
              </div>
              
              {showSuggestions && skillSuggestions.length > 0 && (
                <div className="absolute z-10 w-full mt-2 bg-white rounded-xl shadow-2xl border-2 border-black max-h-48 overflow-y-auto">
                  {skillSuggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200 last:border-b-0 transition-all duration-200"
                      onClick={() => addSkill(suggestion)}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Social Links */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-black mr-2" />
                <h2 className="text-xl font-semibold text-black">Social Links</h2>
              </div>
              {availableLinks.length > 0 && (
                <div className="relative group">
                  <button className="flex items-center px-3 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                    <Plus className="w-4 h-4 mr-1" />
                    Add Link
                  </button>
                  <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-xl border-2 border-black min-w-[160px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                    {availableLinks.map((link) => {
                      const IconComponent = link.icon
                      return (
                        <button
                          key={link.id}
                          onClick={() => addSocialLink(link)}
                          className="w-full flex items-center px-4 py-3 hover:bg-gray-50 text-left transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          <IconComponent className="w-4 h-4 mr-2 text-gray-600" />
                          {link.name}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon
                return (
                  <div key={link.id} className="relative group">
                    <label className=" text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <IconComponent className="w-4 h-4 mr-2" />
                      {link.name} Profile
                    </label>
                    <div className="relative">
                      <input 
                        className="w-full px-4 py-3 pr-12 bg-white border-2 border-black rounded-xl focus:border-gray-600 focus:ring-4 focus:ring-gray-200 transition-all duration-300 outline-none hover:border-gray-600" 
                        value={link.url} 
                        onChange={e => updateSocialLink(link.id, e.target.value)} 
                        placeholder={link.placeholder} 
                      />
                      <button
                        onClick={() => removeSocialLink(link.id)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Resume Link */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FileText className="w-5 h-5 text-black mr-2" />
              <label className="text-xl font-semibold text-black">Resume/CV</label>
            </div>
            <input 
              className="w-full px-4 py-3 bg-white border-2 border-black rounded-xl focus:border-gray-600 focus:ring-4 focus:ring-gray-200 transition-all duration-300 outline-none hover:border-gray-600" 
              value={resumeLink} 
              onChange={e => setResumeLink(e.target.value)} 
              placeholder="Link to your resume/CV (Google Drive, PDF, etc.)" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}