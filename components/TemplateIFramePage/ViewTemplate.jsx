import React from 'react'

export default function ViewTemplate({vercelLink}) {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <iframe
        src={vercelLink}
        title="Template Preview"
        width="100%"
        height="100%"
        style={{ border: 'none', display: 'block' }}
        allowFullScreen
      ></iframe>
    </div>
  )
}
