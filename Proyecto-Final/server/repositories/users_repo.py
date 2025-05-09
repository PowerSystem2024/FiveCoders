#Simulación de base de datos
users_db = {
    "Gabriel": {"id": 1, "name": "Gabriel", "pw": "1231"},
    "Matias": {"id": 2, "name": "Matias", "pw": "1231"},
    "Llugany": {"id": 3, "name": "Llugany", "pw": "1231"},
    "Jonathan": {"id": 4, "name": "Jonathan", "pw": "1231"},
    "Seleme": {"id": 5, "name": "Seleme", "pw": "1231"}
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
