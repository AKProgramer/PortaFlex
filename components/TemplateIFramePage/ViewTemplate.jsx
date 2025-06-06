import React from 'react'
import ProvidedSpaceLoader from '../Loader/ProvidedSpaceLoader'

export default function ViewTemplate({vercelLink}) {
  if(!vercelLink)
  {
    return <ProvidedSpaceLoader/>
  }
  return (
    <div className = "h-full w-full">
      <iframe
        src={vercelLink}
        title="Template Preview"
        width="100%"
        height="100%"
        style={{ border: 'none', display: 'block' }}
      ></iframe>
    </div>
  )
}
