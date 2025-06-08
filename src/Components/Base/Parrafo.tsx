import { ReactNode } from 'react';

const Parrafo = ({children} : {children : ReactNode}) => {
  return (
    <p className="text-lg text-gray-700 mb-4 text-justify">
      {children}
    </p>
  )
}

export default Parrafo
