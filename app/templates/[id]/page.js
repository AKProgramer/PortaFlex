import React from 'react'

export default function SpecficTemplatePage() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <iframe
        src="https://www.wikipedia.org"
        title="Wikipedia"
        width="100%"
        height="100%"
        style={{ border: 'none', display: 'block' }}
        allowFullScreen
      />
    </div>
  )
}
