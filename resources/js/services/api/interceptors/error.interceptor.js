// Función para manejar errores de red y de servidor
export const handleError = ( error => {

  if (error.response) {
    // Manejo de error si existe una respuesta del servidor
    const errorMessage =
      error.response.data.error ||
      error.response.data.message ||
      "Error with the response";

    console.error({
      message: errorMessage,
      status: error.response.status
    });
    throw new Error(errorMessage);


  } else if (error.request) {
    // Manejo de error si la solicitud fue realizada pero no se obtuvo respuesta del servidor
    const errorMessage =
      error.request.response.error ||
      error.request.statusText ||
      "No response received from the server";

    console.error({
      message: errorMessage,
      status: error.request.status
    });

    throw new Error(errorMessage);


  } else {
    // Manejo de error si ocurrió un error desconocido
    const errorMessage = error.message || "Unknown error occurred";
    console.error({
      message: errorMessage,
      status: 500
    });
    throw new Error(errorMessage);
  }

});