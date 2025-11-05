import React from 'react'

export function Label({children, htmlFor}) {
  return (
    <label className='block text-gray-100 text-sm font-bold mb-2' htmlFor={htmlFor}>
        {children}
        
    </label>
  )
}

export default Label