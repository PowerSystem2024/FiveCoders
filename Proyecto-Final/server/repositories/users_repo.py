from server.models.user import User
#Simulación de base de datos
users_db = {
    "Gabriel": User(1, "Gabriel", "1231"),
    "Matias": User(2, "Matias", "1231"),
    "Llugany": User(3, "Llugany", "1231"),
    "Jonathan": User(4, "Jonathan",  "1231"),
    "Seleme": User(5, "Seleme", "1231")
}


class InMemoryUsersRepository:
    def __init__(self, data_source):
        self.data_source = data_source

    def find_by_name(self, name):
        users_data = self.data_source.get(name)
        return users_data


#Prueba de la clase InMemoryUsersRepository
#users_repo_instance = InMemoryUsersRepository(users_db)

#user1 = users_repo_instance.find_by_name("Gabriel")
#print(f"Usuario: {user1}")
