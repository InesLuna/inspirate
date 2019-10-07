# Inspírate

## Description
Inspírate es una web destinada a creativos. Su propósito es proporcionar un punto de partida para iniciar cualquier tipo de proyecto de creación ayudando a evitar el miedo que puede generar enfrentarse a una página en blanco. Para conseguirlo. Inspírate proporciona puntos de partida des de diferentes fuentes y lenguajes: una palabra, una cita celebre y un collage de imágenes creado a partir de fotos. Los tres elementos son elegidos aleatoriamente.


## MVP (DOM - CANVAS)
Responsive con medidas para 3 tipos de dispositivos: móvil, tablet y laptop.
Consta de una landing page, una página donde se muestran las fuentes de inspiración proporcionadas, una página de registro a partir de un formulario, una página de FAQs y un sistema para poder hacer login.
Común a todas las páginas: menú de navegación, en tablet y pantalla de ordenador footer.
Landing-page: slide de fotografías, imago y logo, pequeña descripción de los objetivos y apartados de la web. 
Formulario de registro:

- Campos obligatorios:

  - Nombre

  - Nombre de usuario

  - Email

  - Contraseña

- Campos no obligatorios:

  - País

  - Ciudad

  - Campo de creación

  - Suscripción diaria a mailing

FAQs: Dos apartados, el primero con preguntas frecuentes sobre que es la inspiración y como conseguirla, el segundo sobre preguntas frecuentes sobre el funcionamiento de la web y el mailing.

Login: Validación de usuario para permitir acceso a la página personal.

Inspirational page: collage de imagenes a partir de las fotografias obtenidas de una API


## Backlog

Pagina personal donde poder almacenar las fuentes de inspiración generadas para poder volver a ellas si no se han acabado de usar o se quieren usar como punto de partida en un trabajo posterior.
Inspirational page: Palabra random obtenida a partir de una API, cita random obtenida a través de una API

## Data structure
Después


## States y States Transitions
Después


## Task
- Diseño de los layaouts de la web en sus tres versiones.

- Obtención de los recursos.

- Creación de la estructura HTML de la web

- Primera fase general de estilos CSS. Los espacios de contenido dinámico realizarlos a través de parches de contenido estático para poder plantear los css así como definir las clases e ids que se usarán para crear los métodos dinámicos.

- Averiguar como funciona el tema de las apiKey

- Crear las llamadas a las APIS y los métodos para insertar el contenido en la web de manera dinámica.

  - Llamada y carga de API palabra.

  - Llamada y carga de API frase.

  - Llamada y carga de API imágenes.

- Crear los métodos para la validación del formulario.

  - Para evitar que no se rellenen los requisitos obligatorios.

  - Validar email

  - Validar password

  - Solo permitir utilizar el submit button cuando los campos obligatorios hayan sido completados.

- Crear los métodos para la validación de lógin.

  - Comprobar si el usuario existe.

  - Si existe permitir el acceso y generar saludo.

  - Si el mail existe per no coincide con la contraseña generar mensaje sobre contraseña errónea.

  - Si el mail/usuario no existe generar mensaje de error y proporcionar link para el registro de usuario.

- Revisar CSS

- Crear pdf presentación.


## Links


### Trello
https://trello.com/b/2uiMWal0/web-m1-inspirate


### Git
URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)
