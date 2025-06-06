import { useState } from "react";

export default function Skills() {
    const [skills, setSkills] = useState("");
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-2">Skills Section</h2>
            <div className="mb-4">
                <label className="block mb-1">Skills</label>
                <input className="border rounded px-3 py-2 w-full" value={skills} onChange={e => setSkills(e.target.value)} placeholder="Enter your skills (comma separated)" />
            </div>
        </div>
    );
}
