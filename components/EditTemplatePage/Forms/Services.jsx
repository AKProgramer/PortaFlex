import { useState } from "react";

export default function Services() {
    const [service, setService] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-2">Services Section</h2>
            <div className="mb-4">
                <label className="block mb-1">Service Name</label>
                <input
                    className="border rounded px-3 py-2 w-full"
                    value={service}
                    onChange={e => setService(e.target.value)}
                    placeholder="Enter service name"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Description</label>
                <textarea
                    className="border rounded px-3 py-2 w-full"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Enter service description"
                />
            </div>
        </div>
    );
}
