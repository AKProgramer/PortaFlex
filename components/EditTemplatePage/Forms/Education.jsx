import { useState } from "react";
export default function Education() {
    const [school, setSchool] = useState("");
    const [degree, setDegree] = useState("");
    const [year, setYear] = useState("");
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-2">Education Section</h2>
            <div className="mb-4">
                <label className="block mb-1">School/University</label>
                <input className="border rounded px-3 py-2 w-full" value={school} onChange={e => setSchool(e.target.value)} placeholder="Enter school/university" />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Degree</label>
                <input className="border rounded px-3 py-2 w-full" value={degree} onChange={e => setDegree(e.target.value)} placeholder="Enter degree" />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Year</label>
                <input className="border rounded px-3 py-2 w-full" value={year} onChange={e => setYear(e.target.value)} placeholder="Enter year" />
            </div>
        </div>
    );
}
