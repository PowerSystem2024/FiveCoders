import { Card } from '../components/ui';

function AboutPage() {
  return (
 <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Acerca del Proyecto</h1>

      <Card>
        <h2 className="text-2xl font-bold mb-4 text-white">Gestor de Tareas</h2>
        <p className="text-white mb-4">
          Bienvenido a nuestro Gestor de Tareas, una aplicación diseñada para ayudarte a organizar y gestionar tus tareas diarias de manera eficiente.
        </p>
     

      
      </Card>
    </div>
  )
}

export default AboutPage