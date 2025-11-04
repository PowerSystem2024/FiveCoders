import React from 'react'

export function Label({children, htmlFor}) {
  return (
    <label className='block text-gray-600 text-sm font-normal mb-1.5' htmlFor={htmlFor}>
        {children}
        
    </label>
  )
}

export default Label