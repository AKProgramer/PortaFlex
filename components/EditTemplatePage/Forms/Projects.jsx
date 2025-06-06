import { useState } from "react";

export default function Projects() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-2">Projects Section</h2>
            <p className="text-gray-500 mb-8">This is the Projects section. Customize your projects here.</p>
            <div className="mb-4">
                <label className="block mb-1">Project Title</label>
                <input className="border rounded px-3 py-2 w-full" value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter project title" />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Description</label>
                <textarea className="border rounded px-3 py-2 w-full" value={description} onChange={e => setDescription(e.target.value)} placeholder="Enter project description" />
            </div>
        </div>
    );
}
