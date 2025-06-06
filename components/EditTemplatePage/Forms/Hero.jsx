import React, { useState } from 'react'

export default function Hero() {
  const [headline, setHeadline] = useState("")
  const [subheadline, setSubheadline] = useState("")
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Hero Section</h2>
      <div className="mb-4">
        <label className="block mb-1">Headline</label>
        <input className="border rounded px-3 py-2 w-full" value={headline} onChange={e => setHeadline(e.target.value)} placeholder="Enter headline" />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Subheadline</label>
        <input className="border rounded px-3 py-2 w-full" value={subheadline} onChange={e => setSubheadline(e.target.value)} placeholder="Enter subheadline" />
      </div>
    </div>
  )
}
