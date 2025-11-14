import { Link } from 'react-router-dom'
import { Card } from '../components/ui'


function NotFound() {
  return (
    <div className='h-[calc(100vh-px)] flex justify-center  items-center flex-col'>
     <Card>
        <h1 className='text-4xl font-bold my-2 text-center'>404</h1>
        <p className='text-xl' text-center>Pagina no encontrada</p>
        <Link to='/' className='text-blue-500 hover:underline'>Volver al inicio</Link>
     </Card>
    </div>
  )
}

export default NotFound