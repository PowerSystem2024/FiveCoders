/**
 *  Sintesis del funcionamiento del Event Loop:
 *   
 *   * El event loop es un proceso continuo 
 *   * 1- Llega una solicitud al servidor y se coloca en el la cola de mensajes (event queue)
 *   * 2 - Revisa la cola de mensajes (event queue) para ver si hay tareas pendientes
 *   * 3 - Si hay tareas pendientes, toma la primera tarea de la cola y la ejecuta
 *   * 4 - Si no hay tareas pendientes, el event loop espera a que lleguen nuevas tareas    
 *   * 5 - Mantiene el hilo principal ocupado ejecutando tareas: asegura que el hilo principal siempre tenga 
 *         * algo que hacer ( si hay tareas pendientes en la cola, las ejecuta; si no, espera por nuevas tareas)
 *   
 *  */