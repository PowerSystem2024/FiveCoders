import psycopg2 as pg #Esto es para poder cenectarnos a Postgre

conexion = pg.connect(user = 'postgres',password = 'admin',host = '127.0.0.1',port = '5432',database = 'test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'DELETE FROM persona WHERE id_persona IN %s'
            entrada = input("Ingrese los numero de registro a eliminar (separados por comas): ")
            valores = (entrada,) # Es una tupla de valores
            cursor.execute(sentencia, valores) # De esta manera ejecutamos la sentencia
            registros_eliminados = cursor.rowcount
            print(f'Los registros eliminados son: {registros_eliminados}')

except Exception as e:
    print(f'Ocurri un error: {e}')
finally:
    conexion.close()


