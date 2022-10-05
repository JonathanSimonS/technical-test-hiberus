# 💻 Prueba técnica Hiberus 🚀

## Curso Frontent - Héroes y heroínas 2022

La prueba consiste en realizar una página de login y registro con CRUD de usuarios, después de registrarnos y de iniciar sesión correctamente, la API nos devuelve un JWT, que nos autoriza a realizar las diferentes peticiones a la API.

A partir de ahí podremos visionar a los usuarios de la base de datos y gestionar su información.

<h2 align='center'> Herramientas utilizadas para desarrollar la prueba</h2>

<div align="center">
    <img src="https://img.shields.io/badge/-React-grey?&style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/-javascript-F7DF1E?&style=for-the-badge&logo=javascript&logoColor=black" />
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
    <img src="https://img.shields.io/badge/-css3-1572B6?&style=for-the-badge&logo=css3&logoColor=white" />
    <img src="https://img.shields.io/badge/Bootstrap-38B2AC?style=for-the-badge&logo=bootstrap&logoColor=white" />
    <img src="https://img.shields.io/badge/-VSCode-007ACC?&style=for-the-badge&logo=visual-studio-code&logoColor=white" />
    <img src="https://img.shields.io/badge/-Git-F05032?&style=for-the-badge&logo=git&logoColor=white" /> 
    <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />
</div>

## 🔨 Funcionalidades del proyecto

- `Registro/Creación de usuarios`
- `Login de usuario`
- `Listado de usuarios`
- `Actualización y borrado`
- `Muestra información del usuario logado`
- `Barra de búsqueda de usuarios mediante email`


## 🔧 Instalación 

* En el directorio del proyecto instalamos los paquetes necesarios con: 



> npm install


* Arrancamos la aplicación con:


> npm start





## 💡 Decisiones tomadas durante el desarrollo


- `1` - Estudio de la API para hacerme una idea de los componentes y servicios que tendría que utilizar y como se iban a comportar.
- `2` - Diseñar la estructura de carpetas, los componentes los he dividido en *container* (componentes con funcionalidades extensas y llamadas a API) y *pure* (componentes puros, que apenas tienen funcionalidades). Las *páginas* contendrán componentes a renderizar condicionalmente, una carpeta para las *rutas* y otra con los *servicios*.

<div align='center'>

![Estructuración de carpetas](https://user-images.githubusercontent.com/56316451/193955113-70e56f31-833d-4912-85e2-89d00b2bde6b.png)

</div>

- `3` - Creación del enrutado con rutas protegidas, para no tener acceso al listado sin estar logado ni volver a la *Home* si tienes una sesión abierta.
- `4` - Creación de componentes con las funciones necesarias e implementación de los servicios.
- `5` - Aplicar estilos globales, documentar servicios y hacer limpieza de  código.

## 🤔 Problemas/Dificultades encontrados y soluciones implementadas

* Al borrar un usuario los cambios no se efectuaban directamente, tenía que recargar la página manualmente.
    - Lo conseguí filtrando el array original de usuarios con todos los usuario excepto el usuario borrado. 


* Al actualizar un usuario me pasaba igual, los cambios se efectuaban pero no se mostraban correctamente.
    - Lo resolví haciendo un mapeo del array comparando los id del usuario ítem con el usuario actualizado.


* Cuando se listaban los usuarios no me parecía lógico que pudieses borrar el mismo con el que habías iniciado sesión.
    - Para resolverlo guardé al usuario logueado en el localStorage y apliqué un renderizado condicional, en vez de la opción de borrado, implementé un modal para ver sus datos.

* Tuve problemas con las rutas, ya que no me redirigian ni las protegía correctamente.
    - Asi que decidí crear un componente *router* en el que mediante el usuario logado y Navigate, si tienes la sesión iniciado no puedes ir a la página de *Home*, y si no la tienes no puedes acceder a ver la lista de usuarios.


## ⏳Tiempo aproximado dedicado al desarrollo de la prueba técnica
* Realizar el proyecto me llevó aproximadamente 3 días
