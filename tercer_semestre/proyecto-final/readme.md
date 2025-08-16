# BibliotecaPlus

Solución de gestión de bibliotecas para terminal, desarrollada en Python y PostgreSQL, con soporte multiusuario y diferenciación de roles.

## Requisitos previos

- Python 3.10 o superior
- PostgreSQL instalado y corriendo
- Acceso a una base de datos PostgreSQL (ver configuración en `config.py`)

## 1. Crear entorno virtual

En la raíz del proyecto, ejecuta:

```sh
python3 -m venv venv
```

Activa el entorno virtual:

- En Linux/Mac:
  ```sh
  source venv/bin/activate
  ```
- En Windows:
  ```sh
  venv\Scripts\activate
  ```

## 2. Instalar dependencias

Instala las dependencias necesarias con pip:

```sh
pip install psycopg2-binary colorama tabulate
```

## 3. Configurar la base de datos

Asegúrate de que los datos de conexión en [`config.py`](config.py) coincidan con tu instalación de PostgreSQL y que la base de datos exista.

Ejemplo de contenido de `config.py`:
```python
CONFIG_BD = {
    'dbname': 'biblioteca',
    'user': 'tu_usuario',
    'password': 'tu_contraseña',
    'host': 'localhost',
    'port': '5432'
}
```

## 4. Inicializar y ejecutar la aplicación

Desde la raíz del proyecto, ejecuta:

```sh
python main.py
```

Esto creará las tablas necesarias (si no existen) y lanzará el menú principal de la aplicación.

---

**Notas:**
- El usuario administrador general por defecto es:
  - Email: `admin@admin.com`
  - Clave: `admin123`
- Puedes modificar estos valores en [`config.py`](config.py).

---
