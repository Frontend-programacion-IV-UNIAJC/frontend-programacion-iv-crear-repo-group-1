# BiblioTech

Proyecto de Programación IV - Frontend y Experiencia de Usuario.

## Descripción

BiblioTech es una aplicación web que permite explorar un catálogo de libros, realizar búsquedas, filtrar por categorías y consultar información individual de cada libro.

## Tecnologías utilizadas

Astro
JavaScript
HTML
CSS
TypeScript

## API utilizada

**Open Library**

Endpoint:

https://openlibrary.org/search.json?q=ingenieria&limit=12

La información de los libros se obtiene mediante una petición a la API y se adapta a la estructura utilizada por BiblioTech.

## Correspondencia de campos de la API

| Campo en BiblioTech | Campo de Open Library        | Cómo se obtiene                             |
| ------------------- | ---------------------------- | ------------------------------------------- |
| id                  | key                          | Se extrae el identificador final de la ruta |
| titulo              | title                        | Se obtiene directamente                     |
| autor               | author_name                  | Se unen los nombres de los autores          |
| categoria           | subject                      | Se utiliza la primera categoría disponible  |
| imagen              | cover_i                      | Se construye la dirección de la portada     |
| anio                | first_publish_year           | Se obtiene el año de publicación            |
| editorial           | publisher                    | Se utiliza la primera editorial disponible  |
| descripcion         | No disponible en la consulta | Se muestra un mensaje alternativo           |

## Funcionalidades

Visualización de libros destacados en la página de inicio.
Catálogo de libros obtenido desde una API.
Búsqueda de libros por título y autor.
Filtrado de libros por categoría.
Páginas individuales con información de cada libro.
Diseño adaptable a dispositivos móviles y computadores.
Datos de prueba como alternativa cuando la API no está disponible.

## Manejo de datos faltantes

Cuando la API no proporciona algún dato, se utilizan valores alternativos para evitar que la aplicación presente información vacía.

Si la conexión con la API falla, se utilizan los libros de prueba definidos en el proyecto.

## Instalación y ejecución

Instalar dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Construir el proyecto:

```bash
npm run build
```

## Proyecto académico

Asignatura: Programación IV
Institución Universitaria Antonio José Camacho.
