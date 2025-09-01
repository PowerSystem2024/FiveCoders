# Creacion del juego Avatar
## Clase 1
<sub>
Creamos la estructura sobre la que trabajaremos en el proyecto. Los archivos son los siguientes:
Avatar:
    public:
        assets:
        css:
        js:
            avatar.js
        avatar.html
Armamos secciones seleccionar-personajes, seleccionar-ataque, mensaje y reiniciar.
En html trabajamos con labels, inputs y button.
Y en el archivo js trabajamos con la funcion del boton-personaje (para seleccionar personaje)</sub>

### Tarea: 
<sub>
Agregar en la función seleccionarPersonajeJugador() una estructura de control que identifique el personaje que se ha elegido y a través del alert() mostrar nuestra selección, si lo tienen lista la pueden mostrar en el Zoom.</sub>
<sub>
Utilice el metodo ".getElementsByName" para colocar todos los personajes con la etiqueta name "personaje" en una variable a la que llame "personajes". Luego con un for itero sobre los nombres y con la propiedad ".checked" corroboro si es el que el usuario a selecciona. Y finalmente devuelvo el alert.</sub>

### Que es el DOM?
<sub>
Document Object Model: Modelo de objetos de Documentos
El DOM es la forma en la que el navegador por dentro estructura las etiquetas HTML para que se puedan manipular en codigo JavaScript (js).</sub>
<sub>
El navegador es un objeto que internamente lo llama JavaScript: window, estas son cada una de las pestañas del navegador</sub>
<sub>
Tambien esta la barra de la direccion de los sitios web y esta es la que detecta que la pagina web cargue,pero no es la pagina web en si el HTML y JavaScript con sus botones y demas viven dentro del window y se llama: document</sub>
<sub>
window es pensar en el navegador entero y en los eventos del navegador.</sub>
<sub>
document: es pensar especificamente en lo que esta dentro de la etiqueta HTML.</sub>
<sub>
donde se pone titulo (h1), un parrafo (p), o un boton (button)</sub>
<sub>
Ahora a un boton se le da click, y este click se le puede pegar una funcion y que esta se ejecute o se invoquem, a esto se lo llama: escuchador de eventos</sub>

### Como se llama?
<sub>eventListener esto significa que el navegador entero esta escuchando en espera de que le demos click al boton o cualquier otra cosa como evento, por ejemplo el evento de que la pagina termine de cargar, tambien es un evento y le podemos pegar una funcion, tambien podemos poner una funcion que al cambiar el tamaño del navegador, genere cosas como el acomodamiento de las partes segun el dispositivo que estamos utilizando</sub>
<sub>
Esta funcion se llama responsive: configura el alto y ancho de un sitio web, para dar formato al sitio ante el uso de cualquier dispositivo, en diferentes tamaños</sub>

## Clase 2
<sub>
Colocamos un evento para la ventana, cuando esta se cargue llamara una funcion llamada "iniciarJuego" (window.addEventListener('load', iniciarJuego))</sub>
<sub>
Agregamos elemento tipo span con el id 'personaje-jugador' en el HTML, lo hacemos dinamico en Js con el comando document.getElementById('personaje-jugador') asignando lo a la variable 'spanPersonajeJugador' y luego con la propiedad .innerHTML le asignamos el nombre del personaje seleccionado por el jugador</sub>

### Tarea
<sub>
Agregar en la función aleatoria() para que la PC elija su personaje y muestre su nombre, esta la pueden mostrar en el Zoom, debería estar lista, todo se debe mostrar de manera grupal, también voy a estar esperando la ejecución del algoritmo: El Salto del caballo en JS</sub>
<sub>
Agregamos una un nuevo Escuchador de eventos, cuando clickemos el boton de seleccionarPersonaje se invoca la funcion seleccionarPersonjaeEnemigo</sub>
<sub>
En la funcion verificamos que no se elija el mismo personaje ya elegido por el jugador mientras que se va elijiendo aleatoriamente un personaje a traves de la funcion elegirPersonajeAleatorio, todo dentro de un ciclo while que termina cuando el personaje elegido por el jugador y el personaje aleatorio enemigo sean distintos</sub>
<sub>
Una vez elegido y verificado el personaje aleatorio, pasamos el nombre del personaje con la primer letra en mayuscula y lo asignamos a un elemento span en el HTML con el id 'personaje-enemigo' creado anteriormente, con la propiedad '.innerHTML'</sub>

## Clase 3
<sub>
Implementamos la variable de ataqueJugador, que el usuario al clickear el boton del ataque para seleccionar el que desee, y la variable ataqueEnemigo, que utilizamos un sistema aleatorio para elegir el ataque.</sub>
<sub>
Ahora colocamos un eventListener y una funcion para cada tipo de ataque (Punio, Patada y Barrida) ligados a los botones en HTML. 
Las funciones de ataques dentro asignan el tipo de ataque en la variable y muestran una alerta de que ataque se selecciono, luego llaman a la funcion ataqueAleatorioEnemigo que elije uno al azar</sub>
<sub>
REGLAS: El sistema del juego va a ser que el punio le gana a la barida, la patada le gana a el punio y la barrida le gana a la patada </sub>

### Agregados adicionales
<sub>
En las funciones de ataques quite las alertas y siguiente a eso agregue la funcion combate, esta modifica el mensaje del HTML con el id 'mensaje-combate' y un if verifico: 
    Si los ataques del enemigo son iguales, no se hacen danio.
    Si el jugador gana el intercambio de ataques (segun las reglas) el enemigo pierde vida.
    Si el jugador pierde el intercambio de ataques el jugador pierde vida
Cada uno devuelve un mensaje con que ataques se usaron, quien gano y que personaje perdio vida</sub>
<sub>
Tambien agregue variables globales vidaJugador, vidaEnemigo, estas para utilizarlas con un sistema de vidas, y las variables personajeJugador, personajeEnemigo para tener los valores constantemente.</sub>
<sub>
Luego agregue un sistema de vida a traves de la funcion elegirVidaPersonajes, invocada en la funcion seleccionarPersonajeJugador, a traves de un condicional en el que si se algunos personajes dependiendo su elemento tienen una ventaja de vida: zuko es fuego, katara es agua, toph es tierra y aang es aire; y las ventajas van asi fuego gana al agua, agua gana a la tierra, tierra le gana al aire, aire le gana al fuego.
Los que ganan tiene 4 vida en relacion al otro que tienen 3</sub>
<sub>
Otra funcion que agregue es mostrarVida invocada debajo de la anterior y en la funcion combate, que lo que hace es ir cambiando el numero de la vida de cada uno.</sub>



<sub>
</sub>