## Desafio 14 - Implementacion de logger

- Agregue la carpeta logs donde tengo la configuracion del logger (logger.js) y un archivo donde se guardan los logs (errors.js)
- modifique los controllers y las rutas para que funcionen con el logger
- cambie los console.log() que tenia por loggers
- agregue una nueva ruta get llamada /loggerTest sobre el localhost para que muestre todos los logs

### cosas a tener en cuenta:

- inicie la ejecucion de la aplicacion con "npm run start"
- en el config.js de la carpeta config (en src) la aplicacion se esta ejecutando en el entorno productivo, para cambiarlo solo tenes que cambiar en la linea 5 "PRODUCTION" por "DEVELOPMENT"
- al estar en el entorno productivo cuando hagamos un GET al endpoint "/loggerTest" se mostraran por consola los loggers a partir del nivel info, si queremos ver todos los loggers hay que cambiar al entorno desarrollo como esta explicado en el item anterior
