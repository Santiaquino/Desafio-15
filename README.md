## Desafio 15 - Practica de intregracion sobre el ecommerce

- Agregue la carpeta middlewares donde estan los archivos para el manejo del cambio de contraseña.
- se agrego un nuevo campo para el modelo de usuario llamado "premium".
- se agrego una nueva ruta llamada "/api/users/premium/:uid" para cambiar el rol de un usuario, puede cambiar de "user" a "premium" y viceversa.

### cosas a tener en cuenta:

- inicie la ejecucion de la aplicacion con "npm run start"
- en el config.js de la carpeta config (en src) la aplicacion se esta ejecutando en el entorno productivo, para cambiarlo solo tenes que cambiar en la linea 5 "PRODUCTION" por "DEVELOPMENT"
- al estar en el entorno productivo cuando hagamos un GET al endpoint "/loggerTest" se mostraran por consola los loggers a partir del nivel info, si queremos ver todos los loggers hay que cambiar al entorno desarrollo como esta explicado en el item anterior
