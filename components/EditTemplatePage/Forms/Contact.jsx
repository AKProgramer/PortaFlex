import { useState } from "react";
import { User, Mail, MapPin, Navigation } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: ""
    });
    const [isGettingLocation, setIsGettingLocation] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const getCurrentLocation = () => {
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by this browser.');
            return;
        }

        setIsGettingLocation(true);

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                
                try {
                    // Use a reverse geocoding service to get address
                    const response = await fetch(
                        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
                    );
                    const data = await response.json();
                    
                    const address = `${data.locality || ''}, ${data.principalSubdivision || ''}, ${data.countryName || ''}`.replace(/^,\s*|,\s*$/g, '');
                    
                    setFormData(prev => ({
                        ...prev,
                        address: address || `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`
                    }));
                } catch (error) {
                    // Fallback to coordinates if geocoding fails
                    setFormData(prev => ({
                        ...prev,
                        address: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`
                    }));
                }
                
                setIsGettingLocation(false);
            },
            (error) => {
                setIsGettingLocation(false);
                let message = 'Unable to get location. ';
                
                switch(error.code) {
                    case error.PERMISSION_DENIED:
                        message += 'Please allow location access and try again.';
                        break;
                    case error.POSITION_UNAVAILABLE:
                        message += 'Location information is unavailable.';
                        break;
                    case error.TIMEOUT:
                        message += 'Location request timed out.';
                        break;
                    default:
                        message += 'An unknown error occurred.';
                        break;
                }
                
                alert(message);
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 60000
            }
        );
    };

    const handleSubmit = () => {
        if (!formData.name.trim() || !formData.email.trim()) {
            alert('Please fill in your name and email.');
            return;
        }
        
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        alert('Contact information saved successfully!');
        console.log('Form data:', formData);
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex items-center mb-6">
                <User className="w-5 h-5 text-black mr-2" />
                <h2 className="text-xl font-semibold text-black">Contact Information</h2>
            </div>

            {/* Contact Form */}
            <div className="mb-10">
                <div className="mb-6">
                    <label className="block text-sm font-medium text-black mb-2">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-black rounded-xl focus:border-gray-600 focus:ring-4 focus:ring-gray-200 transition-all duration-300 outline-none"
                        placeholder="Enter your full name"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-black mb-2">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-black rounded-xl focus:border-gray-600 focus:ring-4 focus:ring-gray-200 transition-all duration-300 outline-none"
                        placeholder="Enter your email address"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-black mb-2">
                        Address
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 pr-12 border-2 border-black rounded-xl focus:border-gray-600 focus:ring-4 focus:ring-gray-200 transition-all duration-300 outline-none"
                            placeholder="Enter your address or use current location"
                        />
                        <button
                            type="button"
                            onClick={getCurrentLocation}
                            disabled={isGettingLocation}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-black hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
                            title="Use current location"
                        >
                            {isGettingLocation ? (
                                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                <Navigation className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                        Click the location icon to use your current location
                    </p>
                </div>

                <button
                    type="button"
                    onClick={handleSubmit}
                    className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!formData.name.trim() || !formData.email.trim()}
                >
                    Save Contact Information
                </button>
            </div>

            {/* Contact Information Display */}
            {(formData.name || formData.email || formData.address) && (
                <div>
                    <h3 className="text-lg font-semibold mb-6 text-black">Current Information</h3>
                    <div className="border-2 border-black rounded-xl p-6">
                        {formData.name && (
                            <div className="mb-4">
                                <span className="text-sm font-medium text-gray-600">Name: </span>
                                <span className="text-sm text-black">{formData.name}</span>
                            </div>
                        )}
                        
                        {formData.email && (
                            <div className="mb-4">
                                <span className="text-sm font-medium text-gray-600">Email: </span>
                                <span className="text-sm text-black">{formData.email}</span>
                            </div>
                        )}
                        
                        {formData.address && (
                            <div>
                                <span className="text-sm font-medium text-gray-600">Address: </span>
                                <span className="text-sm text-black">{formData.address}</span>
                            </div>
                        )}
                    </div>
                </div>
            )}
            
            {!formData.name && !formData.email && !formData.address && (
                <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-xl">
                    <User className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-500">No contact information added yet. Fill out the form above!</p>
                </div>
            )}
        </div>
    );
}