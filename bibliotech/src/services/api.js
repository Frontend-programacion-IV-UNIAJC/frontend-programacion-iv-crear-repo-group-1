import { libros as librosPrueba } from "../components/data/datos-prueba.js";

// Dirección de la API de Open Library
const API_URL =
  "https://openlibrary.org/search.json?q=ingenieria&limit=12&fields=key,title,author_name,cover_i,first_publish_year,subject,publisher,edition_count,language";

/**
 * Convierte los datos de Open Library
 * al formato que utiliza BiblioTech.
 */
function adaptarLibro(item) {
  return {
    id: String(item.key?.split("/").pop() || ""),
    titulo: item.title || "Título no disponible",
    autor: item.author_name?.join(", ") || "Autor no disponible",
    categoria: item.subject?.[0] || "Ingeniería (aprox.)",
    imagen: item.cover_i
      ? `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`
      : "https://placehold.co/300x450?text=Sin+portada",
    anio: item.first_publish_year || 0,
    editorial: item.publisher?.[0] || "No disponible",
    descripcion: "Descripción no disponible en la API.",
  };
}

/**
 * Obtiene los libros de Open Library.
 * Si ocurre un error, utiliza los datos de prueba.
 */
export async function obtenerLibros() {
  try {
    const respuesta = await fetch(API_URL, {
      signal: AbortSignal.timeout(8000),
    });

    if (!respuesta.ok) {
      throw new Error(`Error de la API: ${respuesta.status}`);
    }

    const datos = await respuesta.json();

    if (!datos.docs || !Array.isArray(datos.docs)) {
      throw new Error("La respuesta de la API no contiene libros.");
    }

    return datos.docs.map(adaptarLibro);
  } catch (error) {
    console.error("No se pudo conectar con Open Library:", error);

    console.warn("Se utilizarán los libros de prueba de BiblioTech.");

    return librosPrueba;
  }
}
