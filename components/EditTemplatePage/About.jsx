import React, { useState } from 'react'

export default function About() {
  const [aboutData, setAboutData] = useState({
    aboutText: '',
    imageUrl: ''
  });

  const handleInputChange = (field, value) => {
    setAboutData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">About Section</h2>
      
      {/* About Me Text Area */}
      <div className="space-y-2">
        <label htmlFor="aboutText" className="block text-sm font-medium text-gray-700">
          About Me
        </label>
        <textarea
          id="aboutText"
          rows={8}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical"
          placeholder="Write about yourself, your background, skills, interests, and what makes you unique..."
          value={aboutData.aboutText}
          onChange={(e) => handleInputChange('aboutText', e.target.value)}
        />
        <p className="text-xs text-gray-500">
          {aboutData.aboutText.length} characters
        </p>
      </div>

      {/* Image URL Input */}
      <div className="space-y-2">
        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
          Profile Image URL
        </label>
        <input
          type="url"
          id="imageUrl"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="https://example.com/your-image.jpg"
          value={aboutData.imageUrl}
          onChange={(e) => handleInputChange('imageUrl', e.target.value)}
        />
        <p className="text-xs text-gray-500">
          Enter a valid URL to your profile image
        </p>
      </div>

      {/* Image Preview */}
      {aboutData.imageUrl && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Image Preview
          </label>
          <div className="border border-gray-300 rounded-md p-4 bg-gray-50">
            <img
              src={aboutData.imageUrl}
              alt="Profile preview"
              className="w-32 h-32 object-cover rounded-lg mx-auto"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div 
              className="w-32 h-32 bg-gray-200 rounded-lg mx-auto items-center justify-center text-gray-500 text-sm"
              style={{ display: 'none' }}
            >
              Invalid Image URL
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
