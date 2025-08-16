import psycopg2 as pg #Esto es para poder cenectarnos a Postgre

conexion = pg.connect(user = 'postgres',password = 'admin',host = '127.0.0.1',port = '5432',database = 'test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'INSERT INTO persona (nombre, apellido, email)VALUES (%s, %s, %s)'
            valores = (
                ("Carlos", "Lara", "clara@mail.com"),
                ("Marco", "Canto", "mcanto@mail.com"),
                ("Marcelo", "Cuenca", "cuanceM@mail.com")
            )# Es una tupla
            cursor.executemany(sentencia, valores) # De esta manera ejecutamos la sentencia
            # conexion.commit() esto se utiliza para guardar los cambios en la base de datos
            registros_insertados = cursor.rowcount
            print(f'Los registros son: {registros_insertados}')

except Exception as e:
    print(f'Ocurri un error: {e}')
finally:
    conexion.close()


