import { ReactNode } from 'react';

const Parrafo = ({children} : {children : ReactNode}) => {
  return (
    <div className="text-lg text-gray-700 mb-4 text-justify dark:text-gray-200">
      {children}
    </div>
  )
}

export default Parrafo
