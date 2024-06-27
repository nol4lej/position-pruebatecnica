export const handleResponse = (response) => {
    // Verificar si la respuesta está en el rango de éxito (200-299)
    if (response.status >= 200 && response.status < 300) {
      // Retornar los datos de la respuesta exitosa
      return response;
    }
    // Si la respuesta no está en el rango esperado, lanzar un error
    throw new Error(`Request failed with status: ${response.status}, ${response.statusText}`);
  };