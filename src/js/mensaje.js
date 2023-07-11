export function mensajes(respuesta){
    switch (respuesta) {
        case 200:
            Swal.fire({
                icon: 'success',
                title: 'Creado con éxito!',
              });
            break;
        case 400:
            Swal.fire({
                icon: 'error',
                title: 'Ha sucedido un error revise los datos '           
              });
            break;
        default:
            Swal.fire({
                icon: 'error',
                title: 'Error interno '+mensaje
          
              });
            break;
      }
}