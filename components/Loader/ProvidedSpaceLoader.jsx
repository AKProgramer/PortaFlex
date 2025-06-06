import React from 'react'

export default function ProvidedSpaceLoader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
      <div style={{ width: 40, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18" stroke="#000" strokeWidth="4" opacity="0.2" />
          <path d="M38 20c0-9.94-8.06-18-18-18" stroke="#000" strokeWidth="4" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="1s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>
    </div>
  )
}
