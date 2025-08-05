import { useState } from "react";
import { Plus, X, Edit, Trash2 } from "lucide-react";

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [currentProject, setCurrentProject] = useState({
        name: "",
        tools: [],
        role: "",
        description: ""
    });
    const [toolInput, setToolInput] = useState("");

    const addProject = () => {
        if (currentProject.name.trim()) {
            setProjects([...projects, { ...currentProject, id: Date.now() }]);
            setCurrentProject({ name: "", tools: [], role: "", description: "" });
        }
    };

    const removeProject = (id) => {
        setProjects(projects.filter(project => project.id !== id));
    };

    const updateCurrentProject = (field, value) => {
        setCurrentProject(prev => ({ ...prev, [field]: value }));
    };

    const editProject = (project) => {
        setCurrentProject(project);
        removeProject(project.id);
    };

    const addTool = (tool) => {
        if (tool.trim() && !currentProject.tools.includes(tool.trim())) {
            updateCurrentProject('tools', [...currentProject.tools, tool.trim()]);
            setToolInput("");
        }
    };

    const removeTool = (toolToRemove) => {
        updateCurrentProject('tools', currentProject.tools.filter(tool => tool !== toolToRemove));
    };

    const handleToolKeyPress = (e) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            addTool(toolInput);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex items-center mb-6">
                <Plus className="w-5 h-5 text-black mr-2" />
                <h2 className="text-xl font-semibold text-black">Projects</h2>
            </div>
            
            {/* Add Project Form */}
            <div className="mb-10">
                <div className="mb-6">
                    <label className="block text-sm font-medium text-black mb-2">Project Name *</label>
                    <input 
                        className="w-full px-4 py-3 border-2 border-black rounded-xl focus:border-gray-600 focus:ring-4 focus:ring-gray-200 transition-all duration-300 outline-none" 
                        value={currentProject.name} 
                        onChange={(e) => updateCurrentProject('name', e.target.value)} 
                        placeholder="Enter project name" 
                    />
                </div>
                
                <div className="mb-6">
                    <label className="block text-sm font-medium text-black mb-2">Role</label>
                    <input 
                        className="w-full px-4 py-3 border-2 border-black rounded-xl focus:border-gray-600 focus:ring-4 focus:ring-gray-200 transition-all duration-300 outline-none" 
                        value={currentProject.role} 
                        onChange={(e) => updateCurrentProject('role', e.target.value)} 
                        placeholder="Your role in this project" 
                    />
                </div>
                
                <div className="mb-6">
                    <label className="block text-sm font-medium text-black mb-2">Tools & Technologies</label>
                    <div className="w-full px-4 py-4 border-2 border-black rounded-xl focus-within:border-gray-600 focus-within:ring-4 focus-within:ring-gray-200 transition-all duration-300 min-h-[60px] flex flex-wrap gap-2 items-start">
                        {currentProject.tools.map((tool, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center bg-black text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                            >
                                {tool}
                                <button
                                    type="button"
                                    onClick={() => removeTool(tool)}
                                    className="ml-2 hover:bg-white/20 rounded-full p-0.5 transition-colors"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            </span>
                        ))}
                        
                        <input 
                            className="flex-1 outline-none bg-transparent text-black min-w-[200px] placeholder-gray-500" 
                            value={toolInput}
                            onChange={(e) => setToolInput(e.target.value)}
                            onKeyDown={handleToolKeyPress}
                            placeholder={currentProject.tools.length === 0 ? "Type to add tools (e.g., React, Node.js, MongoDB)" : "Add more tools..."}
                        />
                    </div>
                </div>
                
                <div className="mb-6">
                    <label className="block text-sm font-medium text-black mb-2">Description</label>
                    <textarea 
                        className="w-full px-4 py-3 border-2 border-black rounded-xl focus:border-gray-600 focus:ring-4 focus:ring-gray-200 transition-all duration-300 outline-none h-24 resize-none" 
                        value={currentProject.description} 
                        onChange={(e) => updateCurrentProject('description', e.target.value)} 
                        placeholder="Describe the project, its goals, and key achievements" 
                    />
                </div>
                
                <button 
                    onClick={addProject}
                    className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!currentProject.name.trim()}
                >
                    Add Project
                </button>
            </div>

            {/* Projects List */}
            {projects.length > 0 && (
                <div>
                    <h3 className="text-lg font-semibold mb-6 text-black">Your Projects ({projects.length})</h3>
                    <div className="space-y-6">
                        {projects.map((project) => (
                            <div key={project.id} className="border-2 border-black rounded-xl p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="text-lg font-semibold text-black">{project.name}</h4>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => editProject(project)}
                                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                        >
                                            <Edit className="w-4 h-4 text-black" />
                                        </button>
                                        <button
                                            onClick={() => removeProject(project.id)}
                                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                        >
                                            <Trash2 className="w-4 h-4 text-black" />
                                        </button>
                                    </div>
                                </div>
                                
                                {project.role && (
                                    <div className="mb-4">
                                        <span className="text-sm font-medium text-gray-600">Role: </span>
                                        <span className="text-sm text-black">{project.role}</span>
                                    </div>
                                )}
                                
                                {project.tools.length > 0 && (
                                    <div className="mb-4">
                                        <span className="text-sm font-medium text-gray-600 block mb-2">Tools & Technologies:</span>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tools.map((tool, index) => (
                                                <span key={index} className="bg-black text-white px-3 py-1 rounded-lg text-sm font-medium">
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                
                                {project.description && (
                                    <div>
                                        <span className="text-sm font-medium text-gray-600 block mb-2">Description:</span>
                                        <p className="text-sm text-black leading-relaxed">{project.description}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            
            {projects.length === 0 && (
                <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-xl">
                    <Plus className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-500">No projects added yet. Add your first project above!</p>
                </div>
            )}
        </div>
    );
}