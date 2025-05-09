from server.repositories.users_repo import InMemoryUsersRepository
from server.models.user import User

class AuthService:
    def __init__(self, user_repository: InMemoryUsersRepository):
        self.user_repository = user_repository
    def login(self, username, password):
        user_data = self.user_repository.find_by_name(username)

        if user_data:
            if user_data.get("pw") == password:
                user_instance = User(user_data.get("id"), user_data.get("name"), user_data.get("pw"))
                return user_instance
            else:
                return None


