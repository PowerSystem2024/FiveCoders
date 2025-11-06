import { forwardRef } from "react"

export const Input = forwardRef((props, ref) => {
  return (
    <input ref={ref} type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" {...props}/>
  )
})

