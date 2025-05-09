from server.repositories.users_repo import InMemoryUsersRepository
class AuthService:
    def __init__(self, user_repository: InMemoryUsersRepository):
        self.user_repository = user_repository
    def login(self, username, pw):
        user = self.user_repository.find_by_name(username)
        if user and user.pw == pw:
            return user
        else:
            return None


