import React from 'react'

function Status() {
  return (
    <div>
    <div className="mt-4 flex items-center gap-4 text-slate-400">
      <div className="relative w-max">
        <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-green-400 opacity-10"></div>
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-green-400"></div>
      </div>
      <div className="text-lg">Available for work</div>
    </div>
  </div>
  )
}

export default Status