import json
from server.services.auth_users import AuthService


class AuthController:
    def __init__(self, auth_service: AuthService):
        self.auth_service = auth_service

    async def handle_login(self, websocket, message_data):

        username = message_data.get("username")
        password = message_data.get("password")

        if not username or not password:
            response = {"type": "login_response", "success": False, "message": "Faltan nombre de usuario o contraseña."}
        else:
            user = self.auth_service.login(username, password) # El servicio maneja la lógica de búsqueda y verificación

            if user:
                response = {
                    "type": "login_response",
                    "success": True,
                    "message": f"Bienvenido, {user.name}!",
                    "user_id": user.id,
                    "username": user.name
                }
            else:
                response = {"type": "login_response", "success": False, "message": "Nombre de usuario o contraseña incorrectos."}

        await websocket.send(json.dumps(response))
