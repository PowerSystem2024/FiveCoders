
export function Button({children}) {
  return (
    <button className='w-full bg-blue-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 
    disabled:opacity-50 disabled:cursor-not-allowed'>{children}</button>
  )
}

