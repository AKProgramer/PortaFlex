import { useState } from "react";

export default function Navbar() {
    const [options, setOptions] = useState([
        { label: "Projects", value: "Projects" },
        { label: "Contact", value: "Contact" },
        { label: "Skills", value: "Skills" },
        { label: "Services", value: "Services" },
    ]);
    const [selected, setSelected] = useState([]);
    const handleToggle = (item) => {
        setSelected((prev) =>
            prev.includes(item)
                ? prev.filter((i) => i !== item)
                : [...prev, item]
        );
    };
    return (
        <nav>
            <div className="flex-2">
                <h2 className="text-2xl font-semibold mb-2">
                    What options would you like to include in Navbar?
                </h2>
                <p className="text-gray-500 mb-8">
                    Include essential sections in your Navbar based on your needs.
                    <br /> You can customize these options anytime to best fit your
                    website.
                </p>
                {/* Option buttons */}
                <div className="space-y-4">
                    {options.map((item) => (
                        <div key={item.value} className="flex items-center gap-5">
                            <button
                                className={`border border-black rounded-lg w-36 h-9 ${selected.includes(item.value) ? 'bg-black text-white' : ''}`}
                                onClick={() => handleToggle(item.value)}
                                type="button"
                            >
                                {item.label}
                            </button>
                            <span className="text-black text-lg">✎</span>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
}
