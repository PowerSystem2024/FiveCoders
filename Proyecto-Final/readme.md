# Biblio-WebSockets

## Requisitos

- Python 3.11 o superior
- Dependencia: websockets (instala con pip install websockets)
- Se recomienda usar un entorno virtual

## Instalación y permisos

1. Crea y activa el entorno virtual (opcional pero recomendado):

   python3 -m venv .venv
   source .venv/bin/activate

2. Instala la dependencia:

   pip install websockets

3. Da permisos de ejecución a los scripts (solo la primera vez):

   chmod +x server/runserver.sh client/runclient.sh

## Ejecución

1. Inicia el servidor en una terminal desde la raíz del proyecto:

   ./run_server.sh

2. Inicia el cliente en otra terminal desde la raíz del proyecto:

   ./runclient.sh

## Usuario de prueba

- Usuario: Gabriel
- Contraseña: 1231

Presiona Ctrl+C para salir.