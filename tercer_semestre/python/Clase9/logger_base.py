import logging

logger = logging
logger.basicConfig(
    level=logging.INFO,
    format='%(asctime)s: %(levelname)s [%(filename)s:%(lineno)s] %(message)s',
    handlers=[
        logging.FileHandler('capa_datos_persona.log'),
        logging.StreamHandler()
    ]
)
log = logger.getLogger('capa_datos_persona')