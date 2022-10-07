# Node: De cero a experto
+ [URL del curso en Udemy](https://www.udemy.com/course/node-de-cero-a-experto/)
+ [URL del repositorio en GitHub](https://github.com/petrix12/nodejs2022.git)


## Antes de iniciar:
1. Crear proyecto en la página de [GitHub](https://github.com) con el nombre: **nodejs2022**.
    + **Description**: Proyecto para seguir el curso de "Node: De cero a experto", creado por Fernando Herrera en Udemy.
    + **Public**.
2. En la ubicación raíz del proyecto en la terminal de la máquina local:
    + $ git init
    + $ git add .
    + $ git commit -m "Antes de iniciar"
    + $ git branch -M main
    + $ git remote add origin https://github.com/petrix12/nodejs2022.git
    + $ git push -u origin main


## Contenido del curso
### Sección 1: Introducción
#### 1. Introducción
#### 2. ¿Cómo funciona el curso?
#### 3. Instalaciones necesarias
+ **Instalaciones recomendadas**: https://gist.github.com/Klerith/177c153db77e566cb763f79e65d248bf

#### 4. ¿Cómo hacer preguntas?


### Sección 2: Fundamentos de Node
#### 5. Introducción a la sección
#### 6. Temas puntuales de la sección
#### 7. Preguntas comunes sobre Node
#### 8. Blocking vs Non Blocking I/O
+ https://github.com/Klerith/node-blocking-vs-non-blocking

#### 9. Hola Mundo en Node
#### 10. Ciclo de eventos de Node - Ejemplos
#### 11. Ciclo de vida de un proceso en Node
#### 12. Nodemon
+ https://www.npmjs.com/package/nodemon
+ Para instalar **nodemon** de forma global:
    + Abrir una terminal como administrador.
    + $ npm install -g nodemon

#### 13. Código fuente de la sección
+ **Código fuente de la sección**: recursos\node-hola-mundo-0.1.0.zip


### Sección 3: Reforzamiento de los temas necesarios para seguir el curso
#### 14. Introducción a la sección
#### 15. Temas puntuales de la sección
#### 16. Const vs Let vs Var
#### 17. Templates literales
#### 18. Destructuración de objetos
#### 19. Funciones de Flecha
#### 20. Callbacks
#### 21. Problemas comunes con los callbacks
#### 22. Callback Hell
#### 23. Promesas
#### 24. Promesas en cadena
#### 25. Async - Await
#### 26. Código fuente de la sección
+ **Código fuente de la sección**: https://www.udemy.com/course/node-de-cero-a-experto/learn/lecture/24616468#overview


### Sección 4: Bases de node
#### 27. Introducción a la sección
#### 28. Temas puntuales de la sección
#### 29. Inicio del proyecto - Sección 4
1. Crear **04-bases-node\app.js**:
    ```js
    const base = 5
    console.log('====================')
    console.log(`Tabla de multiplicar del ${base}`)
    console.log('====================')
    for(let i = 1; i <= 10; i++){
        console.log(`${base} x ${i} = ${base*i}`)
    }
    ```

#### 30. Requerir paquetes - require
+ **Documentación File system de Node**: https://nodejs.org/dist/latest-v16.x/docs/api/fs.html
1. Modificar **04-bases-node\app.js**:
    ```js
    const fs = require('fs')

    const base = 3
    let salida = ''

    console.clear();
    console.log('====================')
    console.log(`Tabla de multiplicar del ${base}`)
    console.log('====================')

    for(let i = 1; i <= 10; i++){
        salida += `${base} x ${i} = ${base*i}\n`
    }

    console.log(salida)
    fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        if(err) throw err
        console.log(`tabla-${base}.txt creada`)
    })
    ```

#### 31. Importar archivos de nuestro proyecto
1. Modificar **04-bases-node\app.js**:
    ```js
    const { crearArchivo } = require('./helpers/multiplicar')

    const base = 2

    console.clear();
    crearArchivo(base)
        .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
        .catch(err => console.log(err))
    ```
2. Crear **04-bases-node\helpers\multiplicar.js**:
    ```js
    const fs = require('fs');

    const crearArchivo = async( base = 5/* , listar = false, hasta = 10  */) => {
        try {
            let salida  = ''
            
            for( let i = 1; i <= 10; i++ ) {
                salida  += `${ base } x ${ i } = ${ base * i }\n`
            }

            console.log('====================')
            console.log('Tabla de multiplicar del ', base)
            console.log('====================')
            console.log(salida)

            fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida)
            return `tabla-${ base }.txt`;
        } catch (err) {
            throw err
        }
    }

    module.exports = { crearArchivo }
    ```

#### 32. Recibir información desde línea de comando
1. Modificar **04-bases-node\app.js**:
    ```js
    const { crearArchivo } = require('./helpers/multiplicar')

    console.clear()
    const [,, arg3 = 'base=5'] = process.argv
    const[, base = 7 ] = arg3.split('=')

    crearArchivo(base)
        .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
        .catch(err => console.log(err))
    ```
2. Enviar base al programa ejecutando:
    + $ node app.js --base=9

#### 33. package.json - init - install - uninstall
+ Paquete color npm: https://www.npmjs.com/package/colors
+ Paquete yargs npm: https://www.npmjs.com/package/yargs
1. Crear **04-bases-node\package.json**:
    ```json
    {
        "name": "04-bases-node",
        "version": "0.0.1",
        "description": "Es una simple tabla de multiplicar con archivo de texto",
        "main": "app.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "base3": "node app --base=3"
        },
        "author": "Pedro Bazó",
        "license": "MIT"
    }
    ```
    + **Nota**: también se puede crear ejecutando:
        + $ npm init
2. Ejecutar script:
    + $ npm run base3
3. Instalar dependencia color:
    + $ npm i colors
4. Instalar dependencia nodemon en modo de desarrollo:
    + $ npm install nodemon --save-dev
5. Desintalar dependencia nodemon:
    + $ npm uninstall nodemon
6. Desintalar dependencia colors:
    + $ npm uninstall colors
7. Instalar dependencia color con una versión específica:
    + $ npm i colors@1.3.0
    + para actualizar a la ultima versión: npm update

#### 34. Yargs
1. Instalar dependencia yargs:
    + $ npm i yargs
2. Modificar **04-bases-node\app.js**:
    ```js
    const { crearArchivo } = require('./helpers/multiplicar')
    const argv = require('yargs').argv

    console.clear()
    console.log('base: ', argv.base)
    ```

#### 35. Configuraciones de Yargs
1. Modificar **04-bases-node\app.js**:
    ```js
    const { crearArchivo } = require('./helpers/multiplicar')
    const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true
        })
        .option('l', {
            alias: 'listar',
            type: 'boolean',
            demandOption: true,
            default: false
        })
        .check((argv, options) => {
            if(isNaN(argv.b)){
                throw 'La base debe ser numerica'
            }
            return true
        })
        .argv

    console.clear()
    console.log(argv)


    crearArchivo(argv.b, argv.l)
        .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
        .catch(err => console.log(err))
    ```
2. Modificar **04-bases-node\helpers\multiplicar.js**:
    ```js
    const fs = require('fs');

    const crearArchivo = async( base = 5, listar = false) => {
        try {
            let salida  = ''
            
            for( let i = 1; i <= 10; i++ ) {
                salida  += `${ base } x ${ i } = ${ base * i }\n`
            }

            if ( listar ) {
                console.log('====================')
                console.log('Tabla de multiplicar del ', base)
                console.log('====================')
                console.log(salida)
            }
            fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida )
            return `tabla-${ base }.txt`;
        } catch (err) {
            throw err
        }
    }

    module.exports = { crearArchivo }
    ```
3. Probar Yargs:
    + $ node app --help
    + $ node app.js --base=5
    + $ node app.js --base=abc
    + $ node app.js --base=7 -l

#### 36. Configuración de Yargs independiente
1. Modificar **04-bases-node\app.js**:
    ```js
    const { crearArchivo } = require('./helpers/multiplicar')
    const argv = require('./config/yargs')

    console.clear()

    crearArchivo(argv.b, argv.l)
        .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
        .catch(err => console.log(err))
    ```
2. Crear **04-bases-node\config\yargs.js**:
    ```js
    const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        })
        .option('l', {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en consola'
        })
        .check( (argv, options) => {
            if( isNaN( argv.b ) ){
                throw 'La base tiene que ser un número'
            }
            return true;
        })
        .argv;

    module.exports = argv;
    ```

#### 37. Colores de la consola
1. Modificar **04-bases-node\app.js**:
    ```js
    const { crearArchivo } = require('./helpers/multiplicar')
    require('colors')
    const argv = require('./config/yargs')

    console.clear()

    crearArchivo(argv.b, argv.l)
        .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
        .catch(err => console.log(err))
    ```
2. Crear **04-bases-node\helpers\multiplicar.js**:
    ```js
    const fs = require('fs');
    const colors = require('colors');

    const crearArchivo = async( base = 5, listar = false) => {
        try {
            let salida  = ''
            
            for( let i = 1; i <= 10; i++ ) {
                salida  += `${ base } x ${ i } = ${ base * i }\n`
            }

            if ( listar ) {
                console.log('===================='.green)
                console.log('Tabla de multiplicar del '.red, colors.blue(base))
                console.log('===================='.green)
                console.log(salida)
            }
            fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida )
            return `tabla-${ base }.txt`;
        } catch (err) {
            throw err
        }
    }

    module.exports = { crearArchivo }
    ```

#### 38. Tarea - Tabla hasta X
1. Modificar **04-bases-node\config\yargs.js**:
    ```js
    const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        })
        .option('h', {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Este es el número hasta donde quieres la tabla'
        })
        .option('l', {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en consola'
        })
        .check( (argv, options) => {
            if( isNaN( argv.b ) ){
                throw 'La base tiene que ser un número'
            }
            return true;
        })
        .argv;

    module.exports = argv;
    ```
2. Modificar **04-bases-node\helpers\multiplicar.js**:
    ```js
    const fs = require('fs')
    const colors = require('colors')

    const crearArchivo = async( base = 5, listar = false, hasta = 10) => {
        try {
            let salida  = ''
            let consola = ''
            
            for( let i = 1; i <= hasta; i++ ) {
                salida  += `${ base } x ${ i } = ${ base * i }\n`
                consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n`;
            }

            if ( listar ) {
                console.log('===================='.green)
                console.log('Tabla de multiplicar del '.red, colors.blue(base))
                console.log('===================='.green)
                console.log(consola)
            }
            fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida )
            return `tabla-${ base }.txt`
        } catch (err) {
            throw err
        }
    }

    module.exports = { crearArchivo }
    ```
3. Modificar **04-bases-node\app.js**:
    ```js
    const { crearArchivo } = require('./helpers/multiplicar')
    require('colors')
    const argv = require('./config/yargs')

    console.clear()

    crearArchivo(argv.b, argv.l, argv.h)
        .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
        .catch(err => console.log(err))
    ```
4. Probar aplicación:
    + $ node app.js -b=5 -l -h=25

#### 39. Git - Preparar repositorio
#### 40. Respaldo del proyecto con en GitHub
+ Comando Git para regresar al ultimo commit:
    + $ git checkout -- .

#### 41. Código fuente de la sección
+ **Código fuente de la sección**: https://github.com/Klerith/curso-node-tabla


### Sección 5: Aplicación de consola interactiva - Tareas por hacer
#### 42. Introducción a la sección
2 min
Iniciar









    ```js
    ```






#### 43. Temas puntuales de la sección
1 min
Reproducir
#### 44. Demostración del objetivo final de la sección
4 min
Reproducir
#### 45. Inicio de proyecto - Tareas por hacer
4 min
Reproducir
#### 46. stdin - stdout - Readline
11 min
Reproducir
#### 47. Repetir el menú de forma infinita
8 min
Iniciar
#### 48. Nota para la siguiente clase:
1 min
Reproducir
#### 49. Construir el menú interactivo - Inquirer
9 min
Reproducir
#### 50. Opciones del menú interactivo
9 min
Reproducir
#### 51. Lógica para el manejo de las tareas por hacer
12 min
Reproducir
#### 52. Crear y listar tareas
12 min
Reproducir
#### 53. Transformar objeto a un arreglo - Detalles estéticos
10 min
Reproducir
#### 54. Guardar tareas en un archivo de texto
8 min
Reproducir
#### 55. Leer nuestra base de datos
7 min
Reproducir
#### 56. Tarea - Cargar tareas
6 min
Reproducir
#### 57. Listar tareas
9 min
Reproducir
#### 58. Tareas completadas y pendientes - opciones del menú
7 min
Reproducir
#### 59. Listado para borrar
10 min
Reproducir
#### 60. Confirmar y borrar tarea
7 min
Reproducir
#### 61. Múltiples selecciones
6 min
Reproducir
#### 62. Marcar como completadas o pendientes las tareas
9 min
Iniciar


### Sección 6: Aplicación de Clima - GeoLaction + OpenWeatherMaps
63. Código fuente de la sección
1 min
Reproducir
64. Inicio de sección
2 min
Iniciar
65. Temas puntuales de la sección
1 min
Reproducir
66. Demostración del objetivo final de la sección
2 min
Reproducir
67. Inicio de proyecto - ClimaApp
7 min
Reproducir
68. Menu de la aplicación
5 min
Reproducir
69. Modelo para controlar la aplicación
8 min
Iniciar
70. Enlaces para la siguiente clase
1 min
Reproducir
71. Realizar peticiones HTTP desde Node
11 min
Iniciar
72. Enlaces para la próxima clase
1 min
Reproducir
73. Mapbox Search API y Token de acceso
9 min
Reproducir
74. Crear instancias de Axios
6 min
Reproducir
75. Variables de entorno
7 min
Reproducir
76. Listar los países de forma interactiva
11 min
Reproducir
77. OpenWeather - Información del clima
7 min
Reproducir
78. Obtener información del clima del lugar seleccionado
4 min
Reproducir
79. Resolución de la tarea del clima
10 min
Reproducir
80. Persistencia en las búsquedas
9 min
Reproducir
81. Leer del archivo JSON
4 min
Reproducir
82. Resolución de la tarea - Leer archivo y capitalizar
7 min
Iniciar
83. Código fuente de la sección
1 min
Reproducir
84. Introducción a la sección
2 min
Iniciar
85. Temas puntuales de la sección
1 min
Reproducir
86. Inicio de proyecto - WebServer
8 min
Reproducir
87. Request y Response
12 min
Reproducir
88. Introducción a EXPRESS
7 min
Reproducir
89. Servir contenido estático
8 min
Reproducir
90. Servir un sitio web completo
7 min
Reproducir
91. Handlebars
8 min
Reproducir
92. Argumentos desde el controlador
4 min
Reproducir
93. Usando parciales con HBS
11 min
Reproducir
94. Preparar Webserver para subirlo a un hosting
8 min
Reproducir
95. Heroku - Subiendo nuestra aplicación a producción
10 min
Reproducir
96. Desplegando aplicaciones de Angular y React
8 min
Reproducir
97. Subir los cambios a Heroku
4 min
Iniciar
98. Código fuente de la sección
1 min
Reproducir
99. Introducción a la sección
2 min
Reproducir
100. Iniciando el proyecto - RESTServer
6 min
Reproducir
101. Express basado en clases
8 min
Reproducir
102. Peticiones HTTP - GET - PUT - POST - DELETE
7 min
Iniciar
103. Códigos de respuestas HTTP
1 min
Reproducir
104. Usando códigos de respuesta HTTP en Express
6 min
Reproducir
105. CORS - Middleware
4 min
Reproducir
106. Separar las rutas y el controlador de la clase
14 min
Reproducir
107. Obtener datos de un POST
6 min
Reproducir
108. Parámetros de segmento y query
8 min
Reproducir
109. Respaldo del RESTServer a GitHub
6 min
Reproducir
110. Subir el RESTServer a Heroku
6 min
Reproducir
111. Pro Tip: Ambiente de producción y desarrollo en Postman
4 min
Iniciar
112. Código fuente de la sección
1 min
Reproducir
113. Introducción a la sección
2 min
Iniciar
114. Temas puntuales de la sección
1 min
Reproducir
115. Alcances del proyecto - RESTServer
2 min
Reproducir
116. Configuración de MongoDB - MongoAtlas
8 min
Reproducir
117. MongoDB Compass - Prueba de conexión
5 min
Reproducir
118. Mongoose - Conectarnos a la base de datos
9 min
Reproducir
119. Modelo de Usuario
9 min
Reproducir
120. POST: Creando un usuario en la colección
9 min
Reproducir
121. BcryptJS - Encriptando la contraseña
8 min
Reproducir
122. Validar campos obligatorios - Email
9 min
Reproducir
123. Validar todos los campos necesarios
10 min
Reproducir
124. Validar rol contra base de datos
9 min
Reproducir
125. Centralizar la validación del rol
8 min
Reproducir
126. Tarea - Custom validation - EmailExiste
5 min
Reproducir
127. PUT: Actualizar información del usuario
12 min
Reproducir
128. Validaciones adicionales en el PUT
8 min
Reproducir
129. GET: Obtener todos los usuarios de forma paginada
10 min
Reproducir
130. Retornar número total de registros en una colección
10 min
Reproducir
131. Delete: Borrando un usuario de la base de datos
7 min
Reproducir
132. Desplegar RESTServer en Heroku
5 min
Reproducir
133. Variables de entorno personalizadas Heroku
10 min
Iniciar
134. Código fuente de la sección
1 min
Reproducir
135. Introducción a la sección
3 min
Iniciar
136. Temas puntuales de la sección
1 min
Reproducir
137. Introducción a los Tokens
6 min
Iniciar
138. Código para leer el payload y fecha de expiración de un Token - NO USAR
1 min
Reproducir
139. Información importante sobre los JWT
9 min
Reproducir
140. Crear ruta autenticación - Auth - Login
9 min
Reproducir
141. Login de usuario
8 min
Reproducir
142. Generar un JWT
9 min
Reproducir
143. Cambiar visualmente _id por uid en Mongoose
3 min
Reproducir
144. Proteger rutas mediante uso de Token - Middlewares
12 min
Reproducir
145. Obtener la información del usuario autenticado
10 min
Reproducir
146. Middleware: Verificar Rol de administrador
7 min
Reproducir
147. Middleware: Tiene rol
9 min
Reproducir
148. Optimizar importaciones en Node
5 min
Reproducir
149. Desplegar en Heroku
8 min
Iniciar
150. Código fuente de la sección
1 min
Reproducir
151. Introducción a la sección
2 min
Iniciar
152. Temas puntuales de la sección
1 min
Iniciar
153. Link para comenzar la integración con Google Sign-in
1 min
Reproducir
154. Generar API Key y API Secret de Google
10 min
Reproducir
155. Usuario de Google - Frontend
8 min
Reproducir
156. Ruta para manejar autenticación de Google
8 min
Reproducir
157. Validar Token de Google - Backend
9 min
Reproducir
158. Crear un usuario personalizado con las credenciales de Google
7 min
Reproducir
159. Logout - Google Identity
5 min
Reproducir
160. Publicar a Heroku - Google SignIn
5 min
Reproducir
161. Pro Tip: Generar la documentación automática de nuestros servicios
6 min
Iniciar
162. Código fuente de la sección
1 min
Reproducir
163. Introducción a la sección
1 min
Iniciar
164. Temas puntuales de la sección
1 min
Reproducir
165. Continuación de proyecto - Rest Server
2 min
Reproducir
166. CRUD y rutas de Categorías
11 min
Reproducir
167. Modelo Categoria
6 min
Reproducir
168. Crear una categoria
12 min
Reproducir
169. Tarea - CRUD de Categorías
5 min
Reproducir
170. Resolución de la tarea - Crud categorías
10 min
Reproducir
171. Resolución de la tarea - Crud categorías - Parte 2
12 min
Reproducir
172. Modelo de producto y rutas
8 min
Reproducir
173. Resolución de la tarea - CRUD y Rutas de Productos
18 min
Reproducir
174. Ruta para realizar búsquedas
7 min
Reproducir
175. Búsquedas en base de datos
10 min
Reproducir
176. Buscar por otros argumentos
8 min
Reproducir
177. Buscar en otras colecciones
8 min
Reproducir
178. Desplegar en Heroku
5 min
Iniciar
179. Código fuente de la sección
1 min
Reproducir
180. Introducción a la sección
3 min
Iniciar
181. Temas puntuales de la sección
1 min
Reproducir
182. Continuación del proyecto - RestServer
6 min
Reproducir
183. Subir archivos
13 min
Reproducir
184. Validar la extensión
6 min
Reproducir
185. Ubicar y cambiar nombre
4 min
Reproducir
186. Helper - SubirArchivo
11 min
Reproducir
187. Crear carpetas de destino
7 min
Reproducir
188. Ruta para actualizar imágenes de Usuarios y Productos
10 min
Reproducir
189. Actualizar imagen de usuario
10 min
Reproducir
190. Resolución de la tarea - Desestructurar de undefined
5 min
Reproducir
191. Borrar archivos del servidor
6 min
Reproducir
192. Servicio para mostrar las imágenes
9 min
Reproducir
193. Mostrar imagen de relleno
8 min
Reproducir
194. Cloudinary - Servicio para imágenes y videos
5 min
Reproducir
195. Carga de imágenes a Cloudinary
9 min
Reproducir
196. Borrar imágenes de Cloudinary
5 min
Reproducir
197. Desplegar en Heroku
4 min
Iniciar
198. Código fuente de la sección
1 min
Reproducir
199. Introducción a la sección
3 min
Iniciar
200. Temas puntuales de la sección
1 min
Reproducir
201. ¿Qué son los sockets y para qué nos pueden servir?
4 min
Reproducir
202. Inicio del proyecto - Fundamentos sobre Web Sockets
9 min
Reproducir
203. Instalación de socket.io
8 min
Reproducir
204. Configuración de socket.io - Front-End
8 min
Reproducir
205. Mensajes de conexión y desconexión - Cliente
7 min
Reproducir
206. Emitir desde el cliente - Escuchar en el servidor
7 min
Reproducir
207. Emitir desde el servidor - Escuchar en el cliente
7 min
Reproducir
208. Retroalimentación de emisiones del cliente hacia el servidor
5 min
Reproducir
209. Broadcast - Ordenar nuestro código
7 min
Reproducir
210. Sockets a Heroku
8 min
Iniciar
211. Código fuente de la sección
1 min
Reproducir
212. Introducción a la sección
2 min
Iniciar
213. Temas puntuales de la sección
1 min
Reproducir
214. Inicio de proyecto - Aplicación de Colas
5 min
Reproducir
215. Clase para centralizar la lógica de los tickets
12 min
Reproducir
216. Modelo - Siguiente y atender nuevo ticket
9 min
Reproducir
217. Socket: Siguiente Ticket
11 min
Reproducir
218. Preparar pantalla de escritorio
6 min
Reproducir
219. Socket: Atender un ticket
12 min
Reproducir
220. Mostrar cola de tickets en pantalla
9 min
Reproducir
221. Tarea - Tickets pendientes por atender
9 min
Reproducir
222. Reproducir audio cuando se asigna un ticket
4 min
Iniciar
223. Código fuente de la sección
1 min
Reproducir
224. Introducción a la sección
2 min
Iniciar
225. Temas puntuales de la sección
1 min
Reproducir
226. Inicio de proyecto - SocketChat
7 min
Reproducir
227. Configurar Socket.io
10 min
Reproducir
228. Diseño del login y su funcionamiento
14 min
Reproducir
229. Validar el JWT - Servicio
6 min
Reproducir
230. Validar Token - Frontend
8 min
Reproducir
231. Validar socket con JWT - Backend
12 min
Reproducir
232. HTML y JS que usaremos
8 min
Reproducir
233. Modelo para el manejo de usuarios conectados y mensajes
7 min
Reproducir
234. Listado de usuarios conectados
8 min
Reproducir
235. Mostar en el HTML los usuarios conectados
5 min
Reproducir
236. Envío de mensajes a toda la sala de chat
8 min
Reproducir
237. Historial de mensajes en el HTML
6 min
Reproducir
238. Mensajes privados
9 min
Iniciar
239. Código fuente de la sección
1 min
Iniciar
240. Temas de la sección
1 min
Reproducir
241. Inicio de proyecto - ts-rest-server
9 min
Reproducir
242. Crear el servidor de express y sus middlewares
10 min
Reproducir
243. Nodemon y TSC --watch
6 min
Reproducir
244. Rutas de mi aplicación
13 min
Reproducir
245. Middlewares necesarios
6 min
Reproducir
246. MySQL - Instalaciones y conexión
7 min
Reproducir
247. Tabla de Usuarios
4 min
Reproducir
248. Sequelize
8 min
Reproducir
249. Modelo de Usuario
4 min
Reproducir
250. Obtener Usuarios
7 min
Reproducir
251. Crear y actualizar usuarios
9 min
Reproducir
252. Eliminar registros
5 min
Iniciar
253. Código fuente de la sección
1 min
Iniciar
254. Más sobre mis cursos
1 min
Reproducir
255. Cierre del curso
5 min
Iniciar
256. Temas puntuales de la sección
1 min
Reproducir
257. Inicio del proyecto - Socket Chat
3 min
Reproducir
258. Clase para controlar los usuarios del chat
11 min
Reproducir
259. Front-End: Conectar un usuario
11 min
Reproducir
260. Desconectar usuarios
8 min
Reproducir
261. Enviando un mensaje a todo el grupo
8 min
Reproducir
262. Enviar un mensaje a un usuario en específico
6 min
Reproducir
263. Salas de Chat
8 min
Reproducir
264. Mensajes y notificaciones a las salas de chat
9 min
Reproducir
265. Respaldo a GitHub de nuestra aplicación de Chat
2 min
Reproducir
266. Diseño de nuestra sala de chat
4 min
Reproducir
267. Renderizar usuarios
10 min
Reproducir
268. Obtener el ID del usuario conectado
3 min
Reproducir
269. Enviar y renderizar mensajes
13 min
Reproducir
270. Mejorar la forma de renderizar mensajes
11 min
Reproducir
271. Propuestas para ejercicios del chat
1 min
Reproducir
272. Subir cambios a GitHub - SocketChat
2 min
Iniciar
273. Código fuente de la sección
1 min