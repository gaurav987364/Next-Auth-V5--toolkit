import React from 'react';

const layout = ({children} : {children : React.ReactNode}) => {
  return (
    <section className=' h-full flex items-center justify-center bg-gradient-to-r from-sky-400 to-green-400'>
        {children}
    </section>
  )
}

export default layout;