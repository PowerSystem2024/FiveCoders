import asyncio
import websockets
import json
import traceback 

async def send_message(websocket, message):
    """Envía un mensaje JSON al servidor."""
    try:
        await websocket.send(json.dumps(message))
    except websockets.exceptions.ConnectionClosed:
        print("ERROR: No se pudo enviar el mensaje. Conexión cerrada.")
        raise
    except Exception as e:
        print(f"ERROR al enviar el mensaje: {e}")
        traceback.print_exc()
        raise

async def receive_message(websocket):
    """Recibe y parsea un mensaje JSON del servidor."""
    try:
        response_str = await websocket.recv()
        response = json.loads(response_str)
        return response
    except websockets.exceptions.ConnectionClosed:
        print("ERROR: No se pudo recibir el mensaje. Conexión cerrada.")
        raise
    except json.JSONDecodeError:
        print(f"ERROR: Respuesta del servidor no es JSON: {response_str}")
        raise
    except Exception as e:
        print(f"ERROR al recibir el mensaje: {e}")
        traceback.print_exc()
        raise

async def connect_and_interact():
    """Establece la conexión y maneja la interacción con el usuario."""
    uri = "ws://localhost:8765"
    websocket = None

    try:
        print(f"Intentando conectar a {uri}...")
        websocket = await websockets.connect(uri)
        print("Conectado al servidor.")

        while True:
            print("\n--- Menú de Autenticación ---")
            print("1. Iniciar Sesión")
            print("2. Salir")
            choice = input("Seleccione una opción: ")

            if choice == "1":
                username = input("Nombre de usuario: ")
                password = input("Contraseña: ")

                login_message = {
                    "type": "login",
                    "username": username,
                    "password": password
                }

                await send_message(websocket, login_message)
                print("Enviando solicitud de login...")

                response = await receive_message(websocket)

                if response.get("type") == "login_response":
                    if response.get("success"):
                        print(f"Login exitoso: {response.get('message')}")
                    else:
                        print(f"Login fallido: {response.get('message')}")
                elif response.get("type") == "error":
                    print(f"Error del servidor: {response.get('message')}")
                else:
                    print(f"Respuesta desconocida del servidor: {response}")

            elif choice == "2":
                print("Cerrando conexión y saliendo...")
                break
            else:
                print("Opción inválida. Intente de nuevo.")

    except ConnectionRefusedError:
        print(f"ERROR: No se pudo conectar al servidor en {uri}. Asegúrese de que el servidor esté corriendo.")
    except websockets.exceptions.ConnectionClosedOK:
        print("Conexión cerrada por el servidor.")
    except websockets.exceptions.ConnectionClosedError as e:
        print(f"Conexión cerrada con error: {e}")
    except Exception as e:
        print(f"ERROR inesperado en el cliente: {e}")
    finally:
        if websocket and not websocket.closed:
            await websocket.close()
            print("Conexión WebSocket cerrada.")

if __name__ == "__main__":
    asyncio.run(connect_and_interact())