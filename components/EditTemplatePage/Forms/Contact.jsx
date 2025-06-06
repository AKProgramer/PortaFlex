import { useState } from "react";

export default function Contact() {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-2">Contact Section</h2>
            <p className="text-gray-500 mb-8">This is the Contact section. Add your contact details here.</p>
            <div className="mb-4">
                <label className="block mb-1">Email</label>
                <input className="border rounded px-3 py-2 w-full" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email" />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Phone</label>
                <input className="border rounded px-3 py-2 w-full" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Enter phone number" />
            </div>
        </div>
    );
}
