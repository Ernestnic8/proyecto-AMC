import { ReactNode } from 'react'

const Background = ({children} : {children: ReactNode}) => {
  return (
    <div className="min-h-screen bg-white/60 flex items-center justify-center p-6">
      <div className="max-w-4xl p-8 rounded-2xl shadow-xl backdrop-blur-lg">
        {children}
      </div>
    </div>
  )
}

export default Background
