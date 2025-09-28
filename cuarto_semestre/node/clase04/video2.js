 /**
  * 
  * Node js funciona de manera asíncrona
  * el event loop es el encargado de manejar las operaciones asíncronas 
  * cuando una operación asíncrona se completa, el event loop la coloca en la cola de tareas
  * y cuando el stack de llamadas está vacío, el event loop toma la primera tarea de la cola y la ejecuta
  * esto permite que Node.js maneje múltiples operaciones concurrentes sin bloquear el hilo principal
  * 
  * 
  *  El thread pool es un grupo de hilos de trabajo que pueden ejecutar tareas en paralelo  
  *  para operaciones que requieren mucho tiempo de CPU o I/O, como leer archivos, hacer consultas a bases de datos, etc.   
  *  El thread pool permite que Node.js maneje estas operaciones sin bloquear el event loop
  *    
  *   
  * El event queue es una cola de tareas que esperan a ser ejecutadas por el event loop
  * 
     
 */