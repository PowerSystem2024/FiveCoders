/**
 * Gracias a Node.js podemos ejecutar JavaScript fuera del navegador pudiendo usarlo en 
 * cualquier plataforma como una aplicación más. Esto le da a js la capacidd de hacer las mismas cosas 
 * que otros lenguajes de backend como Python, Ruby, Java, etc.
 * 
 * Uno de los usos más comunes de Node.js es crear servidores web, pero también podemos usarlo para 
 * automatizar tareas, crear herramientas de línea de comandos, desarrollar aplicaciones de escritorio, etc.
 * 
 * Ventajas: 
 *   - funciona en un solo hilo (single-threaded) lo que lo hace más eficiente en cuanto a recursos. 
 *      Usa un bloque de eventos para procesar llamadas no bloqueantes de I/O de forma concurrente en un solo hilo.
 *      Esto tiene como ventaja menos coste de memoria que si usara varios hilos (multi-threaded).
 * 
 *   - usa motor v8 de Google, el mismo que usa Chrome, lo que le da un buen rendimiento en la ejecución de código JavaScript.
 * 
 *  - se puede crear paquetes y subirlos a npm (Node Package Manager) para que otros desarrolladores los usen.
 * 
 * Limitaciones:
 *  
 * 
 *   - en tareas intensivas de CPU, Node.js puede no ser la mejor opción, ya que puede bloquear el
 *  hilo principal y afectar el rendimiento. Tiene el módulo 'worker_threads' para crear hilos adicionales, 
 *   pero no es tan eficiente como otros lenguajes y tiene impacto en la memoria.
 * 
 *  - calidad irregular de los paquetes en npm, ya que cualquiera puede subir un paquete sin revisión previa.
 * 
 * 
 */