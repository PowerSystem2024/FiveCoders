import asyncio
import websockets
import traceback
import json

# Importa tus componentes
from server.repositories.users_repo import InMemoryUsersRepository, users_db
from server.services.auth_users import AuthService
from server.controllers.auth_controller import AuthController

# Inicializa los componentes siguiendo el patrón
users_repo = InMemoryUsersRepository(users_db)
auth_service = AuthService(users_repo)
auth_controller = AuthController(auth_service)

connected_clients = set()

async def handle_client(websocket):
    connected_clients.add(websocket)
    try:
        async for message in websocket:
            print(f"Mensaje recibido del cliente: {message}")
            try:
                data = json.loads(message)
                if data.get("type") == "login":
                    await auth_controller.handle_login(websocket, data)
                else:
                    response = {
                        "type": "error",
                        "message": "Tipo de mensaje no soportado"
                    }
                    await websocket.send(json.dumps(response))
            except Exception as e:
                response = {
                    "type": "error",
                    "message": f"Error procesando mensaje: {e}"
                }
                await websocket.send(json.dumps(response))
    except websockets.exceptions.ConnectionClosed:
        print("Cliente desconectado")
    except Exception as e:
        print("Error:", e)
        traceback.print_exc()
    finally:
        connected_clients.remove(websocket)

async def main():
    async with websockets.serve(handle_client, "localhost", 8765):
        print("Servidor WebSocket escuchando en ws://localhost:8765")
        await asyncio.Future()  # Ejecutar para siempre

if __name__ == "__main__":
    asyncio.run(main())

